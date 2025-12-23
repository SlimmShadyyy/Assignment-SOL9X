import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("SIGNUP DATA:", formData);
  
    try {
      const res = await api.post("/api/auth/signup", formData);
      console.log("SIGNUP RES:", res.data);
      alert("Signup successful. Please login.");
      navigate("/login");
    } catch (err) {
      console.log("SIGNUP ERROR:", err.response);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <input
          className="w-full p-2 mb-4 border rounded"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />

        <input
          className="w-full p-2 mb-4 border rounded"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />

        <input
          className="w-full p-2 mb-4 border rounded"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
