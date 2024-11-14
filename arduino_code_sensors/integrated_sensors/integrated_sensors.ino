#include "DHT.h"

// Define sensor pins
const int PIR_PIN = 2;              // PIR sensor digital pin
const int CZN_DIGITAL_PIN = 9;      // CZN-15EA digital output
const int DHT_PIN = 3;              // DHT11 sensor pin
const int MQ_PIN = A0;              // MQ2 sensor analog pin
const int DHTTYPE = DHT11;          // DHT sensor type

// Initialize sensors
DHT dht(DHT_PIN, DHTTYPE);

// Macros for gases
#define GAS_LPG 0
#define GAS_CO 1
#define GAS_SMOKE 2

void setup() {
  Serial.begin(9600);  // Initialize serial communication
  pinMode(PIR_PIN, INPUT);
  pinMode(CZN_DIGITAL_PIN, INPUT);
  dht.begin();
}

void loop() {
  // PIR Sensor
  int pirState = digitalRead(PIR_PIN);
  String motionDetected = (pirState == HIGH) ? "true" : "false";

  // CZN-15EA Sensor
  int cznDigitalValue = digitalRead(CZN_DIGITAL_PIN);

  // DHT11 Sensor
  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();
  float tempF = dht.readTemperature(true);
    float heatIndex = dht.computeHeatIndex(tempC, humidity, false);  // in Fahrenheit


  // Check for DHT errors
  if (isnan(humidity) || isnan(tempC) || isnan(tempF)) {
    Serial.println("Failed to read from DHT sensor!");
    return;  // Stop further execution if DHT reading fails
  }

  // MQ2 Sensor (Analog Reading Only)
  int mqReading = analogRead(MQ_PIN);

  // Create JSON formatted string
  Serial.print("{");
  Serial.print("\"motionDetected\": "); Serial.print(motionDetected); Serial.print(", ");
  Serial.print("\"cznDigitalValue\": "); Serial.print(cznDigitalValue); Serial.print(", ");
  Serial.print("\"humidity\": "); Serial.print(humidity); Serial.print(", ");
  Serial.print("\"temperatureC\": "); Serial.print(tempC); Serial.print(", ");
  Serial.print("\"HeatIndex\": "); Serial.print(heatIndex); Serial.print(", ");
  Serial.print("\"mqReading\": "); Serial.print(mqReading);
  Serial.println("}");

  delay(500);  // Delay for 500ms before the next reading
}
