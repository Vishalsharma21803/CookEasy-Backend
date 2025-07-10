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
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
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
      const res = await API.post("/auth/login", formData);
      login(res.data);
      setLoading(false);
      navigate("/home");
    } catch (err) {
      setError("Invalid credentials or server error");
      setLoading(false);
    }
  }

  const features = [
    {
      title: "100+ Recipes",
      description: "Discover endless culinary possibilities",
    },
    {
      title: "Smart Search",
      description: "Find recipes by ingredients, time, or diet",
    },
    {
      title: "Community Driven",
      description: "Connect with passionate home cooks",
    },
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
              <span className="text-gray-600">New to CookEasy?</span>
              <Link
                to="/register"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        {/* Left Side - Image & Features */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 flex flex-col justify-center p-12 text-white">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-green-100 text-lg leading-relaxed">
                Continue your culinary journey with thousands of amazing recipes
                and a supportive community.
              </p>
            </div>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaStar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-50">
                      {feature.title}
                    </h3>
                    <p className="text-green-200 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dm9tjorz5/image/upload/v1751995612/Image-8_Paneer-Korma_aglbz4.png"
                alt="Cooking community"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-white font-medium">
                  "The best recipe platform I've ever used!"
                </p>
                <p className="text-green-200 text-sm">- Amit, Food Blogger</p>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUser className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">Sign in to your CookEasy account</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl border-0">
              <div className="py-6 px-6">
                <div className="space-y-2 mb-4">
                  <h2 className="text-xl font-semibold text-center">Sign In</h2>
                  <p className="text-sm text-gray-600 text-center">
                    Continue your culinary adventure
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
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700">
                        Password
                      </label>
                      {/* <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-700">
                        Forgot password?
                      </Link> */}
                    </div>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
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
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      <>
                        Sign In
                        <FaArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Create one here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
