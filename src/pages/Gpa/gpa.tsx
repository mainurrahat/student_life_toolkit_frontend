import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface Course {
  id: string;
  name: string;
  credit: number;
  grade: string;
}
const gradePointMap: Record<string, number> = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  D: 1.0,
  F: 0,
};

const CGPA = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseName, setCourseName] = useState("");
  const [credit, setCredit] = useState<number | "">("");
  const [grade, setGrade] = useState("A");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cgpaCourses");
    if (saved) setCourses(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cgpaCourses", JSON.stringify(courses));
  }, [courses]);

  const handleAddCourse = () => {
    if (!courseName || !credit || !grade) {
      alert("Please fill all fields!");
      return;
    }

    const newCourse: Course = {
      id: uuidv4(),
      name: courseName,
      credit: Number(credit),
      grade,
    };
    setCourses([...courses, newCourse]);
    setCourseName("");
    setCredit("");
    setGrade("A");
  };

  const handleDelete = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const totalCredits = courses.reduce((sum, c) => sum + c.credit, 0);
  const totalPoints = courses.reduce(
    (sum, c) => sum + c.credit * (gradePointMap[c.grade] || 0),
    0
  );
  const cgpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";

  return (
    <div className="min-h-screen bg-[#F8F6F2] p-6">
      <h1 className="text-3xl font-bold text-[#5A6D57] mb-6 text-center">
        🎓 CGPA Calculator
      </h1>

      {/* Add Course Form */}
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Course</h2>
        <input
          type="text"
          placeholder="Course Name"
          className="input input-bordered w-full mb-3 rounded-lg"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Credit"
          className="input input-bordered w-full mb-3 rounded-lg"
          value={credit}
          onChange={(e) => setCredit(Number(e.target.value))}
        />
        <select
          className="select select-bordered w-full mb-3 rounded-lg"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          {Object.keys(gradePointMap).map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddCourse}
          className="btn w-full bg-[#5A6D57] hover:bg-[#4A5A47] text-white rounded-lg mt-2 transition"
        >
          Add Course
        </button>
      </div>

      {/* Course List */}
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-4">Course List</h2>
        {courses.length === 0 ? (
          <p className="text-gray-500">No courses added yet.</p>
        ) : (
          <ul className="space-y-3">
            {courses.map((c) => (
              <li
                key={c.id}
                className="flex justify-between items-center p-3 border rounded-lg hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-gray-600">
                    Credit: {c.credit}, Grade: {c.grade}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CGPA Summary */}
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <p className="mb-2 font-medium">Total Credits: {totalCredits}</p>
        <p className="mb-2 font-medium">CGPA: {cgpa}</p>
      </div>
    </div>
  );
};

export default CGPA;
