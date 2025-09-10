import { useState, useContext } from "react";
import type { FormEvent } from "react";
import { AuthContext } from "../../components/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axiosInstance.post("/auth/login", { email, password });

      const userData = {
        id: res.data.user.id,
        name: res.data.user.name,
        email: res.data.user.email,
        token: res.data.token,
      };

      login(userData);
      navigate("/");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-[#E8F0E8] to-[#FAF9EE] px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="relative w-full max-w-md p-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#A8BBA3]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#A8BBA3]/20 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Sign in to access your account
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6 relative z-10" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700 text-sm"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-[#A8BBA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BBA3] focus:border-[#A8BBA3] text-gray-900 placeholder-gray-400 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 font-medium text-gray-700 text-sm"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-[#A8BBA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BBA3] focus:border-[#A8BBA3] text-gray-900 placeholder-gray-400 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-5 flex justify-center items-center bg-[#A8BBA3] hover:bg-[#7D8F69] text-white font-medium text-sm px-4 py-3 rounded-lg shadow-md transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600 relative z-10">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#A8BBA3] font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
