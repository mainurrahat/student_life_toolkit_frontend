import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Shedule from "@/pages/Shedule/Shedule";
import Budget from "@/pages/Budget Tracker/Budget";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Login/Register";
import ExamQA from "@/pages/Exam Q&A/Exam";
import StudyPlannerPage from "@/pages/Study Planner/StudyPlannerPage";
import GPA from "@/pages/Gpa/gpa";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/schedule", element: <Shedule></Shedule> },
      { path: "/budget", element: <Budget></Budget> },

      { path: "/exam", element: <ExamQA></ExamQA> },
      { path: "/planner", element: <StudyPlannerPage></StudyPlannerPage> },
      { path: "/gpa", element: <GPA></GPA> },

      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
