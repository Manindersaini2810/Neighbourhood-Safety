import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const email = localStorage.getItem("userEmail") || "admin";
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState([]);
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("reports");

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "admin") {
      navigate(role === "resident" ? "/resident" : "/login");
    }
    fetchAlerts();
    fetchReports();
    fetchUsers();
  }, [navigate]);

  const fetchAlerts = () => {
    fetch("http://localhost:5000/alerts")
      .then(r => r.json())
      .then(d => setAlerts(d));
  };

  const fetchReports = () => {
    fetch("http://localhost:5000/reports")
      .then(r => r.json())
      .then(d => setReports(d));
  };

  const fetchUsers = () => {
    fetch("http://localhost:5000/auth")
      .then(r => r.json())
      .then(d => setUsers(d));
  };

  const deleteAlert = (id) => {
    fetch(`http://localhost:5000/alerts/${id}`, { method: "DELETE" })
      .then(() => fetchAlerts());
  };

  const deleteReport = (id) => {
    fetch(`http://localhost:5000/reports/${id}`, { method: "DELETE" })
      .then(() => fetchReports());
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`http://localhost:5000/auth/${id}`, { method: "DELETE" })
        .then(() => fetchUsers());
    }
  };

  const residents = users.filter(u => u.role === "resident");
  const admins = users.filter(u => u.role === "admin");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5F0" }}>
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#1E3A5F] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-[#1A1A2E]">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-black text-[#1E3A5F] mb-4">ADMIN DASHBOARD</h1>
          <p className="text-xl text-gray-500">Welcome back, <span className="font-bold text-[#1E3A5F]">{email}</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#C9302C] rounded-2xl p-8 shadow-2xl text-white">
            <p className="text-pink-200 text-sm font-bold uppercase tracking-wide">Total Alerts</p>
            <p className="text-5xl font-black mt-2">{alerts.length}</p>
          </div>

          <div className="bg-[#2D5A4A] rounded-2xl p-8 shadow-2xl text-white">
            <p className="text-green-200 text-sm font-bold uppercase tracking-wide">Total Reports</p>
            <p className="text-5xl font-black mt-2">{reports.length}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Residents</p>
            <p className="text-5xl font-black text-[#1E3A5F] mt-2">{residents.length}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100">
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Admins</p>
            <p className="text-5xl font-black text-[#1E3A5F] mt-2">{admins.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-3 border-b-2 border-gray-100">
            <button
              onClick={() => setActiveTab("reports")}
              className={`py-6 px-6 text-center font-bold text-lg transition-all ${
                activeTab === "reports"
                  ? "bg-[#1E3A5F] text-white"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              Reports ({reports.length})
            </button>
            <button
              onClick={() => setActiveTab("alerts")}
              className={`py-6 px-6 text-center font-bold text-lg transition-all ${
                activeTab === "alerts"
                  ? "bg-[#C9302C] text-white"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              Alerts ({alerts.length})
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`py-6 px-6 text-center font-bold text-lg transition-all ${
                activeTab === "users"
                  ? "bg-[#2D5A4A] text-white"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              Users ({users.length})
            </button>
          </div>

          <div className="p-8">
            {activeTab === "reports" ? (
              <div className="space-y-4">
                {reports.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-gray-400 text-xl">No reports yet</p>
                  </div>
                ) : (
                  reports.map((r, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6 border-l-8 border-[#2D5A4A]">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center mb-3">
                            <span className="bg-[#2D5A4A] text-white text-xs font-bold px-4 py-2 rounded-lg mr-3">
                              Report #{i + 1}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {r.time ? new Date(r.time).toLocaleString() : ''}
                            </span>
                          </div>
                          <h4 className="text-[#1A1A2E] font-bold text-xl mb-2">{r.location}</h4>
                          <p className="text-gray-600 text-lg">{r.description}</p>
                        </div>
                        <button
                          onClick={() => deleteReport(r._id)}
                          className="p-4 bg-[#C9302C] text-white rounded-xl hover:bg-[#a02620] transition-all ml-4"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : activeTab === "alerts" ? (
              <div className="space-y-4">
                {alerts.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-gray-400 text-xl">No alerts yet</p>
                  </div>
                ) : (
                  alerts.map((a, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6 border-l-8 border-[#C9302C]">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center mb-3">
                            <span className="bg-[#C9302C] text-white text-xs font-bold px-4 py-2 rounded-lg mr-3">
                              Alert #{i + 1}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {a.time ? new Date(a.time).toLocaleString() : ''}
                            </span>
                          </div>
                          <h4 className="text-[#1A1A2E] font-bold text-xl">{a.message}</h4>
                        </div>
                        <button
                          onClick={() => deleteAlert(a._id)}
                          className="p-4 bg-[#C9302C] text-white rounded-xl hover:bg-[#a02620] transition-all ml-4"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {users.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-gray-400 text-xl">No users yet</p>
                  </div>
                ) : (
                  users.map((u, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-6 border-l-8 border-[#1E3A5F]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mr-5">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-[#1A1A2E] font-bold text-lg">{u.email}</h4>
                            <p className="text-gray-400 text-sm">Joined: {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className={`px-4 py-2 rounded-lg text-xs font-bold mr-3 ${
                            u.role === "admin" 
                              ? "bg-[#1E3A5F] text-white" 
                              : "bg-[#2D5A4A] text-white"
                          }`}>
                            {u.role === "admin" ? "Admin" : "Resident"}
                          </span>
                          <button
                            onClick={() => deleteUser(u._id)}
                            className="p-3 bg-[#C9302C] text-white rounded-xl hover:bg-[#a02620] transition-all"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;