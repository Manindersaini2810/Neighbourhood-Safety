import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("userRole");
  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <nav className="bg-[#1A1A2E] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold tracking-wide">NSS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="text-gray-300 hover:text-white hover:bg-[#1E3A5F] px-5 py-3 rounded-lg font-semibold transition-all">
              Home
            </Link>
            <Link to="/emergency" className="text-gray-300 hover:text-white hover:bg-[#1E3A5F] px-5 py-3 rounded-lg font-semibold transition-all">
              Emergency
            </Link>
            <Link to="/report" className="text-gray-300 hover:text-white hover:bg-[#1E3A5F] px-5 py-3 rounded-lg font-semibold transition-all">
              Report
            </Link>
            <Link to="/dashboard" className="text-gray-300 hover:text-white hover:bg-[#1E3A5F] px-5 py-3 rounded-lg font-semibold transition-all">
              Dashboard
            </Link>
            
            {userRole ? (
              <div className="flex items-center space-x-2 ml-4">
                {userRole === "admin" ? (
                  <Link to="/admin" className="bg-[#C9302C] hover:bg-[#a02620] text-white px-5 py-3 rounded-lg font-semibold transition-all">
                    Admin
                  </Link>
                ) : (
                  <Link to="/resident" className="bg-[#2D5A4A] hover:bg-[#234a3c] text-white px-5 py-3 rounded-lg font-semibold transition-all">
                    Resident
                  </Link>
                )}
                <button onClick={handleLogout} className="text-gray-300 hover:text-white hover:bg-[#C9302C] px-5 py-3 rounded-lg font-semibold transition-all ml-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4">
                <Link to="/login" className="text-gray-300 hover:text-white hover:bg-[#1E3A5F] px-5 py-3 rounded-lg font-semibold transition-all">
                  Login
                </Link>
                <Link to="/register" className="bg-[#1E3A5F] hover:bg-[#2a4a73] text-white px-5 py-3 rounded-lg font-semibold transition-all">
                  Register
                </Link>
              </div>
            )}
          </div>
          
          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              {userRole && (
                <span className="text-gray-300 text-xs">{userEmail}</span>
              )}
              <Link to="/login" className="text-gray-300 text-xs">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;