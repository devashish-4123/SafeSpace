import time
import redis
import pymongo
import pandas as pd
from datetime import datetime
import serial
import json
from DB.mongodb import mongodb_client

# Set the correct COM port (e.g., 'COM3' on Windows or '/dev/ttyUSB0' on Linux)
ser = serial.Serial('COM15', 9600)



# data_df = pd.read_csv('AirQualityUCI.csv', sep=";")  
data_index = 0   
batch_size = 50
batch = []
# other imports and setup code

while True:
    data = ser.readline().decode('utf-8').strip()
    print(data)
    
    if data is None:
        print("End of data.")
        break

    try:
        # Parse the string into a dictionary
        data_dict = json.loads(data)

        # Cache each reading temporarily in Redis as a backup
        r.rpush("sensor_data_cache", json.dumps(data_dict))

        # Add parsed data dictionary to batch list
        batch.append(data_dict)

        # Write batch to MongoDB once batch size is met
        if len(batch) >= batch_size:
            try:
                collection.insert_many(batch)
                print(f"Inserted {len(batch)} records into MongoDB")

                # Clear batch and Redis cache as data is now stored in MongoDB
                batch.clear()
                r.delete("sensor_data_cache")
            except Exception as e:
                print(f"Error inserting into MongoDB: {e}")

    except json.JSONDecodeError:
        print("Failed to decode JSON data:", data)

    # time.sleep(1)

