import { useState, useContext } from "react";
import type { FormEvent } from "react";
import { AuthContext } from "../../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!",
      });
    }

    setIsLoading(true);
    try {
      const res = await axiosInstance.post("/auth/register", {
        name,
        email,
        password,
      });

      const userData = {
        id: res.data.user.id,
        name: res.data.user.name,
        email: res.data.user.email,
        token: res.data.token,
      };

      login(userData);

      await MySwal.fire({
        icon: "success",
        title: "Success!",
        text: "Your account has been created.",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (err: any) {
      MySwal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.response?.data?.message || "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-[#EAF1EA] to-[#FAF9EE] px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="relative w-full max-w-md p-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#A8BBA3]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#A8BBA3]/20 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Sign up to start using Student Life Toolkit
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6 relative z-10" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-[#A8BBA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BBA3] focus:border-[#A8BBA3] text-gray-900 placeholder-gray-400 transition"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-[#A8BBA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BBA3] focus:border-[#A8BBA3] text-gray-900 placeholder-gray-400 transition"
              />
            </div>

            <div className="relative">
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-[#A8BBA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BBA3] focus:border-[#A8BBA3] text-gray-900 placeholder-gray-400 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-9 right-3 text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="relative">
              <label className="block mb-1 font-medium text-gray-700 text-sm">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-[#A8BBA3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8BBA3] focus:border-[#A8BBA3] text-gray-900 placeholder-gray-400 transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-9 right-3 text-gray-500"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-5 flex justify-center items-center bg-[#A8BBA3] hover:bg-[#7D8F69] text-white font-medium text-sm px-4 py-3 rounded-lg shadow-md transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-[#A8BBA3] hover:text-[#7D8F69] transition-colors duration-200"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
