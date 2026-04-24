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
    <div className="min-h-screen" style={{ background: "#E6EEC9" }}>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#35858E] rounded-xl flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-[#35858E] mb-4">Resident Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back, <span className="font-medium text-[#35858E]">{email}</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/emergency" className="bg-[#35858E] rounded-xl p-8 shadow-lg text-white hover:bg-[#2d6e78] transition-colors">
            <h3 className="text-xl font-bold mb-2">Emergency Alert</h3>
            <p className="text-blue-100">Send emergency alert</p>
          </Link>

          <Link to="/report" className="bg-[#7DA78C] rounded-xl p-8 shadow-lg text-white hover:bg-[#6d977c] transition-colors">
            <h3 className="text-xl font-bold mb-2">Submit Report</h3>
            <p className="text-green-100">Report suspicious activity</p>
          </Link>

          <Link to="/dashboard" className="bg-[#C2D099] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-700 mb-2">View Dashboard</h3>
            <p className="text-gray-600">See community stats</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#C2D099] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#35858E] mb-6">Recent Alerts</h3>
            <div className="space-y-4">
              {alerts.length === 0 ? (
                <p className="text-gray-600">No recent alerts</p>
              ) : (
                alerts.slice(0, 3).map((a, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg">
                    <p className="text-gray-800">{a.message}</p>
                    <p className="text-gray-500 text-sm mt-1">{a.time ? new Date(a.time).toLocaleString() : ''}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-[#C2D099] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#35858E] mb-6">Recent Reports</h3>
            <div className="space-y-4">
              {reports.length === 0 ? (
                <p className="text-gray-600">No reports submitted</p>
              ) : (
                reports.slice(0, 3).map((r, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg">
                    <p className="font-medium text-gray-800">{r.location}</p>
                    <p className="text-gray-600 text-sm">{r.description}</p>
                    <p className="text-gray-500 text-sm mt-1">{r.time ? new Date(r.time).toLocaleString() : ''}</p>
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