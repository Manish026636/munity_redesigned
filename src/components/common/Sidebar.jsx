import React from "react";
import {Link} from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="flex hidden sm:block flex-col justify-center items-center h-full w-48 bg-[#000000] opacity-80 text-gray-100">
  <div className="py-4 px-6">
    <h2 className="text-xs pb-2 text-center font-medium pt-6">Committee</h2>
    <h2 className="text-xl text-center font-bold text-[#2AD16D]">UNHRC</h2>
    <h2 className="text-xs pb-2 text-center pt-2 font-medium">Session ID</h2>
    <h2 className="text-xl text-center text-[#74C5FF] font-bold"># 040523-2</h2>
  </div>
  <nav className="flex-1 pt-10 space-y-4 w-full px-6">
    <Link to="/RC_Dashboard"><button className="block py-3 w-full border border-blue-500 rounded-lg font-bold text-lg bg-[#2194FF] hover:text-white hover:border-white hover:bg-blue-600 text-white">
      Roll Call
    </button></Link>
    <Link to="/GSLDashboard"><button className="block mt-3 py-3 w-full border border-blue-500 rounded-lg font-bold text-lg bg-white hover:text-white text-gray-700 hover:border-white hover:bg-blue-600">
      GSL
    </button></Link>
    <Link to="/McausDashboard"><button className="block py-3 w-full border mt-3 border-blue-500 rounded-lg font-bold text-lg bg-white hover:text-white text-gray-700 hover:border-white hover:bg-blue-600">
      Mod-Cocus
    </button></Link>
    <Link to="/UnMcausDashboard"><button className="block py-3 w-full border mt-3 border-blue-500 rounded-lg font-bold text-lg bg-white hover:text-white text-gray-700 hover:border-white hover:bg-blue-600">
      UnMod-Cocus
    </button></Link>
    <button className="block py-3 w-full border mt-3 border-blue-500 rounded-lg font-bold text-lg bg-white hover:text-white text-gray-700 hover:border-white hover:bg-blue-600">
      POI
    </button>
  </nav>
</div>

  );
};

export default Sidebar;
