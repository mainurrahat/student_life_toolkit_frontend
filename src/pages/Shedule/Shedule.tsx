import { useState, useEffect } from "react";
import axiosInstance from "../../api/axios";

import SheduleForm from "../../components/Shedule/SheduleFrom";
import SheduleList from "../../components/Shedule/SheduleList";

interface ClassItem {
  _id?: string;
  subject: string;
  instructor: string;
  day: string;
  startTime: string;
  endTime: string;
  color: string;
}

const Shedule = () => {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch classes from backend
  const fetchClasses = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/classes");
      setClasses(res.data || []);
    } catch (error) {
      console.error("Failed to fetch classes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6F2] px-4 sm:px-6 lg:px-12 py-8">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#5A6D57] drop-shadow-sm">
          📅 Class Schedule Manager
        </h1>
        <p className="text-gray-600 mt-2">
          Add, manage and view your weekly classes in one place
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Form */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#5A6D57]/20">
            <h2 className="text-xl font-semibold text-[#5A6D57] mb-4">
              ➕ Add / Edit Class
            </h2>
            <SheduleForm onAdded={fetchClasses} />
          </div>
        </div>

        {/* Right Section - Class List */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-[#5A6D57]/20">
            <h2 className="text-xl font-semibold text-[#5A6D57] mb-4">
              📖 Weekly Schedule
            </h2>
            {loading ? (
              <p className="text-gray-500">Loading classes...</p>
            ) : (
              <SheduleList classes={classes} onDeleted={fetchClasses} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shedule;
