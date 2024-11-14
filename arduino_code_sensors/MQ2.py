import serial

# Set the correct COM port (e.g., 'COM3' on Windows or '/dev/ttyUSB0' on Linux)
ser = serial.Serial('COM15', 9600)

while True:
    line = ser.readline().decode('utf-8').strip()
    print(line)  # Print the data received from Arduino
