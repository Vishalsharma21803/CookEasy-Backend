import React, { useState, useContext } from "react";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/auth/register", formData);
      login(res.data);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  const benefits = [
    "Access to 100+ recipes",
    "Create and share your own recipes",
    "Save favorites with one click",
    "Connect with food lovers",
    "Get personalized recommendations",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-2xl font-extrabold text-green-600 tracking-tight"
            >
              CookEasy<span className="text-orange-500">🍴</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Already have an account?</span>
              <Link
                to="/login"
                className="px-4 py-2 border border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUser className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Join CookEasy
              </h1>
              <p className="text-gray-600">Start your culinary journey today</p>
            </div>

            <div className="bg-white shadow-xl rounded-xl border-0">
              <div className="py-6 px-6">
                <div className="space-y-2 mb-4">
                  <h2 className="text-xl font-semibold text-center">
                    Create Your Account
                  </h2>
                  <p className="text-sm text-gray-600 text-center">
                    Join hundreds of home cooks and food enthusiasts
                  </p>
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded px-4 py-2 mb-4 text-center text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        name="username"
                        placeholder="Choose a username"
                        value={formData.username}
                        onChange={handleChange}
                        className="pl-10 h-12 w-full border border-gray-200 rounded focus:border-green-500 focus:ring-green-500 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 h-12 w-full border border-gray-200 rounded focus:border-green-500 focus:ring-green-500 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 pr-10 h-12 w-full border border-gray-200 rounded focus:border-green-500 focus:ring-green-500 outline-none"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="h-4 w-4" />
                        ) : (
                          <FaEye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Password must be at least 8 characters long
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <FaArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>

                <div className="text-xs text-gray-500 text-center mt-2">
                  By creating an account, you agree to our{" "}
                  <Link to="/terms" className="text-green-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-green-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Benefits & Image */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 flex flex-col justify-center p-12 text-white">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Welcome to CookEasy</h2>
              <p className="text-green-100 text-lg leading-relaxed">
                Join our community of passionate home cooks and discover a world
                of delicious possibilities.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-green-50">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dm9tjorz5/image/upload/v1751995557/Image-4_Paneer-Bhurji_yrqpsb.png"
                alt="Delicious cooking"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium">
                  "CookEasy transformed my cooking experience!"
                </p>
                <p className="text-green-200 text-sm">- Sarah, Home Cook</p>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        </div>
      </div>
    </div>
  );
}

export default Register;
