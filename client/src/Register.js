import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("resident");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      setMessage("Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#F5F5F0" }}>
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#1E3A5F] rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="text-4xl font-black text-[#1E3A5F]">CREATE ACCOUNT</h1>
            <p className="text-gray-500 mt-2 text-lg">Join our community</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block text-sm font-bold text-[#1E3A5F] mb-3 uppercase tracking-wide">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#1E3A5F] focus:outline-none transition-all text-lg"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[#1E3A5F] mb-3 uppercase tracking-wide">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#1E3A5F] focus:outline-none transition-all text-lg"
                placeholder="Create a password"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-[#1E3A5F] mb-3 uppercase tracking-wide">Register as</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole("resident")}
                  className={`py-4 px-5 rounded-xl font-bold text-lg transition-all ${
                    role === "resident" 
                      ? "bg-[#2D5A4A] text-white shadow-lg" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-gray-200"
                  }`}
                >
                  Resident
                </button>
                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`py-4 px-5 rounded-xl font-bold text-lg transition-all ${
                    role === "admin" 
                      ? "bg-[#1E3A5F] text-white shadow-lg" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-gray-200"
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-5 bg-[#1E3A5F] text-white font-bold text-xl rounded-xl shadow-lg hover:bg-[#2a4a73] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>
          
          {message && (
            <div className="mt-6 p-4 bg-[#2D5A4A] text-white rounded-xl text-center font-semibold">
              {message}
            </div>
          )}
          {error && (
            <div className="mt-6 p-4 bg-[#C9302C] text-white rounded-xl text-center font-semibold">
              {error}
            </div>
          )}
          
          <p className="mt-8 text-center text-gray-500 text-lg">
            Already have an account?{" "}
            <Link to="/login" className="text-[#1E3A5F] font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;