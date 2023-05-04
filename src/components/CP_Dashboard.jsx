import React from "react";
import Sidebar from "./common/Sidebar";
const CP_Dashboard = () => {

  return (
    <div className="flex h-screen bg-[#f4f6f9]">
      <Sidebar />
      <main className="flex-1  ">
        <div className="flex justify-center  mt-28">
        <h1 className="text-3xl text-gray-400 font-bold">Greeting Chaiperson,</h1>

        </div>
        <div className="flex justify-center">
          
          <div className="bg-[#f4f6f9] border-4 mt-20 rounded-xl border-blue-400 w-[50vh] h-60">
            <h1 className="text-center text-3xl font-bold pt-10 text-blue-500">UNHRC</h1>
            <h1 className="text-center font-medium">Committee</h1>
            <h1 className="text-center text-3xl font-bold pt-8 text-blue-500">50</h1>
            <h1 className="text-center font-medium">Total Members</h1>

          </div>
        </div>
      </main>
    </div>
  );
};

export default CP_Dashboard;
