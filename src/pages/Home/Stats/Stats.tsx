import { useEffect, useState } from "react";

const statsData = [
  { label: "Users", value: 10000, suffix: "+" },
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Support", value: 24, suffix: "/7" },
  { label: "Partners", value: 15, suffix: "+" },
];

const Stats = () => {
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    statsData.forEach((stat, idx) => {
      const increment = Math.ceil(stat.value / 100);
      intervals[idx] = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[idx] < stat.value) {
            newCounts[idx] += increment;
            if (newCounts[idx] > stat.value) newCounts[idx] = stat.value;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Achievements
        </h2>
        <p className="text-gray-600 mb-12">
          Proudly serving our users with excellence and dedication.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                {counts[idx]}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
