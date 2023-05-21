import React from 'react'
import VotingTable from './VotingTable'
import VotingResult from './VotingResult'

const VotingPage = () => {
  return (
    <div>
            <div class=" grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-3"><VotingTable /></div>
                <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-1"><VotingResult/></div>
            </div>


        </div>
  )
}

export default VotingPage
