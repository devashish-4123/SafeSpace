/**************************************************************************** 
  Author : Andy @ MYBOTIC www.mybotic.com.my
  Date:5/7/2016 
  Project: How to detect the concentration of gas by using MQ2 sensor
****************************************************************************/

/************************Hardware Related Macros************************************/
const int MQ_PIN = A0; // Define which analog input channel you are going to use

/***********************Software Related Macros************************************/
int CALIBRATION_SAMPLE_TIMES = 50; // Define how many samples you are going to take in the calibration phase
int CALIBRATION_SAMPLE_INTERVAL = 500; // Define the time interval (in milliseconds) between each sample during calibration
int READ_SAMPLE_INTERVAL = 50; // Define the time interval (in milliseconds) between each sample in normal operation
int READ_SAMPLE_TIMES = 5; // Define how many samples you are going to take in normal operation

/**********************Application Related Macros**********************************/
#define GAS_LPG 0   
#define GAS_CO 1   
#define GAS_SMOKE 2    

/*****************************Globals**********************************************/
float LPGCurve[3] = {2.3, 0.21, -0.47}; // LPG sensor curve
float COCurve[3] = {2.3, 0.72, -0.34}; // CO sensor curve
float SmokeCurve[3] = {2.3, 0.53, -0.44}; // Smoke sensor curve
float Ro = 10; // Ro is initialized to 10 kilo ohms

void setup() {
  Serial.begin(9600); // Start the serial communication at 9600 baud rate
  Serial.println("Calibrating...");

  Ro = MQCalibration(MQ_PIN); // Calibrating the sensor. Make sure the sensor is in clean air

  Serial.print("Calibration done! ");
  Serial.print("Ro = ");
  Serial.print(Ro);
  Serial.println(" kohm");
  delay(3000);
}

void loop() {  
  long iPPM_LPG = 0;
  long iPPM_CO = 0;
  long iPPM_Smoke = 0;

  iPPM_LPG = MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_LPG);
  iPPM_CO = MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_CO);
  iPPM_Smoke = MQGetGasPercentage(MQRead(MQ_PIN) / Ro, GAS_SMOKE);

  // Send data as a formatted string
  Serial.print(iPPM_LPG);
  Serial.print(",");
  Serial.print(iPPM_CO);
  Serial.print(",");
  Serial.println(iPPM_Smoke);

  delay(1000); // Delay between readings
}


/****************** MQResistanceCalculation ****************************************
Input:   raw_adc - raw value read from adc, which represents the voltage
Output:  the calculated sensor resistance
************************************************************************************/ 
float MQResistanceCalculation(int raw_adc) {
  return ((float)(1023 - raw_adc) / raw_adc); // Simplified calculation without load resistor
}

/***************************** MQCalibration ****************************************
Input:   mq_pin - analog channel
Output:  Ro of the sensor
************************************************************************************/ 
float MQCalibration(int mq_pin) {
  int i;
  float val = 0;

  for (i = 0; i < CALIBRATION_SAMPLE_TIMES; i++) {
    val += MQResistanceCalculation(analogRead(mq_pin));
    delay(CALIBRATION_SAMPLE_INTERVAL);
  }
  
  val = val / CALIBRATION_SAMPLE_TIMES; // Average value
  return val; // Return the Ro value after calibration
}

/*****************************  MQRead *********************************************
Input:   mq_pin - analog channel
Output:  Rs of the sensor
************************************************************************************/ 
float MQRead(int mq_pin) {
  int i;
  float rs = 0;

  for (i = 0; i < READ_SAMPLE_TIMES; i++) {
    rs += MQResistanceCalculation(analogRead(mq_pin));
    delay(READ_SAMPLE_INTERVAL);
  }

  rs = rs / READ_SAMPLE_TIMES;
  return rs;  
}

/*****************************  MQGetGasPercentage **********************************
Input:   rs_ro_ratio - Rs divided by Ro
         gas_id      - target gas type
Output:  ppm of the target gas
************************************************************************************/ 
long MQGetGasPercentage(float rs_ro_ratio, int gas_id) {
  if (gas_id == GAS_LPG) {
    return MQGetPercentage(rs_ro_ratio, LPGCurve);
  } else if (gas_id == GAS_CO) {
    return MQGetPercentage(rs_ro_ratio, COCurve);
  } else if (gas_id == GAS_SMOKE) {
    return MQGetPercentage(rs_ro_ratio, SmokeCurve);
  }

  return 0;
}

/*****************************  MQGetPercentage **********************************
Input:   rs_ro_ratio - Rs divided by Ro
         pcurve      - pointer to the curve of the target gas
Output:  ppm of the target gas
************************************************************************************/ 
long MQGetPercentage(float rs_ro_ratio, float *pcurve) {
  return (pow(10, (((log(rs_ro_ratio) - pcurve[1]) / pcurve[2]) + pcurve[0])));
}
