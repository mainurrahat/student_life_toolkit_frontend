import { useState } from "react";
import axiosInstance from "../../api/axios";

interface ClassFormProps {
  onAdded: () => void;
}

const SheduleForm = ({ onAdded }: ClassFormProps) => {
  const [form, setForm] = useState({
    subject: "",
    instructor: "",
    day: "Monday",
    startTime: "",
    endTime: "",
    color: "#A8BBA3",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAdd = async () => {
    const subject = form.subject.trim();
    const instructor = form.instructor.trim();
    const startTime = form.startTime.trim();
    const endTime = form.endTime.trim();

    if (!subject || !instructor || !startTime || !endTime) {
      alert("All fields are required!");
      return;
    }

    if (startTime >= endTime) {
      alert("Start time must be earlier than end time!");
      return;
    }

    setIsSubmitting(true);
    try {
      await axiosInstance.post("/classes", { ...form });
      setForm({
        subject: "",
        instructor: "",
        day: "Monday",
        startTime: "",
        endTime: "",
        color: "#A8BBA3",
      });
      onAdded();
      alert("Class added successfully!");
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to add class!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden max-w-xl mx-auto">
      {/* Decorative circles */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#A8BBA3]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#A8BBA3]/20 rounded-full blur-3xl"></div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center relative z-10">
        Add New Class
      </h2>

      <div className="space-y-5 relative z-10">
        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            placeholder="Enter subject name"
            className="w-full px-4 py-3 rounded-xl border border-[#A8BBA3] focus:outline-none focus:ring-2 focus:ring-[#A8BBA3]/40 focus:border-[#A8BBA3] text-gray-900 placeholder-gray-400 transition"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        </div>

        {/* Instructor */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Instructor
          </label>
          <input
            type="text"
            placeholder="Enter instructor name"
            className="w-full px-4 py-3 rounded-xl border border-[#A8BBA3] focus:outline-none focus:ring-2 focus:ring-[#A8BBA3]/40 focus:border-[#A8BBA3] text-gray-900 placeholder-gray-400 transition"
            value={form.instructor}
            onChange={(e) => setForm({ ...form, instructor: e.target.value })}
          />
        </div>

        {/* Day */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Day
          </label>
          <select
            className="w-full px-4 py-3 rounded-xl border border-[#A8BBA3] focus:outline-none focus:ring-2 focus:ring-[#A8BBA3]/40 focus:border-[#A8BBA3] transition bg-white text-gray-900"
            value={form.day}
            onChange={(e) => setForm({ ...form, day: e.target.value })}
          >
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Time
          </label>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-gray-500 block mb-1">
                Start Time
              </label>
              <input
                type="time"
                className="w-full px-4 py-3 rounded-xl border border-[#A8BBA3] focus:outline-none focus:ring-2 focus:ring-[#A8BBA3]/40 focus:border-[#A8BBA3] transition"
                value={form.startTime}
                onChange={(e) =>
                  setForm({ ...form, startTime: e.target.value })
                }
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500 block mb-1">
                End Time
              </label>
              <input
                type="time"
                className="w-full px-4 py-3 rounded-xl border border-[#A8BBA3] focus:outline-none focus:ring-2 focus:ring-[#A8BBA3]/40 focus:border-[#A8BBA3] transition"
                value={form.endTime}
                onChange={(e) => setForm({ ...form, endTime: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Class Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              className="w-12 h-12 rounded-xl border border-[#A8BBA3] cursor-pointer shadow-sm transition"
              value={form.color}
              onChange={(e) => setForm({ ...form, color: e.target.value })}
            />
            <span className="text-sm text-gray-600">
              Click to choose a color
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleAdd}
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-[#A8BBA3] hover:bg-[#7D8F69] text-white font-medium rounded-xl shadow-md transition-colors duration-200 flex items-center justify-center mt-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add Class
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SheduleForm;
