import React from 'react'
import { RiAddLine, RiTimeLine } from 'react-icons/ri';
import AddDelegate from './AddDelegate';
import SetTime from './SetTime';

const GSLSettings = () => {

    return (
        <div>
            <div className="bg-gray-600  mt-6 h-20 border-t-8 border-[#74C5FF] rounded-md w-full">
                <h2 className="text-3xl text-center text-white font-bold py-4 mb-1">
                    GSL Settings
                </h2>
            </div>
            <div className=' grid grid-cols-1  justify-center w-full h-auto py-4 border-4 border-[#ABABAB] mt-1 rounded-md'>
                <div className="flex  flex-col mt-3 items-center space-y-4">
                    <AddDelegate/>

                    <SetTime/>
                </div>
            </div>


        </div>
    )
}

export default GSLSettings;
