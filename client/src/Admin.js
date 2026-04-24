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
    <div className="min-h-screen" style={{ background: "#E6EEC9" }}>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#35858E] rounded-xl flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-[#35858E] mb-4">Admin Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back, <span className="font-medium text-[#35858E]">{email}</span></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#35858E] rounded-xl p-6 shadow-lg text-white">
            <p className="text-blue-100 text-sm font-medium">Total Alerts</p>
            <p className="text-4xl font-bold mt-2">{alerts.length}</p>
          </div>

          <div className="bg-[#7DA78C] rounded-xl p-6 shadow-lg text-white">
            <p className="text-green-100 text-sm font-medium">Total Reports</p>
            <p className="text-4xl font-bold mt-2">{reports.length}</p>
          </div>

          <div className="bg-[#C2D099] rounded-xl p-6 shadow-lg">
            <p className="text-gray-600 text-sm font-medium">Residents</p>
            <p className="text-4xl font-bold text-gray-700 mt-2">{residents.length}</p>
          </div>

          <div className="bg-[#C2D099] rounded-xl p-6 shadow-lg">
            <p className="text-gray-600 text-sm font-medium">Admins</p>
            <p className="text-4xl font-bold text-gray-700 mt-2">{admins.length}</p>
          </div>
        </div>

        <div className="bg-[#C2D099] rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("reports")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-all ${
                activeTab === "reports"
                  ? "bg-[#35858E] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Reports ({reports.length})
            </button>
            <button
              onClick={() => setActiveTab("alerts")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-all ${
                activeTab === "alerts"
                  ? "bg-[#35858E] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Alerts ({alerts.length})
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-all ${
                activeTab === "users"
                  ? "bg-[#35858E] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Users ({users.length})
            </button>
          </div>

          <div className="p-6">
            {activeTab === "reports" ? (
              <div className="space-y-4">
                {reports.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600">No reports yet</p>
                  </div>
                ) : (
                  reports.map((r, i) => (
                    <div key={i} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#7DA78C]">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="bg-[#7DA78C] text-white text-xs font-medium px-3 py-1 rounded-full mr-2">
                              Report #{i + 1}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {r.time ? new Date(r.time).toLocaleString() : ''}
                            </span>
                          </div>
                          <h4 className="text-gray-900 font-bold text-lg mb-2">{r.location}</h4>
                          <p className="text-gray-600">{r.description}</p>
                        </div>
                        <button
                          onClick={() => deleteReport(r._id)}
                          className="p-2 bg-[#35858E] text-white rounded-lg hover:bg-[#2d6e78] transition-colors ml-4"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="text-center py-12">
                    <p className="text-gray-600">No alerts yet</p>
                  </div>
                ) : (
                  alerts.map((a, i) => (
                    <div key={i} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#35858E]">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="bg-[#35858E] text-white text-xs font-medium px-3 py-1 rounded-full mr-2">
                              Alert #{i + 1}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {a.time ? new Date(a.time).toLocaleString() : ''}
                            </span>
                          </div>
                          <h4 className="text-gray-900 font-bold text-lg">{a.message}</h4>
                        </div>
                        <button
                          onClick={() => deleteAlert(a._id)}
                          className="p-2 bg-[#35858E] text-white rounded-lg hover:bg-[#2d6e78] transition-colors ml-4"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="text-center py-12">
                    <p className="text-gray-600">No users yet</p>
                  </div>
                ) : (
                  users.map((u, i) => (
                    <div key={i} className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#35858E]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#35858E] rounded-full flex items-center justify-center mr-4">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-bold">{u.email}</h4>
                            <p className="text-gray-500 text-sm">Joined: {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium mr-2 ${
                            u.role === "admin" 
                              ? "bg-[#35858E] text-white" 
                              : "bg-[#7DA78C] text-white"
                          }`}>
                            {u.role === "admin" ? "Admin" : "Resident"}
                          </span>
                          <button
                            onClick={() => deleteUser(u._id)}
                            className="p-2 bg-[#35858E] text-white rounded-lg hover:bg-[#2d6e78] transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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