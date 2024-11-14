// Define the pins
// const int analogPin = A2; // Analog output pin from the CZN-15EA
const int digitalPin = 2; // Digital output pin from the CZN-15EA

void setup() {
  // Start the Serial Monitor for debugging
  Serial.begin(9600);
  
  // Set the digital pin as an input
  pinMode(digitalPin, INPUT);
  
  // Set the analog pin as an input (optional if it's used)
  // pinMode(analogPin, INPUT);
}

void loop() {
  // Read the analog value from the sensor (0 to 1023)
  // int analogValue = analogRead(analogPin);
  
  // Read the digital value from the sensor (0 or 1)
  int digitalValue = digitalRead(digitalPin);

  // Print the analog and digital values to the Serial Monitor
  // Serial.println("Analog Value: ");
  // Serial.print(analogValue);  // Value from 0 to 1023, representing sound intensity
  // Serial.print("\n");

  Serial.print("Digital Value: ");
  Serial.println(digitalValue);  // 0 or 1 (Low or High), if sound is above threshold

  // Delay to avoid flooding the Serial Monitor
  delay(100); // Delay for half a second
}
