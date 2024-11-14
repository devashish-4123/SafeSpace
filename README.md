# SafeSpace – Industrial Safety Monitoring Solution

SafeSpace is a cutting-edge industrial safety system designed to revolutionize workplace safety through real-time monitoring, hazard detection, and proactive alerts. By integrating AI, IoT, and advanced data analytics, SafeSpace ensures personnel protection, hazard awareness, and compliance, fostering a safer and more productive work environment. 🚧⚙️

### Key Features 📌

- Gemini API & Voice Integration: Uses the Gemini model to detect Personal Protective Equipment (PPE) compliance (e.g., helmet detection) and provide real-time audio notifications to workers and supervisors. 🎧
- CCTV PPE Monitoring: AI-powered cameras detect missing PPE and instantly notify supervisors to take action, ensuring safety protocols are followed. 📷👷‍♂️
- Mobile App Alerts: Real-time alerts sent to personnel’s mobile devices, enabling quick response to potential hazards. 📱🔔
- Data Logging in MongoDB: All safety events and metadata are logged in MongoDB, enabling easy analysis and tracking of incidents over time. 🗃️
- IoT Hazard Detection: Sensors monitor environmental factors such as gas, sound, temperature, and humidity levels, with alerts triggered if any hazardous conditions are detected. 🌡️💨
- PIR Motion Detection: Uses Passive Infrared (PIR) sensors to monitor movement and enhance security by detecting unusual motion patterns. 🚶‍♂️🔍
- Fall & Unconsciousness Detection: AI-powered motion analysis detects incidents like falls or unconsciousness, immediately alerting emergency personnel for prompt intervention. 🏃‍♂️⚠️

### Architecture 🌐
![image](https://github.com/user-attachments/assets/b1209c8b-d2df-490e-9b99-f0831b55eff2)

### Video Demo
https://youtu.be/ClPK6ac-RXc?si=2f1PcR-8YJM3rDQH


### Solution Overview 🔧
SafeSpace integrates multiple components to ensure comprehensive safety monitoring:

1. PPE Compliance and Entry Control:
The CCTV and Kiosk System ensures that workers wear the appropriate PPE (e.g., helmets) before entering a hazardous area. This system relies on the Gemini Model, which checks the worker’s PPE compliance. If the worker is not wearing the required PPE, access is denied. If the PPE is detected, entry is granted. 🛑👷‍♂️

2. Sensor Data Monitoring:
Sensors like MQ2 (gas), PIR (motion), DHT11 (temperature & humidity), and CZN15EA (gas) continuously monitor environmental conditions around the workplace. These sensors communicate with a Redis Cache to temporarily store sensor data, reducing the load on the database and improving performance.

3. Data Storage & Communication:
Once data is captured and cached, it's inserted into MongoDB for permanent storage. The system uses MQTT to efficiently communicate between devices and store data, ensuring low latency and high throughput. This also allows the system to handle batch processing of large data sets, optimizing performance.

4. Data Processing & Alerts:
After storing sensor data, it is processed by various Machine Learning (ML) models, including Yolov8 and Gemini, to detect anomalies and trigger alerts. If a hazard is detected, the system sends notifications to managers and supervisors via mobile or desktop applications. 🚨

5. Visualization & Dashboard:
Processed data is visualized on an interactive dashboard, providing real-time insights into the safety status of the industrial facility. The dashboard is hosted on Github.io for easy access, and critical alerts are prominently displayed. The mobile app is also synchronized to display safety data and receive emergency alerts. 📊📲

### Tech Stack 💻

- Frontend:
  - ReactJS (UI/UX)
  - Chakra UI (Design system)

- Backend:
  - NodeJS (Server-side)
  - Python (ML model processing)

- Model:
  - Yolov8 (Object detection, PPE recognition)
  - Gemini (Voice and compliance monitoring)

- Database:
  - MongoDB (Data storage)
  - Redis (Caching)

- Deployment & Data Processing:
  - Github.io (Dashboard hosting)
  - MQTT (Message Queuing for device communication)

- Sensors:
  - MQ2 (Gas sensor)
  - PIR (Motion detection)
  - CZN15EA (Gas sensor)
  - DHT11 (Temperature & humidity)
  - Arduino Uno R3 (Microcontroller for sensor integration)

- Mobile App:
  - React Native (Cross-platform mobile app development)

### Directory Structure
```
SafeSpace/
├── App/
|   ├── MyApp/           # React Native expo
|   └──  main.py         # Alert detection
|
├── server/               # Backend server code
|   └── app/
│       ├── controllers/      # API Controllers
│       ├── routes/           # API Routes
│       ├── models/           # Database Models
│       ├── helper/           # Helper Files
│       └── main.py           # Server & Model entry point 
├── kiosk_frontend/       # Kiosk application 
│   ├── src/              
│   ├── public/
│   └── package.json      
├── dashboard_frontend/   # Dashboard application 
│   ├── src/              
│   ├── public/          
│   └── package.json      
└── README.md             # Project documentation
```

### Special Track: Interactive Features 🛠️
 - **MongoDB for Data Logging and Analysis** 📊:
    MongoDB plays a central role in SafeSpace by storing all logged safety events, sensor data, and environmental readings. Every incident, whether it's an alert for missing PPE or hazardous conditions, is recorded as a document in MongoDB. This setup allows for easy querying, aggregating, and analyzing data over time, which can be essential for understanding safety trends, evaluating compliance, and enhancing safety protocols. MongoDB’s flexibility and scalability make it ideal for SafeSpace's diverse data requirements.


 - **Gemini API for Real-Time Voice Integration** 🗣️:
The Gemini API is used in SafeSpace to enhance voice-based interactions. It identifies whether a worker is compliant with PPE requirements, such as helmet detection, and communicates immediate feedback. If a worker is missing PPE, Gemini provides a real-time voice alert, instructing them to take corrective action. This audio integration fosters a proactive safety culture, with instant auditory feedback ensuring that PPE requirements are followed consistently.


 - **GitHub Pages (Github.io) for Accessible Dashboard Deployment** 📈:
SafeSpace's dashboard is deployed on GitHub Pages, using Github.io as the hosting platform. By leveraging GitHub Pages, we provide a readily accessible dashboard with minimal deployment complexity and zero downtime. The platform ensures that the dashboard is always accessible from any device, allowing managers and workers to view safety metrics, track alerts, and respond quickly to incidents. This setup also enables open collaboration, where updates can be managed easily through the GitHub repository.


### Why AI & IoT? 🤖🌐
Incorporating AI and IoT technologies into SafeSpace allows for real-time monitoring and a proactive safety approach. AI enables automatic hazard detection, PPE compliance verification, and alert generation, while IoT sensors provide continuous, real-time data on environmental conditions. This combination not only enhances situational awareness but also speeds up response times and ensures that the workplace remains as safe as possible. SafeSpace is not just a monitoring system; it’s a smart, interconnected platform designed to prevent accidents before they occur. 🛠️⚡

### Long-Term Vision 🌱

The long-term vision for SafeSpace is to continually improve and expand its capabilities in the following ways:
- Advanced Hazard Detection: Further enhance anomaly detection using more advanced machine learning models.
- Health Monitoring: Integrate biometric sensors to monitor worker health in addition to environmental factors.
- Predictive Analytics: Use AI to predict potential hazards based on historical data and trends.
- Automation and Integration: Improve system automation, enabling even quicker responses and seamless integration with industrial control systems.
SafeSpace aims to create a smarter, more proactive safety culture in industrial workplaces, continuously evolving to meet new challenges in safety monitoring and compliance. 🔒🛡️





