# 🌐 NodeLink

A modern **video conferencing and chat application** built with **React** and **Node.js**, enabling real-time peer-to-peer communication with support for both **guest** and **registered** users.  

---

## 🚀 Live Link
🔗 **Live Demo:** [https://nodelink-4m9h.onrender.com/](https://nodelink-4m9h.onrender.com/)  

⚠️ **Note:** The backend is deployed on **Render (free tier)**, so it may take up to **30 seconds** to wake up if idle.  
If login/meeting creation fails initially, visit the backend directly to wake it:  
👉 [https://nodelink-backend.onrender.com/](https://nodelink-backend.onrender.com/) 

## 📸 Screenshots
<p align="center">
  <img src="https://i.postimg.cc/B62XmZ4G/NL1.png" alt="Landing Page" width="40%"/>
  <img src="https://i.postimg.cc/ZR6CwY4k/NL2.png" alt="Home Page" width="40%"/>
  <img src="https://i.postimg.cc/bJ1smY87/NL3.png" alt="History Page" width="40%"/>
  <img src="https://i.postimg.cc/0Q7bV5x4/NL4.png" alt="Joining Page" width="40%"/>
</p>

---

## ✨ Features

- 👤 **Guest Access** – Join meetings instantly without registration using randomly generated room codes  
- 🔐 **User Authentication** – Register and log in with persistent meeting history tracking  
- 🎥 **Real-Time Video/Audio** – WebRTC-powered peer-to-peer video conferencing  
- 🖥️ **Screen Sharing** – Share your screen during meetings  
- 💬 **Live Chat** – Text-based messaging during video calls  
- 📜 **Meeting History** – Track past meetings for registered users  

---

## 🏗️ Technology Stack

### 🖥️ Frontend
- **React 18+** with hooks and Context API  
- **Material-UI (MUI)** for consistent design components  
- **Socket.IO Client** for WebSocket communication  
- **Axios** for REST API calls  
- **React Router** for SPA navigation  

### ⚙️ Backend
- **Express.js** for REST API endpoints  
- **Socket.IO** for WebSocket signaling  
- **MongoDB with Mongoose ODM** for data persistence  
- **bcrypt** for secure password hashing  

---

## ⚡ Quick Start

### 🔹 Guest Access
1. Visit the landing page  
2. Click **“Join as Guest”** to generate a random meeting room  
3. Share the meeting URL with participants  

### 🔹 User Registration
1. Click **“Register”** on the landing page  
2. Create an account to unlock meeting history tracking  
3. Log in to view past meetings and create new ones  

---

## 🧱 Architecture Overview

**NodeLink** uses a **hybrid communication model** combining:

- **HTTP APIs** – Authentication, meeting history  
- **WebSocket signaling** – Real-time event handling (via Socket.IO)  
- **WebRTC peer-to-peer** – Direct media streaming between participants  

### Supported Users
- **Guest Users** → Anonymous, random meeting rooms  
- **Registered Users** → Persistent accounts with authentication and meeting history  


---

## 🔑 Key Components

- **`VideoMeetComp`** – Core video conferencing component, manages WebRTC connections & media streams  
- **`AuthContext`** – Centralized authentication & user management  
- **`LandingPage`** – Onboarding with guest access & registration flows  

---

## 📝 Notes

- Demonstrates a **complete video conferencing solution** with both guest and registered user flows.  
- **Core Meeting System** handles:  
  - WebRTC peer connections  
  - Real-time communication via Socket.IO signaling  
- **Authentication System** supports:  
  - Registration & login  
  - Persistent meeting history tracking  

---

## 📧 Contact

Developed by **Akshat Pawar**  
🔗 GitHub: [@akshatpawar](https://github.com/akshatpawar)

