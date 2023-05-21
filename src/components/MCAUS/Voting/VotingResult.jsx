import React from 'react'
import PieChart from './VotingPieChart'

const VotingResult = () => {
    const data = [12, 24, 4];

    return (
        <div>
            <div className="bg-gray-600 mt-1 h-20 border-t-8 border-[#74C5FF] rounded-md w-full">
                <h2 className="text-3xl text-center text-white font-bold py-4 mb-1">
                Voting Result
                </h2>
            </div>
            <div className=' grid grid-cols-1  justify-center w-full h-[76vh] border-4 border-[#ABABAB] mt-1 rounded-md'>
                <div className=''>
                    <h1 className='text-center text-xl font-bold text-gray-500 pt-4'>Favor</h1>
                    <div className='flex justify-center'>
                        <button className='bg-green-500 text-center mt-2 px-10 rounded-lg text-white text-2xl font-bold py-2'>12</button>

                    </div>


                    <h1 className='text-center bg text-xl font-bold text-gray-500 pt-4 '>Against</h1>
                    <div className='flex justify-center'>
                        <h1 className='bg-red-500 text-center mt-2 px-10 rounded-lg text-white text-2xl font-bold py-2'>24</h1>

                    </div>
                    <h1 className='text-center bg text-xl font-bold text-gray-500 pt-4 '>Abstain</h1>
                    <div className='flex justify-center'>
                        <h1 className='bg-gray-500 text-center mt-2 px-10 rounded-lg text-white text-2xl font-bold py-2'>04</h1>

                    </div>
                    
                </div>
                <PieChart data={data}/>
            </div>

        </div>
    )
}

export default VotingResult;
