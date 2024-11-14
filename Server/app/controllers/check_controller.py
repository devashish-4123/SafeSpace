# app/controllers/auth_controller.py
from app.DB.mongodb import mongodb_client
from pymongo.collection import Collection
from typing import Dict, Optional
from bson import ObjectId
from pymongo.errors import PyMongoError
from ..helpers.model.checkImage import detect_safety_gear
from ..helpers.modelAPI import ModelAPI
import base64
import os
import time
import requests
import google.generativeai as genai
import base64
from PIL import Image
from io import BytesIO
import base64
from dotenv import load_dotenv


load_dotenv()
api_key = os.getenv("API_KEY")


genai.configure(api_key=api_key)




class checkController:
    @staticmethod
    async def checkImages(empId, images):
        try:
            saved_images = []
            for idx, image_base64 in enumerate(images):
                # Decode the base64 image (synchronously)
                image_data = base64.b64decode(image_base64.split(",")[1])
                # Save the decoded image data to a file (synchronously)
                # image_path = f"./app/helpers/model/images/{empId}_image_{idx + 1}.png"  
                # with open(image_path, "wb") as image_file:
                #     image_file.write(image_data)
                #     saved_images.append(image_path)
            
            # Call the asynchronous function properly using await
            detection_results1 = await ModelAPI.process_inference(images[0])
            detection_results2 = await ModelAPI.process_inference(images[1])

            
            return [detection_results1, detection_results2]

        except Exception as e:
            print(f"Error saving images: {e}")
            return None
    
    # Configure API key
    @staticmethod
    async def process_image_from_api(images):
        try:
            # Download the image from the API
            image_data = images[0]
        
            # Remove the "data:image/png;base64," prefix if it exists
            if image_data.startswith("data:image"):
                header, image_data = image_data.split(",", 1)

            # Ensure the base64 string has proper padding
            padding = len(image_data) % 4
            if padding != 0:
                image_data += "=" * (4 - padding)

            # Decode the base64 string to binary data
            image_data = base64.b64decode(image_data)

            # Save the image locally with a unique filename using a timestamp
            timestamp = int(time.time())
            image_path = f"{timestamp}.jpeg"

            # Save the image
            with open(image_path, "wb") as f:
                f.write(image_data)

            try:
                # Upload the image file
                myfile = genai.upload_file(image_path)

                # Generate content using the uploaded file
                model = genai.GenerativeModel("gemini-1.5-flash")
                result = model.generate_content(
                    [myfile, "\n\n", "in the given image check if person is wearing all the safety gears ie. helmet, gloves, glasses, jacket, boots. Give output in json format nothing else in json also include a msg to the person that what whould he do in 1-3 sentences . sample is {gloves: true,helmet: false,glasses: true,jacket: true,boots: false,messge:please wear your helmet } "]
                )
                print(f"RESULTTT {result.text=}")
                return result.text  
            finally:
                # Delete the local file after use
                try:
                    # Close file before deleting
                    if os.path.exists(image_path):
                        os.remove(image_path)
                        print(f"Deleted temporary file: {image_path}")
                except Exception as e:
                    print(f"Error deleting the file: {e}")

        except Exception as e:
            print(f"Error in API: {e}")
            return None