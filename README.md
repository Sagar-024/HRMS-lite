# HRMS Lite 🚀

> A lightweight, modern Human Resource Management System designed for efficiency and aesthetics.

![HRMS Lite Dashboard](https://via.placeholder.com/1200x600?text=HRMS+Lite+Dashboard+Preview)

## 📋 Overview

HRMS Lite is a full-stack web application built to streamline essential HR operations. It allows administrators to manage employee records and track daily attendance through a clean, premium, and professional interface.

This project was built as a **Full-Stack Coding Assignment** with a focus on:

- **Production-Ready UI/UX**: Custom design system using Tailwind CSS.
- **Robust Backend**: RESTful API with MongoDB persistence and validation.
- **Modern Stack**: React (Vite), Node.js, Express, and Zustand for state management.

## ✨ Key Features

### 👥 Employee Management

- **Add Employees**: Register new staff with ID validation (supports alphanumeric & hyphens).
- **View Directory**: Access a complete list of employees with department details.
- **Remove Records**: Delete employee profiles securely.

### 📅 Attendance Tracking

- **Mark Attendance**: Log daily status (Present/Absent).
- **View Logs**: Comprehensive history of attendance records.
- **Filter**: Search/Filter attendance logs by Employee ID.

### 📊 Dashboard

- **Real-time Metrics**: View total employees, daily attendance, and absence rates.
- **Quick Actions**: One-click navigation to core tasks.
- **Activity Feed**: Live feed of recent system events.

## 🛠️ Tech Stack

**Frontend:**

- [React](https://reactjs.org/) (Vite)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Zustand](https://github.com/pmndrs/zustand) (State Management)
- [Lucide React](https://lucide.dev/) (Icons)
- [React Router](https://reactrouter.com/) (Routing)

**Backend:**

- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) (Database)
- [Mongoose](https://mongoosejs.com/) (ODM)
- [Cors](https://www.npmjs.com/package/cors) & [Dotenv](https://www.npmjs.com/package/dotenv)

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB Atlas Connection String

### Installation

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/YOUR_USERNAME/hrms-lite.git
    cd hrms-lite
    ```

2.  **Backend Setup**

    ```bash
    cd backend
    npm install
    ```

    - Create a `.env` file in the `backend` directory:
      ```env
      PORT=5000
      MONGODB_URI=your_mongodb_connection_string
      NODE_ENV=development
      ```
    - Start the Server:
      ```bash
      npm run dev
      ```
    - _Server will run on `http://localhost:5000`_

3.  **Frontend Setup**
    - Open a new terminal.
    ```bash
    cd frontend
    npm install
    # Start the Vite dev server
    npm run dev
    ```

    - _App will run on `http://localhost:5173`_

## 🌐 Deployment Logic

- **Frontend**: Deployed on [Vercel](https://vercel.com).
- **Backend**: Deployed on [Render](https://render.com) / [Railway](https://railway.app).
- **Database**: Hosted on [MongoDB Atlas](https://www.mongodb.com/atlas).

## 📝 Assumptions & Design Decisions

- **Authentication**: As per requirements, the system assumes a single Admin user (No login required).
- **ID Format**: Employee IDs are flexible (e.g., `EMP-001`) to support various org structures.
- **Design**: Prioritized a "Premium/Clean" aesthetic over a standard admin template to demonstrate frontend design skills.

---

Made with ❤️ by [Your Name]
