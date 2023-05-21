import React from 'react'

const McausInfo = () => {
    return (
        <div>
            <div className="bg-gray-600 mt-1 h-20 border-t-8 border-[#74C5FF] rounded-md  w-full">
                <h2 className="text-3xl text-center text-white font-bold py-4 mb-1">
                    ModCocus Info
                </h2>
            </div>
            <div className=" grid grid-cols-1  justify-center w-full  h-auto py-4 border-4 border-[#ABABAB] mt-1 rounded-md">
                <div className="px-4">
                    <h1 className=" text-lg pt-2  font-bold text-[#74C5FF]">
                        Topic :  <span className='text-gray-500 text-xl'>Ukraine War</span>
                    </h1>
                    <h1 className=" text-lg pt-2  font-bold text-[#74C5FF]">
                        Total Time : <span className='text-gray-500 text-xl'>20 minutes</span>
                    </h1>
                    <h1 className=" text-lg pt-2  font-bold text-[#74C5FF]">
                    Each Delegate Time : <span className='text-gray-500 text-xl'>2 minutes</span>
                    </h1>
                    <h1 className=" text-lg pt-2  font-bold text-[#74C5FF]">
                    Proposed by : <span className='text-gray-500 text-xl'>Ukraine</span>
                    </h1>


                </div>
            </div>
        </div>
    )
}

export default McausInfo
