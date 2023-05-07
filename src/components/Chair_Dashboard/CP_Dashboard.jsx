import React from "react";
import Sidebar from "../common/Sidebar";
import ComitDetail from "./ComitDetail";
import RC_Dashboard from "../RollCall/RC_Dashboard";
const CP_Dashboard = () => {

  return (
    <div className="flex h-screen bg-[#f4f6f9]">
      <Sidebar />
      <main className="flex-1  ">
        <RC_Dashboard/>
      </main>
    </div>
  );
};

export default CP_Dashboard;
