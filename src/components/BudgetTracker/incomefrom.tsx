import { useState } from "react";
import axiosInstance from "../../api/axios";

interface IncomeFormProps {
  onAdded: () => void;
}

const IncomeForm = ({ onAdded }: IncomeFormProps) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [date, setDate] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async () => {
    if (!source || !amount) return alert("Please fill in all required fields!");
    setIsLoading(true);
    try {
      await axiosInstance.post("/income", {
        source,
        amount: Number(amount),
        date: date || new Date().toISOString().split("T")[0],
        frequency,
      });
      setSource("");
      setAmount("");
      setDate("");
      setFrequency("one-time");
      onAdded();
    } catch (error) {
      console.error("Error adding income:", error);
      alert("Failed to add income. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const incomeSources = [
    "Salary",
    "Freelance",
    "Investment",
    "Business",
    "Rental",
    "Bonus",
    "Gift",
    "Dividends",
    "Pension",
    "Other",
  ];

  const frequencyOptions = [
    { value: "one-time", label: "One-time" },
    { value: "weekly", label: "Weekly" },
    { value: "bi-weekly", label: "Bi-weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "annual", label: "Annual" },
  ];

  return (
    <div className="bg-[#FAF9EE] shadow-lg p-6 border border-[#DCCFC0] rounded-2xl max-w-2xl mx-auto">
      <h3 className="flex items-center mb-6 font-semibold text-[#3E4B3E] text-2xl">
        <span className="bg-[#A2AF9B] mr-4 p-3 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        Add New Income
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Income Source */}
        <div>
          <label className="block mb-2 font-medium text-[#3E4B3E] text-sm">
            Income Source <span className="text-red-500">*</span>
          </label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="p-3 border border-[#3E4B3E] rounded-xl focus:ring-2 focus:ring-[#A2AF9B] focus:border-[#3E4B3E] w-full text-[#3E4B3E] transition-colors"
          >
            <option value="">Select income source</option>
            {incomeSources.map((src) => (
              <option key={src} value={src}>
                {src}
              </option>
            ))}
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block mb-2 font-medium text-[#3E4B3E] text-sm">
            Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="p-3 border border-[#3E4B3E] rounded-xl focus:ring-2 focus:ring-[#A2AF9B] focus:border-[#3E4B3E] w-full text-[#3E4B3E] transition-colors"
            min="0"
            step="0.01"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-2 font-medium text-[#3E4B3E] text-sm">
            Date Received
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 border border-[#3E4B3E] rounded-xl focus:ring-2 focus:ring-[#A2AF9B] focus:border-[#3E4B3E] w-full text-[#3E4B3E] transition-colors"
          />
        </div>

        {/* Frequency */}
        <div>
          <label className="block mb-2 font-medium text-[#3E4B3E] text-sm">
            Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="p-3 border border-[#3E4B3E] rounded-xl focus:ring-2 focus:ring-[#A2AF9B] focus:border-[#3E4B3E] w-full text-[#3E4B3E] transition-colors"
          >
            {frequencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleAdd}
        disabled={isLoading || !source || !amount}
        className={`mt-6 w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center transition-all ${
          isLoading || !source || !amount
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#3E4B3E] text-[#FAF9EE] hover:opacity-90 shadow-lg"
        }`}
      >
        {isLoading ? "Adding..." : "Add Income"}
      </button>
    </div>
  );
};

export default IncomeForm;
