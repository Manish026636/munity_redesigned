import React from 'react'
import PieChart from './Piechart'

const RC_Result = () => {
    return (
        <div>
            <div className="bg-gray-600 mt-1 h-20 border-t-8 border-[#74C5FF] rounded-md w-full">
                <h2 className="text-3xl text-center text-white font-bold py-4 mb-1">
                    Roll Call Result
                </h2>
            </div>
            <div className=' grid grid-cols-1  justify-center w-full h-[76vh] border-4 border-[#ABABAB] mt-1 rounded-md'>
                <div className=''>
                    <h1 className='text-center text-xl font-bold text-gray-500 pt-4'>Present</h1>
                    <div className='flex justify-center'>
                        <button className='bg-[#74C5FF] text-center mt-2 px-10 rounded-lg text-white text-2xl font-bold py-2'>12</button>

                    </div>


                    <h1 className='text-center bg text-xl font-bold text-gray-500 pt-4 '>Present & Voting</h1>
                    <div className='flex justify-center'>
                        <button className='bg-[#2194FF] text-center mt-2 px-10 rounded-lg text-white text-2xl font-bold py-2'>12</button>

                    </div>
                    <h1 className='text-center bg text-xl font-bold text-gray-500 pt-4 '>Absent</h1>
                    <div className='flex justify-center'>
                        <button className='bg-[#838383] text-center mt-2 px-10 rounded-lg text-white text-2xl font-bold py-2'>05</button>

                    </div>
                    
                </div>
                <PieChart/>
            </div>

        </div>
    )
}

export default RC_Result
