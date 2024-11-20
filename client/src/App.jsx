import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TransactionHistory from "./pages/TransactionHistory";
import Loan from "./pages/Loan";
import RecievedRequest from "./pages/RecievedRequest";
import UserProfile from "./pages/Profile";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/loan" element={<Loan />}></Route>
        <Route path="/transaction-history" element={<TransactionHistory />}></Route>
        <Route path="/received-Requests" element={<RecievedRequest />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
