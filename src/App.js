import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import CP_Dashboard from './components/Chair_Dashboard/CP_Dashboard';
import RC_Dashboard from './components/RollCall/RC_Dashboard';
import GSLDashboard from './components/GSL/GSLDashboard';
import DiscussionDashboard from './components/MCAUS/McausDiscussion/DiscussionDashboard';
import McausDashboard from './components/MCAUS/McausDashboard';
import VotingPage from './components/MCAUS/Voting/VotingPage';
import UnMcausDashboard from './components/UnMcaus/UnMcausDashboard';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<CP_Dashboard/>}/>
    <Route path='/RC_Dashboard' element={<RC_Dashboard/>}></Route>
    <Route path='/GSLDashboard' element={<GSLDashboard/>}></Route>
    <Route path='/McausDashboard' element={<McausDashboard/>}></Route>
    <Route path='/VotingPage' element={<VotingPage/>}></Route>
    <Route path='/DiscussionDashboard' element={<DiscussionDashboard/>}></Route>
    <Route path='/UnMcausDashboard' element={<UnMcausDashboard/>}></Route>




    </Routes>
   
    </BrowserRouter>
    
    </>
  );
}

export default App;
