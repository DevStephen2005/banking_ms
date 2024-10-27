import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Testimonial from '../components/Testmonials';
import TopReasons from '../components/TopReasons';
import '../css/home.css';

const Home = () => {
  return (
    <>
        <div className="homepage-container">
      <header className="navbar">
        <div className="logo">E-BANK</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to='/register' > <button className="register_btn">Register</button> </Link>
          <Link to='/login' > <button className="login_Btn">Login</button> </Link>
        </div>
      </header>

      <div className="content-section">
        <h1>E-Bank is Everything you need now!</h1>
        <p>
          Take your financial life online. Your E-Bank account will be a one-stop-shop 
          for sending, saving, budgeting, withdrawing, and much more.
        </p>
        <Link to='/register' > <button className="red">Register Now</button> </Link>
      </div>
        </div>
        {/* TopReason Component  */}
        <TopReasons />
        {/* Testimonials Component  */}
        <Testimonial />
        {/* Footer Component  */}
        <Footer />
    </>
  );
}

export default Home;
