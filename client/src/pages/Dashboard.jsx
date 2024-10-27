import { Link } from 'react-router-dom';
import '../css/dashboard.css';
import '../css/home.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <h2>E-BANK</h2>
        </div>
        <div className="welcome">
          <p>Welcome, raman123</p>
        </div>
        <nav className="nav-links">
          <ul>
            <li className="nav-item active">
              <i className="icon">🏠</i>
              <Link to='/dashboard' > <span>Home</span> </Link>
            </li>
            <li className="nav-item">
              <i className="icon">👤</i>
              <Link to='/profile' >  <span>Profile</span> </Link>
            </li>
            <li className="nav-item">
              <i className="icon">📄</i>
              <Link to='/accountRequest' > <span>Request Account</span> </Link>
            </li>
            <li className="nav-item notifications">
              <i className="icon">🔔</i>
              <Link to='/notifications'> <span>Notifications</span> </Link>
              <span className="notification-count">1</span>
            </li>
            <li className="nav-item">
              <i className="icon">⚙️</i>
              <Link to='/updateProfile' >  <span>Settings</span> </Link>
            </li>
            <li className="nav-item logout">
              <i className="icon">🔴</i>
              <Link to='/login'> <span>Logout</span> </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div className="no-account-message">
          <i className="warning-icon">⏰</i>
          <p>You do not have any accounts yet!</p>
          <Link to='/accountRequest' > <button className="blue">Request Account</button> </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
