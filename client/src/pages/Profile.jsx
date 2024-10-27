import '../css/Profile.css';
import '../css/home.css';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Engineer with a passion for web development.',
    profilePicture: 'https://via.placeholder.com/150' // Placeholder image URL
  };

  const handleEdit = () => {
    alert('Edit profile functionality coming soon!');
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
  };

  return (
    <div className="profile-container">
      <img src={user.profilePicture} alt="Profile" className="profile-picture" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p>
      <p className="profile-bio">{user.bio}</p>
      <div className="profile-actions">
        <button className="green" onClick={handleEdit}>Edit Profile</button>
        <button className="red" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
