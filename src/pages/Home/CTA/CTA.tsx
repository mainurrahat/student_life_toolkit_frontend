import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#715A5A] to-[#37353E] text-white text-center rounded-lg">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to make your student life easier?
      </h2>
      <p className="text-lg mb-8">
        Start organizing, tracking, and studying smarter today with our
        all-in-one toolkit.
      </p>
      <Link
        to="/schedule"
        className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
      >
        Get Started Free
      </Link>
    </section>
  );
};

export default CTA;
