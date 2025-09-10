import axiosInstance from "../../api/axios";
import Swal from "sweetalert2";

interface ExpenseItem {
  _id?: string;
  category: string;
  amount: number;
  date?: string;
  paymentMethod?: string;
  description?: string;
}

interface ExpenseListProps {
  expenses: ExpenseItem[];
  onDeleted: () => void;
}

const ExpenseList = ({ expenses, onDeleted }: ExpenseListProps) => {
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
      try {
        await axiosInstance.delete(`/expenses/${id}`);
        Swal.fire("Deleted!", "Your expense has been deleted.", "success");
        onDeleted();
      } catch (error) {
        Swal.fire(
          "Error",
          "Failed to delete expense. Please try again.",
          "error"
        );
      }
    }
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  if (expenses.length === 0)
    return (
      <div className="bg-[#FAF9EE]/80 shadow-lg mb-6 p-6 border border-[#DCCFC0] rounded-2xl text-[#3E4B3E] text-center">
        No expenses recorded yet. Add your first expense to get started!
      </div>
    );

  const totalExpense = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="bg-[#FAF9EE]/80 shadow-lg mb-6 p-6 border border-[#DCCFC0] rounded-2xl max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-[#3E4B3E] text-2xl">Expenses</h3>
        <div className="bg-[#A2AF9B]/20 px-4 py-1 rounded-full font-medium text-[#3E4B3E] shadow-sm">
          Total: {formatCurrency(totalExpense)}
        </div>
      </div>

      <ul className="space-y-4">
        {expenses.map((exp) => (
          <li
            key={exp._id}
            className="flex justify-between items-start hover:bg-[#A2AF9B]/10 p-4 border border-[#DCCFC0] rounded-xl transition-colors"
          >
            <div className="space-y-1">
              <p className="font-medium text-[#3E4B3E] text-lg">
                {exp.category}
              </p>
              <p className="font-semibold text-[#3E4B3E]">
                {formatCurrency(exp.amount)}
              </p>
              {exp.date && (
                <p className="text-[#3E4B3E]/80 text-sm">Date: {exp.date}</p>
              )}
              {exp.paymentMethod && (
                <p className="text-[#3E4B3E]/80 text-sm">
                  Method: {exp.paymentMethod}
                </p>
              )}
              {exp.description && (
                <p className="text-[#3E4B3E]/80 text-sm">{exp.description}</p>
              )}
            </div>

            <button
              onClick={() => handleDelete(exp._id)}
              className="bg-red-500 hover:bg-red-600 p-2 rounded-lg text-white shadow-md transition-colors"
              aria-label="Delete expense"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-[#3E4B3E]/80 text-sm">
        Showing {expenses.length} expense{expenses.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
};

export default ExpenseList;
