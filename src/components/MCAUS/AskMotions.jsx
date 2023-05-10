import React from 'react'
import MotionForm from './MotionForm'

const AskMotions = () => {
    return (
        
            <div>
                <div className="bg-gray-600  mt-6 h-20 border-t-8 border-[#74C5FF] rounded-md lg:w-3/4">
                    <h2 className="text-xl text-center text-white font-bold py-5 ">
                        Do you have any motions on the floor ?
                    </h2>
                </div>
                <div className=' grid grid-cols-1  justify-center lg:w-3/4 h-auto py-4 border-4 border-[#ABABAB] mt-1 rounded-md'>
                    <div className="flex  flex-col mt-3 items-center space-y-4">
                        <button className="bg-[#12A7C8] text-white font-bold py-4 px-8 rounded-lg ">Register Motions</button>

                    </div>
                </div>
                <MotionForm/>


        </div>
    )
}

export default AskMotions
