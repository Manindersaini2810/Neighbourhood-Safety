import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import Resident from "./Resident";

const colors = {
  primary: "#35858E",
  secondary: "#7DA78C",
  accent: "#C2D099",
  light: "#E6EEC9"
}

function Home(){
  return (
    <div style={{ background: colors.light, minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-[#35858E] rounded-full flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-[#35858E] mb-4">
            Neighbourhood Safety & Support System
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Helping neighbours stay safe and connected
          </p>

          <a href="/emergency" className="inline-flex items-center px-8 py-4 bg-[#35858E] text-white font-bold rounded-lg shadow-lg hover:bg-[#2d6e78] transition-colors">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Emergency Alert
          </a>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#C2D099] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#35858E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Alert</h3>
              <p className="text-gray-700">Instantly notify neighbours during emergencies</p>
            </div>

            <div className="bg-[#C2D099] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#7DA78C] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Report Activity</h3>
              <p className="text-gray-700">Report suspicious activity </p>
            </div>

            <div className="bg-[#C2D099] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#35858E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Neighbour Support</h3>
              <p className="text-gray-700">Connect with neighbours</p>
            </div>

            <div className="bg-[#C2D099] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#35858E] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Live Dashboard</h3>
              <p className="text-gray-700">Real-time safety </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Emergency(){

  const [alerts,setAlerts] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/alerts")
    .then(res => res.json())
    .then(data => setAlerts(data));
  },[]);

  const sendAlert = () =>{
    fetch("http://localhost:5000/alerts",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message:"Emergency triggered"
      })
    })
    .then(()=>{
      fetch("http://localhost:5000/alerts")
      .then(res=>res.json())
      .then(data=>setAlerts(data));
    });
  }

  return (
    <div className="min-h-screen" style={{ background: "#E6EEC9" }}>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-[#35858E] rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-[#35858E] mb-4">Emergency Alert</h1>
          <p className="text-lg text-gray-600 mb-8">Send an immediate alert to all neighbours.</p>

          <button
            onClick={sendAlert}
            className="inline-flex items-center px-12 py-6 bg-[#35858E] text-white text-xl font-bold rounded-lg shadow-xl hover:bg-[#2d6e78] transition-colors"
          >
            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.352 2.352 0 0118 15.618V12a6 6 0 10-12 0v3.618c0 .419.113.816.301 1.155L6 17h5m4 0v-2m0 4h.01" />
            </svg>
            SEND EMERGENCY ALERT
          </button>

          <h2 className="text-2xl font-bold text-[#35858E] mt-16 mb-6">Recent Alerts</h2>
          
          <div className="space-y-4">
            {alerts.length === 0 ? (
              <div className="bg-[#C2D099] rounded-lg p-8 shadow-md">
                <p className="text-gray-600">No recent alerts. Stay safe!</p>
              </div>
            ) : (
              alerts.map((a,index)=>(
                <div key={index} className="bg-[#C2D099] rounded-lg p-6 shadow-md border-l-4 border-[#35858E]">
                  <p className="text-gray-800 font-medium">{a.message}</p>
                  <p className="text-gray-500 text-sm mt-1">{a.time ? new Date(a.time).toLocaleString() : 'Just now'}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Report(){

  const [location,setLocation] = useState("");
  const [desc,setDesc] = useState("");
  const [reports,setReports] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/reports")
    .then(res=>res.json())
    .then(data=>setReports(data));
  },[]);

  const submitReport = () =>{
    if (!location || !desc) return;
    fetch("http://localhost:5000/reports",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        location,
        description:desc
      })
    })
    .then(()=>{
      fetch("http://localhost:5000/reports")
      .then(res=>res.json())
      .then(data=>setReports(data));
    });

    setLocation("");
    setDesc("");
  }

  return (
    <div className="min-h-screen" style={{ background: "#E6EEC9" }}>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#7DA78C] rounded-xl flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-[#35858E] mb-4">Report Suspicious Activity</h1>
          <p className="text-lg text-gray-600">Help keep your neighbourhood safe.</p>
        </div>

        <div className="bg-[#C2D099] rounded-lg shadow-xl p-8 mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                placeholder="Enter location"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7DA78C] focus:border-[#7DA78C] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Describe Activity</label>
              <textarea
                placeholder="Describe what you observed..."
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7DA78C] focus:border-[#7DA78C] outline-none transition-all resize-none"
              />
            </div>

            <button
              onClick={submitReport}
              className="w-full py-4 bg-[#7DA78C] text-white font-bold rounded-lg shadow-md hover:bg-[#6d977c] transition-colors"
            >
              Submit Report
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#35858E] mb-6">Recent Reports</h2>
        
        <div className="space-y-4">
          {reports.length === 0 ? (
            <div className="bg-[#C2D099] rounded-lg p-8 shadow-md">
              <p className="text-gray-600">No reports submitted yet.</p>
            </div>
          ) : (
            reports.map((r,index)=>(
              <div key={index} className="bg-[#C2D099] rounded-lg p-6 shadow-md border-l-4 border-[#7DA78C]">
                <p className="font-bold text-gray-900 text-lg">{r.location}</p>
                <p className="text-gray-700 mt-1">{r.description}</p>
                <p className="text-gray-500 text-sm mt-2">{r.time ? new Date(r.time).toLocaleString() : ''}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function Dashboard(){
  const [alertCount, setAlertCount] = useState(0);
  const [reportCount, setReportCount] = useState(0);
  const [stats, setStats] = useState({ activeMembers: 0, safetyScore: 0 });

  useEffect(() => {
    fetch("http://localhost:5000/alerts").then(r => r.json()).then(d => setAlertCount(d.length));
    fetch("http://localhost:5000/reports").then(r => r.json()).then(d => setReportCount(d.length));
    fetch("http://localhost:5000/stats/dashboard").then(r => r.json()).then(d => setStats(d));
  }, []);

  return(
    <div className="min-h-screen" style={{ background: colors.light }}>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#35858E] rounded-xl flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-[#35858E] mb-4">Dashboard</h1>
          <p className="text-lg text-gray-600">Neighbourhood safety overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#35858E] rounded-xl p-6 shadow-lg text-white">
            <p className="text-blue-100 text-sm font-medium">Emergency Alerts</p>
            <p className="text-4xl font-bold mt-2">{alertCount}</p>
            <p className="text-blue-200 text-sm mt-1">Active</p>
          </div>

          <div className="bg-[#7DA78C] rounded-xl p-6 shadow-lg text-white">
            <p className="text-green-100 text-sm font-medium">Reports</p>
            <p className="text-4xl font-bold mt-2">{reportCount}</p>
            <p className="text-green-200 text-sm mt-1">Submitted</p>
          </div>

          <div className="bg-[#C2D099] rounded-xl p-6 shadow-lg">
            <p className="text-gray-600 text-sm font-medium">Active Members</p>
            <p className="text-4xl font-bold text-gray-700 mt-2">{stats.activeMembers}</p>
            <p className="text-gray-500 text-sm mt-1">Residents</p>
          </div>

          <div className="bg-[#C2D099] rounded-xl p-6 shadow-lg">
            <p className="text-gray-600 text-sm font-medium">Safety Score</p>
            <p className="text-4xl font-bold text-gray-700 mt-2">{stats.safetyScore}%</p>
            <p className="text-gray-500 text-sm mt-1">{stats.safetyScore >= 80 ? "Excellent" : stats.safetyScore >= 60 ? "Good" : "Needs Improvement"}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#C2D099] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#35858E] mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="/emergency" className="flex flex-col items-center p-6 bg-[#35858E] rounded-lg text-white hover:bg-[#2d6e78] transition-colors shadow-md">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="font-medium">Emergency</span>
              </a>
              <a href="/report" className="flex flex-col items-center p-6 bg-[#7DA78C] rounded-lg text-white hover:bg-[#6d977c] transition-colors shadow-md">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium">Report</span>
              </a>
            </div>
          </div>

          <div className="bg-[#C2D099] rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#35858E] mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-lg">
                <div className="w-10 h-10 bg-[#35858E] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Emergency alert triggered</p>
                  <p className="text-gray-500 text-sm">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg">
                <div className="w-10 h-10 bg-[#7DA78C] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">New report submitted</p>
                  <p className="text-gray-500 text-sm">15 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App(){
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/emergency" element={<Emergency/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/resident" element={<Resident/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;