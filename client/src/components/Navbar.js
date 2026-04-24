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
    <nav className="bg-[#35858E] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-white text-xl font-bold">Neighbourhood Safety & Support</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="text-white hover:bg-[#2d6e78] px-4 py-2 rounded-lg font-medium transition-colors">
              Home
            </Link>
            <Link to="/emergency" className="text-white hover:bg-[#2d6e78] px-4 py-2 rounded-lg font-medium transition-colors">
              Emergency
            </Link>
            <Link to="/report" className="text-white hover:bg-[#2d6e78] px-4 py-2 rounded-lg font-medium transition-colors">
              Report
            </Link>
            <Link to="/dashboard" className="text-white hover:bg-[#2d6e78] px-4 py-2 rounded-lg font-medium transition-colors">
              Dashboard
            </Link>
            
            {userRole ? (
              <div className="flex items-center space-x-2 ml-4">
                {userRole === "admin" ? (
                  <Link to="/admin" className="bg-[#C2D099] hover:bg-[#b2c089] text-[#35858E] px-4 py-2 rounded-lg font-medium transition-colors">
                    Admin
                  </Link>
                ) : (
                  <Link to="/resident" className="bg-[#7DA78C] hover:bg-[#6d977c] text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Resident
                  </Link>
                )}
                <button onClick={handleLogout} className="text-white hover:bg-[#C2D099] hover:text-[#35858E] px-4 py-2 rounded-lg font-medium transition-colors ml-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4">
                <Link to="/login" className="text-white hover:bg-[#2d6e78] px-4 py-2 rounded-lg font-medium transition-colors">
                  Login
                </Link>
                <Link to="/register" className="bg-[#C2D099] hover:bg-[#b2c089] text-[#35858E] px-4 py-2 rounded-lg font-medium transition-colors">
                  Register
                </Link>
              </div>
            )}
          </div>
          
          <div className="md:hidden">
            <div className="flex items-center space-x-2">
              {userRole && (
                <span className="text-white text-sm">{userEmail}</span>
              )}
              <Link to="/login" className="text-white text-sm">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;