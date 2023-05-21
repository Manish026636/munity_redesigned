import React from 'react'
import McausTable from './TableDelegate'
import McausTimeSection from './McausTimeSection'

const McausDiscussion = () => {
  return (
    <div>
        <div class=" grid grid-cols-1 sm:grid-cols-7 gap-10">
        <div class="bg-[#F4F6F9]  p-4 sm:col-span-2 md:col-span-2"><McausTimeSection /></div>

        <div class="bg-[#F4F6F9] p-4 sm:col-span-2 md:col-span-5"><McausTable /></div>

        </div>


      </div>
  )
}

export default McausDiscussion
