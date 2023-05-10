import React from 'react'
import { RiAddLine, RiTimeLine } from 'react-icons/ri';

const GSLSettings = () => {

    return (
        <div>
            <div className="bg-gray-600 mt-6 h-20 border-t-8 border-[#74C5FF] rounded-md w-full">
                <h2 className="text-3xl text-center text-white font-bold py-4 mb-1">
                    GSL Settings
                </h2>
            </div>
            <div className=' grid grid-cols-1  justify-center w-full h-[21vh] border-4 border-[#ABABAB] mt-1 rounded-md'>
                <div className="flex flex-col mt-6 items-center space-y-4">
                    <button className="bg-[#F4F6F9] border border-[#959595] rounded-lg hover:bg-blue-600 text-gray-500 font-bold py-3 px-6 flex items-center">
                        <RiAddLine className="inline-block text-[#3DBFDB]  mr-1 text-xl" />
                        Add Delegates
                    </button>

                    <button className="bg-[#F4F6F9] border border-[#959595] rounded-lg hover:bg-blue-600 text-gray-500 font-bold py-3 px-6 flex items-center">
                        <RiTimeLine className="inline-block text-[#3DBFDB]  mr-1 text-xl" />
                        Set GSL Time
                    </button>
                </div>
            </div>


        </div>
    )
}

export default GSLSettings;
