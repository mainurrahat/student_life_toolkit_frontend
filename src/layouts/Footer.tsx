const Footer = () => {
  return (
    <footer className="bg-[#715A5A] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Branding */}
        <div>
          <h2 className="text-lg font-bold">🎓 Student Life Toolkit</h2>
          <p className="text-sm mt-2">
            A complete toolkit to make student life easier — track your classes,
            manage budget, prepare exams, and plan studies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="/schedule" className="hover:text-yellow-300">
                Class Schedule
              </a>
            </li>
            <li>
              <a href="/budget" className="hover:text-yellow-300">
                Budget Tracker
              </a>
            </li>
            <li>
              <a href="/exam" className="hover:text-yellow-300">
                Exam Q&A
              </a>
            </li>
            <li>
              <a href="/planner" className="hover:text-yellow-300">
                Study Planner
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Extra */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@studentlife.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="hover:text-yellow-300">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-300">
              Twitter
            </a>
            <a href="#" className="hover:text-yellow-300">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#37353E] text-center py-3 text-sm">
        © {new Date().getFullYear()} Student Life Toolkit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
