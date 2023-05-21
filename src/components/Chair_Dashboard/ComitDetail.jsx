import React from 'react';

const ComitDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-28">
        <h1 className="text-3xl lg:text-5xl text-[#A8A8A8] font-bold text-center">Greetings, Chairperson</h1>
      </div>
      <div className="flex flex-col gap-6 justify-center sm:flex-row">
        <div className="bg-[#f4f6f9] border-4 mt-10 lg:mt-20 rounded-3xl border-[#D3D3D3] w-[40vh] h-60">
          <h1 className="text-center pt-12 font-bold">Committee Name</h1>
          <h1 className="text-center text-5xl font-bold pt-10 text-[#42A0F6]">UNHRC</h1>
        </div>
        <div className="bg-[#f4f6f9] border-4 mt-10 lg:mt-20 rounded-3xl border-[#D3D3D3] w-[40vh] h-60">
          <h1 className="text-center pt-12 font-bold">Total Members</h1>
          <h1 className="text-center text-5xl font-bold pt-8 text-[#42A0F6]">50</h1>
        </div>
      </div>
    </div>
  );
};

export default ComitDetail;
