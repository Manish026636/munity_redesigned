import React from 'react'
import RCTable from './RCTable';
import RCResult from './RCResult';
const RC_Dashboard = () => {
    return (
        <div>
            <div class=" grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-3"><RCTable /></div>
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-1"><RCResult/></div>
            </div>


        </div>
    )
}

export default RC_Dashboard
