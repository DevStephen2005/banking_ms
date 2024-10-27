import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AccountRequest from './pages/AccountRequest';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import UpdateProfile from './pages/UpdateProfile';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/accountRequest' element={<AccountRequest />} ></Route>
        <Route path='/profile' element={<Profile />} ></Route>
        <Route path='/notifications' element={<Notifications />} ></Route>
        <Route path='/updateProfile' element={<UpdateProfile />} ></Route>


      </Routes>
    </Router>
  )
}

export default App
