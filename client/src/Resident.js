import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Resident() {
  const email = localStorage.getItem("userEmail") || "resident";
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "resident") {
      navigate(role === "admin" ? "/admin" : "/login");
    }
    fetch("http://localhost:5000/alerts").then(r => r.json()).then(d => setAlerts(d));
    fetch("http://localhost:5000/reports").then(r => r.json()).then(d => setReports(d));
  }, [navigate]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5F0" }}>
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#2D5A4A] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-[#1A1A2E]">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-black text-[#1E3A5F] mb-4">RESIDENT PANEL</h1>
          <p className="text-xl text-gray-500">Welcome back, <span className="font-bold text-[#2D5A4A]">{email}</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link to="/emergency" className="bg-[#C9302C] rounded-2xl p-10 shadow-2xl text-white hover:bg-[#a02620] transition-all transform hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Emergency Alert</h3>
            <p className="text-pink-200 text-lg">Send emergency alert to neighbours</p>
          </Link>

          <Link to="/report" className="bg-[#2D5A4A] rounded-2xl p-10 shadow-2xl text-white hover:bg-[#234a3c] transition-all transform hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Submit Report</h3>
            <p className="text-green-200 text-lg">Report suspicious activity</p>
          </Link>

          <Link to="/dashboard" className="bg-white rounded-2xl p-10 shadow-2xl border-2 border-gray-100 hover:border-[#1E3A5F] transition-all transform hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <svg className="w-10 h-10 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">View Dashboard</h3>
            <p className="text-gray-500 text-lg">See community safety stats</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#C9302C] mb-8">Recent Alerts</h3>
            <div className="space-y-4">
              {alerts.length === 0 ? (
                <p className="text-gray-400 text-xl text-center py-8">No recent alerts</p>
              ) : (
                alerts.slice(0, 3).map((a, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <p className="text-[#1A1A2E] font-semibold text-lg">{a.message}</p>
                    <p className="text-gray-400 text-sm mt-2">{a.time ? new Date(a.time).toLocaleString() : ''}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#2D5A4A] mb-8">Recent Reports</h3>
            <div className="space-y-4">
              {reports.length === 0 ? (
                <p className="text-gray-400 text-xl text-center py-8">No reports submitted</p>
              ) : (
                reports.slice(0, 3).map((r, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <p className="font-bold text-[#1A1A2E] text-lg">{r.location}</p>
                    <p className="text-gray-600 text-base">{r.description}</p>
                    <p className="text-gray-400 text-sm mt-2">{r.time ? new Date(r.time).toLocaleString() : ''}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resident;