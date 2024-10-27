import '../css/notifications.css';

const Notifications = () => {
  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>Notifications</h2>
      </div>
      <div className="notification-box">
        <div className="notification-item">
          <span className="notification-icon">📧</span>
          <div className="notification-text">
            <p>Account Request</p>
            <small>4 days ago</small>
          </div>
          <span className="notification-status">✔️</span>
        </div>
      </div>

    </div>
  );
};

export default Notifications;
