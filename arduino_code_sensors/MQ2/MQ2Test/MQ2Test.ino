#define MQ2_PIN A0  // Analog input pin for MQ2 sensor

void setup() {
  Serial.begin(9600);
  // Serial.println("MQ-2 Gas Sensor Reading for Multiple Gases");
}

void loop() {
  Serial.println(analogRead(A0));
  delay(500);
}
