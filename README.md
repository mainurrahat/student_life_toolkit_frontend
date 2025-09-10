# 📚 Student Toolkit

**A React web application designed to make student life easier by managing classes, budgets, exams, and study plans efficiently.**

[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)](https://nodejs.org/)

---

## 🎯 Features

### 1. Class Schedule Tracker
- Keep track of daily or weekly classes.  
- Add, edit, or delete classes (subject, time, day, instructor).  
- Color-coded subjects for easy distinction.  
- Countdown timer showing upcoming classes and ongoing lectures.  

### 2. Budget Tracker
- Track income and expenses with categories (e.g., food, transport, books).  
- Visual representation using charts/graphs.  
- Alerts for overspending or budget limits.  

### 3. Exam Q&A Generator
- Generate random practice questions (MCQs, short answers, true/false).  
- Set difficulty levels: Easy, Medium, Hard.  
- Save favorite questions for future revision.  

### 4. Study Planner
- Break down study goals into smaller tasks.  
- Assign **subject, topic, priority level, and deadlines**.  
- Real-time countdown to deadlines.  
- Progress bar visualizing completion status.  

### 5. Unique Feature
- **Smart Task Reminder:** Notifications for upcoming classes, deadlines, and study tasks.  
- **CGPA/Grade Calculator:** Quickly calculate semester CGPA or cumulative grades to monitor academic performance.  
- Optional: Dark mode toggle for better accessibility and focus.  


---

## 💻 Tech Stack

### Frontend
- **React.js** + **TypeScript**  
- **Tailwind CSS** for responsive design  
- **React Icons** for visuals  
- **React-Toastify** for notifications  
- **Recharts/Chart.js** for graphs  

### Backend
- **Node.js** + **Express.js**  
- **MongoDB / PostgreSQL** for persistent storage  
- REST API for CRUD operations  

### State Management
- React **Context API** or **Redux Toolkit**  

---

## 🔧 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/student-toolkit.git
cd student-toolkit
Install dependencies

bash
Copy code
npm install
Run frontend

bash
Copy code
npm start
Run backend

bash
Copy code
cd backend
npm install
npm start
Open your browser

Frontend: http://localhost:3000

Backend API: http://localhost:5000

🛡️ Validation & Error Handling
Validates time, date, and numeric inputs.

Prevents negative values for expenses and duration.

User-friendly error messages using SweetAlert2.

🎨 UI/UX Design
Fully responsive layout for desktop, tablet, and mobile.

Color-coded schedules and priority indicators.

Smooth transitions and interactive effects.

Real-time updates for deadlines and progress bars.

📂 Project Structure
bash
Copy code
/frontend - React application
  /components - UI components (StudyCard, StudyForm, ClassList, etc.)
  /pages - Page-level components
  /api - Axios API calls

/backend - Node.js/Express backend
  /models - Database models
  /routes - API routes
  /controllers - Business logic
📌 How to Use
Class Tracker: Add your weekly subjects and track lectures.

Budget Tracker: Monitor incomes, expenses, and savings.

Exam Q&A Generator: Generate and practice questions by topic/difficulty.

Study Planner: Add study tasks, set priorities and deadlines, and track progress.

📷 Screenshots
(Add screenshots of your app here with captions)

Class Tracker view

Budget Tracker chart

Exam Q&A generator interface

Study Planner dashboard

🌐 Live Demo
Check it out here

📁 Repository
GitHub Repo Link

🎥 Presentation Video
Watch Here

