import React from 'react'
import RC_Table from '../RollCall/RC_Table';
import RC_Result from './RC_Result';
const RC_Dashboard = () => {
    return (
        <div>
            <div class=" grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-3"><RC_Table /></div>
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-1"><RC_Result/></div>
            </div>


        </div>
    )
}

export default RC_Dashboard
