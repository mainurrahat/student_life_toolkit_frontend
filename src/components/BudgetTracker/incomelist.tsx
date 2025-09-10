import axiosInstance from "../../api/axios";
import { useState } from "react";
import Swal from "sweetalert2";

interface IncomeItem {
  _id?: string;
  source: string;
  amount: number;
  date?: string;
  frequency?: string;
}

interface IncomeListProps {
  incomes: IncomeItem[];
  onDeleted: () => void;
}

const IncomeList = ({ incomes, onDeleted }: IncomeListProps) => {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id?: string) => {
    if (!id) return;
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });
    if (result.isConfirmed) {
      setDeletingId(id);
      try {
        await axiosInstance.delete(`/income/${id}`);
        Swal.fire(
          "Deleted!",
          "Your income source has been deleted.",
          "success"
        );
        onDeleted();
      } catch (error) {
        Swal.fire(
          "Error",
          "Failed to delete income. Please try again.",
          "error"
        );
      } finally {
        setDeletingId(null);
      }
    }
  };

  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(dateString));
  };

  const getFrequencyBadge = (frequency?: string) => {
    if (!frequency || frequency === "one-time") return null;
    const labels: Record<string, string> = {
      weekly: "Weekly",
      "bi-weekly": "Bi-weekly",
      monthly: "Monthly",
      quarterly: "Quarterly",
      annual: "Annual",
    };
    return (
      <span className="bg-[#A2AF9B]/20 px-2 py-1 rounded-full font-medium text-[#3E4B3E] text-xs">
        {labels[frequency] || frequency}
      </span>
    );
  };

  if (incomes.length === 0)
    return (
      <div className="bg-[#FAF9EE] shadow-lg p-6 border border-[#DCCFC0] rounded-2xl text-[#3E4B3E] text-center">
        No income recorded yet. Add your first income source to get started!
      </div>
    );

  const totalIncome = incomes.reduce((sum, inc) => sum + inc.amount, 0);

  return (
    <div className="bg-[#FAF9EE] shadow-lg p-6 border border-[#DCCFC0] rounded-2xl text-[#3E4B3E] max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-2xl text-[#3E4B3E]">
          Income Sources
        </h3>
        <div className="bg-[#A2AF9B]/30 px-4 py-1 rounded-full font-semibold text-[#3E4B3E]">
          Total: {formatCurrency(totalIncome)}
        </div>
      </div>

      {/* Income Items */}
      <div className="space-y-4">
        {incomes.map((inc) => (
          <div
            key={inc._id}
            className="flex justify-between items-center p-4 rounded-xl shadow-sm hover:shadow-md transition-all bg-white/80 border border-[#DCCFC0]"
          >
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-semibold text-[#3E4B3E]">
                  {inc.source}
                </span>
                {getFrequencyBadge(inc.frequency)}
              </div>
              <p className="font-bold text-[#3E4B3E] text-lg">
                {formatCurrency(inc.amount)}
              </p>
              {inc.date && (
                <p className="text-[#3E4B3E]/70 text-sm">
                  Received: {formatDate(inc.date)}
                </p>
              )}
            </div>

            <button
              onClick={() => handleDelete(inc._id)}
              disabled={deletingId === inc._id}
              className={`p-2 rounded-lg transition-colors ${
                deletingId === inc._id
                  ? "bg-[#A2AF9B]/10 text-[#3E4B3E]/50 cursor-not-allowed"
                  : "bg-red-500/20 text-[#3E4B3E] hover:bg-red-500/30"
              }`}
              aria-label="Delete income"
            >
              {deletingId === inc._id ? "..." : "❌"}
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-[#3E4B3E]/70 text-sm text-center">
        Showing {incomes.length} income source{incomes.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
};

export default IncomeList;
