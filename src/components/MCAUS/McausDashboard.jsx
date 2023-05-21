import React from 'react'
import MotionForm from './MotionForm'
import ProposedTopics from './ProposedTopics'

const McausDashboard = () => {
  return (
    <div>
    
    <div class=" grid grid-cols-1 sm:grid-cols-4 gap-2">
 
    <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-2"><MotionForm/></div>
   
      <div class="bg-[#F4F6F9]  p-4 sm:col-span-2 md:col-span-2"><ProposedTopics/></div>
  
    </div>



    </div>
  )
}

export default McausDashboard
