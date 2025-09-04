// src/components/Pricing/Pricing.tsx
import { Check, X } from "lucide-react";

const features = [
  { name: "Access to basic features", free: true, pro: true },
  { name: "Priority support", free: false, pro: true },
  { name: "Customizable themes", free: false, pro: true },
  { name: "Unlimited usage", free: false, pro: true },
  { name: "Community access", free: true, pro: true },
];

const Pricing = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pricing Plans
          </h2>
          <p className="mt-2 text-gray-600">
            Choose the plan that fits your needs best.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-900">
                <th className="text-left p-4 md:p-5">Features</th>
                <th className="p-4 md:p-5 text-center">Free</th>
                <th className="p-4 md:p-5 text-center">Premium</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 md:p-5 font-medium text-gray-700">
                    {row.name}
                  </td>
                  <td className="p-4 md:p-5 text-center">
                    {row.free ? (
                      <Check className="h-5 w-5 text-green-600 inline-block" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 inline-block" />
                    )}
                  </td>
                  <td className="p-4 md:p-5 text-center">
                    {row.pro ? (
                      <Check className="h-5 w-5 text-green-600 inline-block" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 inline-block" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="px-6 py-3 rounded-xl bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 transition">
            Get Started Free
          </button>
          <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
