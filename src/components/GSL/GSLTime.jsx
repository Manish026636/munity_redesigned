import React from 'react'

const GSLTime = () => {
  return (
    <div>
        <div className="bg-gray-600 mt-1 h-20 border-t-8 border-[#74C5FF] rounded-md  w-full">
        <h2 className="text-3xl text-center text-white font-bold py-4 mb-1">
          Timer
        </h2>
      </div>
      <div className=" grid grid-cols-1  justify-center w-full  h-[28vh] border-4 border-[#ABABAB] mt-1 rounded-md">
        <div className="">
          <h1 className="text-center text-lg font-bold text-gray-500 pt-4">
            Total Time
          </h1>
          <h1 className="text-center text-xl  font-bold text-purple-500">
          20m : 00s / 20m : 00s
          </h1>
          <h1 className="text-center text-lg font-bold text-[#505050] opacity-80 pt-1">
          Per Speaker Time 
          </h1>
          <h1 className="text-center text-3xl  font-bold text-[#2194FF] ">
          00m : 40s / 01m : 00s
          </h1>
      <div className='flex justify-center items-center gap-4 mt-5'>
      <button className='bg-[#000000] opacity-80 text-center mt-2 px-8 rounded-lg text-white text-lg font-bold py-1'>Yield</button>
      <button className='bg-[#2194FF] text-center mt-2 px-8 rounded-lg text-white text-lg font-bold py-1'>Reset</button>
      </div>
        
        </div>
      </div>
    </div>
  )
}

export default GSLTime