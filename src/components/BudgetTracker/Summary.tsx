import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface SummaryProps {
  incomes?: { amount: number }[];
  expenses?: { amount: number }[];
}

const Summary = ({ incomes = [], expenses = [] }: SummaryProps) => {
  const totalIncome = incomes.reduce((sum, inc) => sum + inc.amount, 0);
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const balance = totalIncome - totalExpenses;

  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

  const data = [
    {
      name: "Finance",
      Income: totalIncome,
      Expenses: totalExpenses,
      Balance: balance,
    },
  ];

  return (
    <div className="bg-[#FAF9EE]/90 shadow-lg p-6 rounded-2xl text-[#2F3E2F] max-w-4xl mx-auto">
      <h2 className="mb-6 font-bold text-2xl flex items-center gap-2">
        💰 Financial Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
        <div className="bg-[#DCCFC0]/80 p-4 rounded-xl shadow-sm transition-transform hover:scale-105">
          <p className="font-medium text-sm">Total Income</p>
          <p className="font-semibold text-lg mt-1">
            {formatCurrency(totalIncome)}
          </p>
        </div>

        <div className="bg-[#DCCFC0]/80 p-4 rounded-xl shadow-sm transition-transform hover:scale-105">
          <p className="font-medium text-sm">Total Expenses</p>
          <p className="font-semibold text-lg mt-1">
            {formatCurrency(totalExpenses)}
          </p>
        </div>

        <div
          className={`p-4 rounded-xl shadow-sm transition-transform hover:scale-105 ${
            balance >= 0 ? "bg-[#DCCFC0]/80" : "bg-red-200/80"
          }`}
        >
          <p className="font-medium text-sm">Balance</p>
          <p className="font-semibold text-lg mt-1">
            {formatCurrency(balance)}
          </p>
        </div>
      </div>

      <div className="w-full h-64 bg-white/80 p-4 rounded-xl shadow-inner">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
            <Legend />
            <Bar
              dataKey="Income"
              fill="#3E4B3E"
              barSize={40}
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="Expenses"
              fill="#D9534F"
              barSize={40}
              radius={[6, 6, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="Balance"
              stroke="#FFA500"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Summary;
