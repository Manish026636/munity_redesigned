import React from "react";
import Sidebar from "./common/Sidebar";
import ComitDetail from "./ComitDetail";
import RC_Dashboard from "./RollCall/RC_Dashboard";
import MobileBar from "./common/MobileBar";
import GSLDashbaord from "./GSL/GSLDashbaord";
const CP_Dashboard = () => {

  return (
    <>
    <MobileBar/>
    <div className="flex h-screen bg-[#f4f6f9]">
      <Sidebar/>
      <main className="flex-1  ">
        <GSLDashbaord/>
      </main>
    </div>
    </>
  );
};

export default CP_Dashboard;
