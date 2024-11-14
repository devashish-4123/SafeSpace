import serial
import time

# Set up the serial connection (update the port as per your system)
# For example, use 'COM3' on Windows or '/dev/ttyUSB0' on Linux
ser = serial.Serial('COM15', 9600)
time.sleep(1)  # Wait for the connection to initialize

def read_sensor_data():
    # Request data from Arduino
    ser.write(b'read')  # Send any byte to initiate a read, or adapt if needed
    # time.sleep(1)  # Allow time for Arduino to send the data

    # Read lines from the serial buffer
    while ser.in_waiting:
        line = ser.readline().decode('utf-8').strip()
        print(line)  # Output received data

try:
    while True:
        read_sensor_data()
        # time.sleep(1)  # Wait between readings

except KeyboardInterrupt:
    print("Stopping...")
    ser.close()
