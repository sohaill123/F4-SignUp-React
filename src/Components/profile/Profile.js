import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from "../../actions/userActions";
import "./style.css"

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <div className='profile-container'>
        <h2>Profile Page</h2>
        <h2>Full Name: {user.fullName}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Password: {user.password}</h2></div>


      <button id='logout-btn' onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

export default ProfilePage;
