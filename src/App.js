import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import { Clientdashboard, Studentdashboard } from './Component/Login/Dashboard';
import { Studentprofile } from './Component/Login/Dashboard';
import { Admindashboard } from './Component/Admindashboard/Admindashboard';
import { Amdashboard } from './Component/Amdashboard/Amdashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TicketSummary from './Component/Summary/Summary';

import AdminSidebar from './Component/Adminsidebar/Adminsidebar';

function App() {
  return (
    <div>
    {/* <Login/> */}
{/* <Clientdashboard/> */}
 {/* <Admindashboard/> */}
 <Amdashboard/>

 <BrowserRouter>
 <Routes>

  {/* <Route path='/' element={<Login/>}/>
  <Route path='/admin' element={<Admindashboard/>}/>
  <Route path='/client' element={<Clientdashboard/>}/>
  <Route path="/adminsidebar" element={<AdminSidebar/>}/>
  <Route path='/accmanager' element={<Amdashboard/>}/>
  <Route path='/ticketsummary' element={<TicketSummary/>}/> */}

 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
