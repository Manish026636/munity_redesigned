import React from 'react'
import { Link } from 'react-router-dom'
const ProposedTopics = () => {
    return (
        <div>
            <div className="bg-gray-600  mt-6 h-20 border-t-8 border-[#74C5FF] rounded-md lg:w-full">
                <h2 className="text-xl text-center text-white font-bold py-5 ">
                    Proposed Topics for Voting
                </h2>
            </div>
            <div className=' grid grid-cols-1 scrollbar-hide overflow-y-auto  justify-center lg:w-full h-[70vh] py-4 border-4 border-[#ABABAB] mt-1 rounded-md'>
                <div className='flex justify-center items-center'>

                    <div className="w-full px-2 lg:px-0 lg:w-4/5 mx-auto">
                        <div className=" overflow-hidden bg-white rounded-xl shadow">
                            <div className="px-8 py-8">
                                <div className="flex items-center">
                                    <img className="flex-shrink-0 w-12 rounded-lg border border-gray-300 h-auto" src="india.png" alt="" />
                                    <div className="ml-5 mr-auto">
                                        <p className="text-xl font-bold text-gray-600">Galwan Valley Issue</p>
                                        <p className="mt-px text-md text-gray-600">Proposing Country : <span className="font-bold text-cyan-600 text-lg">INDIA</span></p>
                                    </div>

                                </div>
                                <div className='flex justify-center gap-4 mt-4 items-center'>
                                    <h1 className='bg-[#f4f6f9] border-2 border-gray-300  px-4 py-2  text-md rounded-lg text-gray-700  font-bold'>Total Time : 20 Minutes</h1>
                                    <h1 className='bg-[#f4f6f9] border-2 border-gray-300 px-4 py-2  text-md rounded-lg  text-gray-700 font-bold'>Per Delegate Time : <span>2 Minutes</span></h1>

                                </div>
                                <div className='flex justify-center gap-6 mt-6 items-center'>
                                    <Link to="/VotingPage"><button className='bg-blue-400 px-4 py-2  text-md rounded-lg text-white font-bold'>VOTE</button></Link>
                                    <button className='bg-green-500 px-4 py-2  text-md rounded-lg text-white font-bold'>PASS</button>
                                    <button className='bg-red-500 px-4 py-2  text-md rounded-lg text-white font-bold'>FAIL</button>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-4 justify-center items-center'>
                <div className="w-full px-2 lg:px-0 lg:w-4/5 mx-auto">
                <div className=" overflow-hidden bg-white rounded-xl shadow">
                    <div className="px-8 py-8">
                        <div className="flex items-center">
                            <img className="flex-shrink-0 w-12 rounded-lg border border-gray-300 h-auto" src="russia.png" alt="" />
                            <div className="ml-5 mr-auto">
                                <p className="text-xl font-bold text-gray-600">Ukraine-Russia War</p>
                                <p className="mt-px text-md text-gray-600">Proposing Country : <span className="font-bold text-cyan-600 text-lg">Russia</span></p>
                            </div>

                        </div>
                        <div className='flex justify-center gap-4 mt-4 items-center'>
                            <h1 className='bg-[#f4f6f9] border-2 border-gray-300  px-4 py-2  text-md rounded-lg text-gray-700  font-bold'>Total Time : 15 Minutes</h1>
                            <h1 className='bg-[#f4f6f9] border-2 border-gray-300 px-4 py-2  text-md rounded-lg  text-gray-700 font-bold'>Per Delegate Time : <span>3 Minutes</span></h1>

                        </div>
                        <div className='flex justify-center gap-6 mt-6 items-center'>
                            <button className='bg-blue-400 px-4 py-2  text-md rounded-lg text-white font-bold'>VOTE</button>
                            <Link to="/DiscussionDashboard"><button className='bg-green-500 px-4 py-2  text-md rounded-lg text-white font-bold'>PASS</button></Link>
                            <button className='bg-red-500 px-4 py-2  text-md rounded-lg text-white font-bold'>FAIL</button>


                        </div>

                    </div>
                </div>
            </div>
                </div>
                <div className='flex mt-4 justify-center items-center'>
                <div className="w-full px-2 lg:px-0 lg:w-4/5 mx-auto">
                <div className=" overflow-hidden bg-white rounded-xl shadow">
                    <div className="px-8 py-8">
                        <div className="flex items-center">
                            <img className="flex-shrink-0 w-12 rounded-lg border border-gray-300 h-auto" src="usa.jpeg" alt="" />
                            <div className="ml-5 mr-auto">
                                <p className="text-xl font-bold text-gray-600">Afghanistan Crisis</p>
                                <p className="mt-px text-md text-gray-600">Proposing Country : <span className="font-bold text-cyan-600 text-lg">USA</span></p>
                            </div>

                        </div>
                        <div className='flex justify-center gap-4 mt-4 items-center'>
                            <h1 className='bg-[#f4f6f9] border-2 border-gray-300  px-4 py-2  text-md rounded-lg text-gray-700  font-bold'>Total Time : 10 Minutes</h1>
                            <h1 className='bg-[#f4f6f9] border-2 border-gray-300 px-4 py-2  text-md rounded-lg  text-gray-700 font-bold'>Per Delegate Time : <span>2 Minutes</span></h1>

                        </div>
                        <div className='flex justify-center gap-6 mt-6 items-center'>
                            <button className='bg-blue-400 px-4 py-2  text-md rounded-lg text-white font-bold'>VOTE</button>
                            <button className='bg-green-500 px-4 py-2  text-md rounded-lg text-white font-bold'>PASS</button>
                            <button className='bg-red-500 px-4 py-2  text-md rounded-lg text-white font-bold'>FAIL</button>


                        </div>

                    </div>
                </div>
            </div>
                </div>


            </div>
        </div>
    )
}

export default ProposedTopics
