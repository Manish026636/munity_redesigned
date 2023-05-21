import React from 'react'
import McausTimer from './McausTimer'
import McausInfo from './TimerSection'
import AddDelegateMcaus from './AddDelegate/AddDelegateMcaus'
import FeedbackMcaus from '../FeedbackMcaus'
const McausTimeSection = () => {
  return (
    <div>
      <McausTimer />
    <McausInfo/>
    <AddDelegateMcaus/>
    <FeedbackMcaus/>
    </div>
  )
}

export default McausTimeSection
