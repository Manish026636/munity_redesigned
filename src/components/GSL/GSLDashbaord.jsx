import React from 'react'
import TimeSection from './TimeSection'
import GSLTable from './GSLTable'

const GSLDashbaord = () => {
  return (
    <>
        <div>
            <div class=" grid grid-cols-1 sm:grid-cols-5 gap-2">
            <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-2"><TimeSection/></div>
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-3"><GSLTable/></div>
            </div>


        </div>
    </>
  )
}

export default GSLDashbaord