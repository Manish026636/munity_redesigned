import React from 'react'

const MotionForm = () => {
    return (
        <div>
            <div className="bg-gray-600  mt-6 h-20 border-t-8 border-[#74C5FF] rounded-md lg:w-3/4">
                <h2 className="text-xl text-center text-white font-bold py-5 ">
                    Topic Proposal
                </h2>
            </div>
            <div className=' grid grid-cols-1  justify-center lg:w-3/4 h-auto py-4 border-4 border-[#ABABAB] mt-1 rounded-md'>
                <div className="p-6 mt-1  ">
                    <div class="mb-3">
                        <label for="email" class="text-sm text-[#717171] dark:text-white font-bold">Topic Name</label>
                        <input type="text" id="email" placeholder="Enter Topic Name here" class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-[#12A7C8] bg-white/0 p-3 text-sm outline-none" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="text-sm text-[#717171] dark:text-white font-bold">Total Speaking Time</label>
                        <input type="text" id="email" placeholder="Enter Total Speaking Time here" class="mt-2 flex border border-[#12A7C8] h-12 w-full items-center justify-center rounded-xl  bg-white/0 p-3 text-sm outline-none" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="text-sm text-[#717171] dark:text-white font-bold">Each Delegate Speaking Time</label>
                        <input type="text" id="email" placeholder="Enter Each Delegate Speaking Time here" class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-[#12A7C8] bg-white/0 p-3 text-sm outline-none " />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="text-sm text-[#717171] dark:text-white font-bold">Proposing Country</label>
                        <input type="text" id="email" placeholder="Enter Proposing Country here" class="mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-[#12A7C8] bg-white/0 p-3 text-sm outline-none " />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                <button className="focus:outline-none w-1/2 px-4 bg-teal-500 text-xl font-bold p-3 ml-3 rounded-lg text-white hover:bg-teal-400">
                Submit
              </button>
                </div>
               
            </div>


        </div>
    )
}

export default MotionForm
