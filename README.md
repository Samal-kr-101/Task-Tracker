# 🚀 TaskFlow - MERN Task Tracker

A modern **Task Management Web Application** built using the **MERN Stack**. TaskFlow helps users efficiently manage their daily tasks with a clean, responsive, and interactive user interface.

---


## 🌐 Live Demo

- **Frontend:** https://task-tracker-omega-steel.vercel.app/
- **Backend API:** https://task-tracker-t8kj.onrender.com/

---

## ✨ Features

- ✅ Create Tasks
- ✅ View All Tasks
- ✅ Update Existing Tasks
- ✅ Delete Tasks
- ✅ Search Tasks
- ✅ Filter Tasks by Status
- ✅ Dashboard Statistics
- ✅ Responsive Design
- ✅ Toast Notifications
- ✅ RESTful APIs
- ✅ MongoDB Database Integration
- ✅ Dynamic UI without Page Refresh

---

## 🛠 Tech Stack

### Frontend
- React.js
- CSS3
- Axios
- React Toastify

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📁 Project Structure

```
TaskFlow/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/taskflow-mern.git
```

Move into the project folder.

```bash
cd taskflow-mern
```

---

## Backend Setup

Move to backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Start the backend server.

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal.

Move to frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
VITE_API_URL=http://localhost:5000/api
```

Run the frontend.

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create a task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## 🎯 Assignment Requirements Covered

- ✔ React.js Frontend
- ✔ Node.js + Express Backend
- ✔ MongoDB Integration
- ✔ CRUD Operations
- ✔ REST APIs
- ✔ Form Validation
- ✔ Responsive UI
- ✔ Dynamic Updates
- ✔ Search Functionality
- ✔ Filter Functionality
- ✔ Reusable Components
- ✔ Environment Variables
- ✔ Public Deployment

---

## 👨‍💻 Author

**Samal Kumar**

GitHub: https://github.com/Samal-kr-101/

LinkedIn: https://www.linkedin.com/in/samal-kumar-choudhary-0139582a9/

---

## ⭐ If you like this project

Please consider giving it a ⭐ on GitHub!
