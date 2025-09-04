import { CheckCircle, Clock, BarChart3, Smartphone } from "lucide-react";

const benefits = [
  {
    title: "Stay Organized",
    description: "Keep all your classes, exams, and study plans in one place.",
    icon: CheckCircle,
  },
  {
    title: "Save Time",
    description: "Smart tools help you manage your day without wasting hours.",
    icon: Clock,
  },
  {
    title: "Better Productivity",
    description: "Focus on what matters with clear schedules & goals.",
    icon: BarChart3,
  },
  {
    title: "All-in-One Toolkit",
    description: "No need for multiple apps — everything is here for you.",
    icon: Smartphone,
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#37353E] mb-4">
          Why Choose{" "}
          <span className="text-[#715A5A]">Student Life Toolkit?</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Discover how our toolkit makes your student life easier, smarter, and
          more productive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <benefit.icon className="h-12 w-12 text-[#715A5A] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#37353E] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
