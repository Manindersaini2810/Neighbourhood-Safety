import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import Resident from "./Resident";

const colors = {
  primary: "#1E3A5F",
  secondary: "#2D5A4A",
  accent: "#8B9D77",
  light: "#F5F5F0",
  dark: "#1A1A2E",
  warning: "#C9302C",
  success: "#2D5A4A"
}

function Home(){
  return (
    <div style={{ backgroundColor: colors.light, minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-[#1E3A5F] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-[#1A1A2E]">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          <h1 className="text-6xl font-black text-[#1E3A5F] mb-4 tracking-tight">
            NEIGHBOURHOOD SAFETY
          </h1>
          <p className="text-2xl text-[#1A1A2E] mb-10 max-w-2xl mx-auto font-medium">
            Your trusted community safety & support system
          </p>

          <a href="/emergency" className="inline-flex items-center px-10 py-5 bg-[#C9302C] text-white font-bold text-lg rounded-xl shadow-xl hover:bg-[#a02620] transition-all transform hover:scale-105">
            <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            SEND EMERGENCY ALERT
          </a>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#1E3A5F]">
              <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Emergency Alert</h3>
              <p className="text-gray-600">Instantly notify neighbours during emergencies</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#2D5A4A]">
              <div className="w-14 h-14 bg-[#2D5A4A] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Report Activity</h3>
              <p className="text-gray-600">Report suspicious activity in your area</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#1E3A5F]">
              <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Community</h3>
              <p className="text-gray-600">Connect with neighbours</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#1E3A5F]">
              <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Live Dashboard</h3>
              <p className="text-gray-600">Real-time safety monitoring</p>
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
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-10">
            <div className="w-40 h-40 bg-[#C9302C] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-[#1A1A2E]">
              <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-black text-[#C9302C] mb-4">EMERGENCY ALERT</h1>
          <p className="text-xl text-[#1A1A2E] mb-10">Send an immediate alert to all neighbours in your community</p>

          <button
            onClick={sendAlert}
            className="inline-flex items-center px-16 py-7 bg-[#C9302C] text-white text-2xl font-bold rounded-xl shadow-2xl hover:bg-[#a02620] transition-all transform hover:scale-105"
          >
            <svg className="w-10 h-10 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.352 2.352 0 0118 15.618V12a6 6 0 10-12 0v3.618c0 .419.113.816.301 1.155L6 17h5m4 0v-2m0 4h.01" />
            </svg>
            SEND ALERT NOW
          </button>

          <h2 className="text-3xl font-bold text-[#1E3A5F] mt-20 mb-8">Recent Alerts</h2>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            {alerts.length === 0 ? (
              <div className="bg-white rounded-xl p-10 shadow-lg">
                <p className="text-gray-500 text-lg">No recent alerts. Stay safe!</p>
              </div>
            ) : (
              alerts.slice(0, 5).map((a,index)=>(
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-8 border-[#C9302C] flex items-center justify-between">
                  <div>
                    <p className="text-[#1A1A2E] font-semibold text-lg">{a.message}</p>
                    <p className="text-gray-500 text-sm mt-2">{a.time ? new Date(a.time).toLocaleString() : 'Just now'}</p>
                  </div>
                  <div className="w-3 h-3 bg-[#C9302C] rounded-full"></div>
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
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#2D5A4A] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-[#1A1A2E]">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-black text-[#1E3A5F] mb-4">REPORT ACTIVITY</h1>
          <p className="text-xl text-[#1A1A2E]">Help keep your neighbourhood safe</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-10 mb-16 max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-[#1E3A5F] mb-3 uppercase tracking-wide">Location</label>
              <input
                placeholder="Enter specific location"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#2D5A4A] focus:outline-none transition-all text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1E3A5F] mb-3 uppercase tracking-wide">Description</label>
              <textarea
                placeholder="Describe what you observed in detail..."
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
                rows="5"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#2D5A4A] focus:outline-none transition-all text-lg resize-none"
              />
            </div>

            <button
              onClick={submitReport}
              className="w-full py-5 bg-[#2D5A4A] text-white font-bold text-xl rounded-xl shadow-lg hover:bg-[#234a3c] transition-all transform hover:scale-[1.02]"
            >
              Submit Report
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-8 text-center">Recent Reports</h2>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          {reports.length === 0 ? (
            <div className="bg-white rounded-xl p-10 shadow-lg">
              <p className="text-gray-500 text-lg">No reports submitted yet.</p>
            </div>
          ) : (
            reports.slice(0, 5).map((r,index)=>(
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-8 border-[#2D5A4A]">
                <p className="font-bold text-[#1E3A5F] text-xl">{r.location}</p>
                <p className="text-gray-600 mt-2 text-lg">{r.description}</p>
                <p className="text-gray-400 text-sm mt-3">{r.time ? new Date(r.time).toLocaleString() : ''}</p>
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

  const getScoreColor = (score) => {
    if (score >= 80) return "#2D5A4A";
    if (score >= 60) return "#8B9D77";
    return "#C9302C";
  }

  return(
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#1E3A5F] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-[#1A1A2E]">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-black text-[#1E3A5F] mb-4">DASHBOARD</h1>
          <p className="text-xl text-[#1A1A2E]">Neighbourhood safety overview</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#C9302C] rounded-2xl p-8 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-pink-200 text-sm font-bold uppercase tracking-wide">Emergency Alerts</p>
            <p className="text-5xl font-black mt-2">{alertCount}</p>
            <p className="text-pink-200 text-sm mt-3">Total alerts submitted</p>
          </div>

          <div className="bg-[#2D5A4A] rounded-2xl p-8 shadow-2xl text-white">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-green-200 text-sm font-bold uppercase tracking-wide">Reports</p>
            <p className="text-5xl font-black mt-2">{reportCount}</p>
            <p className="text-green-200 text-sm mt-3">Total reports submitted</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-10 h-10 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Active Members</p>
            <p className="text-5xl font-black text-[#1E3A5F] mt-2">{stats.activeMembers}</p>
            <p className="text-gray-400 text-sm mt-3">Registered users</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-10 h-10" style={{color: getScoreColor(stats.safetyScore)}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Safety Score</p>
            <p className="text-5xl font-black mt-2" style={{color: getScoreColor(stats.safetyScore)}}>{stats.safetyScore}%</p>
            <p className="text-gray-400 text-sm mt-3">
              {stats.safetyScore >= 80 ? "Excellent" : stats.safetyScore >= 60 ? "Good" : "Needs Attention"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-8">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-6">
              <a href="/emergency" className="flex flex-col items-center p-8 bg-[#C9302C] rounded-xl text-white hover:bg-[#a02620] transition-all shadow-lg">
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="font-bold text-lg">Emergency</span>
              </a>
              <a href="/report" className="flex flex-col items-center p-8 bg-[#2D5A4A] rounded-xl text-white hover:bg-[#234a3c] transition-all shadow-lg">
                <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-bold text-lg">Report</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-8">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center p-5 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#C9302C] rounded-xl flex items-center justify-center mr-5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Emergency alert triggered</p>
                  <p className="text-gray-500 text-sm">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center p-5 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#2D5A4A] rounded-xl flex items-center justify-center mr-5">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">New report submitted</p>
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