import { CalendarDays, DollarSign, FileQuestion, Target } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    name: "Class Schedule",
    description: "📅 Track and never miss a class with easy scheduling.",
    icon: CalendarDays,
    path: "/schedule",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Budget Tracker",
    description: "💰 Manage income & expenses smartly and save money.",
    icon: DollarSign,
    path: "/budget",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Exam Q&A",
    description: "📝 Practice questions anytime with smart question generator.",
    icon: FileQuestion,
    path: "/exam",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Study Planner",
    description: "🎯 Break study goals into smaller, manageable tasks.",
    icon: Target,
    path: "/planner",
    color: "from-purple-500 to-pink-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          🔧 Explore Our Tools
        </h2>
        <p className="mt-3 text-gray-600">
          Everything you need to organize your student life in one place.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${feature.color} text-white text-3xl`}
              >
                <feature.icon size={32} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mt-4">{feature.name}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {feature.description}
              </p>

              {/* Explore Button */}
              <Link
                to={feature.path}
                className="inline-block mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-715A5A hover:to-37353E transition"
              >
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
