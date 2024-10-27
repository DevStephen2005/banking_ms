import { Link } from 'react-router-dom';
import '../css/footer.css';
import '../css/home.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_Container">
        <h3>E-Bank is everything you need now!</h3>
        <div className="foot_List">
            <ul>
                <li>Home</li>
                <li>Why E-Bank</li>
                <li>Support</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      </div>
      <Link to='/register' > <button className='register_btn'>Register</button> </Link>
      <p className="footer-rights">All Rights Reserved © E-Bank 2024</p>
    </footer>
  );
};

export default Footer;
