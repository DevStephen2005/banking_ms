import React from 'react';
import '../css/topreasons.css'; // Import the corresponding CSS

const TopReasons = () => {
  return (
    <section className="top-reasons">
      <div className="top-reasons-header">
        <h2>Discover the Top Reasons to Bank with <span className="highlight">E-Bank</span></h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className="features">
        <div className="feature">
          <div className="icon">
            {/* Replace with actual icons */}
            <img src="/path-to-icon/online-banking-icon.svg" alt="Online Banking" />
          </div>
          <h3>Online Banking</h3>
          <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="/path-to-icon/simple-budgeting-icon.svg" alt="Simple Budgeting" />
          </div>
          <h3>Simple Budgeting</h3>
          <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="/path-to-icon/fast-onboarding-icon.svg" alt="Fast Onboarding" />
          </div>
          <h3>Fast Onboarding</h3>
          <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="/path-to-icon/open-api-icon.svg" alt="Open API" />
          </div>
          <h3>Open API</h3>
          <p>Manage your savings, investments, pension, and more from one account. Tracking your money has never been easier.</p>
        </div>
      </div>
    </section>
  );
};

export default TopReasons;
