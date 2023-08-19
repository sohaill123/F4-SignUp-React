import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { setUser } from './actions/userActions';
import SignupForm from './Components/signup/Signup';
import ProfilePage from './Components/profile/Profile';
import Navbar from './Components/navbar/Navbar';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.accessToken) {
        dispatch(setUser(storedUser));
      }
    } catch (error) {
      console.error(error); // Log any parsing errors
    }
  }, [dispatch]);

  const PrivateRoute = ({ element }) => {
    return user && user.accessToken ? (
      element
    ) : (
      <Navigate to="/" replace={true} /> // Redirect to the login page if not authenticated
    );
  };

  const PublicRoute = ({ element, restricted }) => {
    return user && user.accessToken && restricted ? (
      <Navigate to="/profile" replace={true} /> // Redirect to the profile page if authenticated and trying to access public route
    ) : (

      element
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* {user ? <PrivateRoute element={<ProfilePage />} /> : <PublicRoute element={<SignupForm />} />} */}
        <Route
          path="/"
          element={<PublicRoute element={<SignupForm />} restricted={false} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute element={<ProfilePage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
