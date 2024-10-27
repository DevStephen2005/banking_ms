import { useState } from 'react';
import '../css/accountRequest.css';
import '../css/home.css';

const AccountRequest = () => {
  const [formData, setFormData] = useState({
    balance: '',
    password: '',
    paymentMethod: 'vodafone',
    walletNumber: '',
    pin: '',
    otp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Send An Account Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Initial Balance</label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Type your Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Add Initial Balance Via :-</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="vodafone"
                checked={formData.paymentMethod === 'vodafone'}
                onChange={handleChange}
              />
              Vodafone Cash
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditcard"
                checked={formData.paymentMethod === 'creditcard'}
                onChange={handleChange}
              />
              Credit Card
            </label>
          </div>
        </div>

        <p className="fake-info">*All Payment Methods Are FAKE. Just Type Any Values.</p>

        <div className="form-group">
          <label>Wallet Number</label>
          <input
            type="text"
            name="walletNumber"
            value={formData.walletNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>PIN</label>
            <input
              type="password"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>OTP</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="blue">Send Request</button>
      </form>
    </div>
  );
};

export default AccountRequest;
