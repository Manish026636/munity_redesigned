import React from 'react'
<<<<<<< HEAD
import RCTable from './RCTable';
import RCResult from './RCResult';
=======
import RC_Table from '../RollCall/RC_Table';
import RC_Result from './RC_Result';
>>>>>>> 0a67f839ace7593a59c4b69a630e7db9d8250197
const RC_Dashboard = () => {
    return (
        <div>
            <div class=" grid grid-cols-1 sm:grid-cols-4 gap-4">
<<<<<<< HEAD
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-3">
                    <RCTable/>
                    </div>
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-1">
                    <RCResult/>
                    </div>
=======
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-3"><RC_Table /></div>
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-1"><RC_Result/></div>
>>>>>>> 0a67f839ace7593a59c4b69a630e7db9d8250197
            </div>


        </div>
    )
}

export default RC_Dashboard
