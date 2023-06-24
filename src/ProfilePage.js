import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './actions';


const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          // Update user data with additional information
          dispatch(login({ ...user, ...data }));
        })
        .catch((error) => {
          // Handle network or server error
        });
    }
  }, [user, dispatch]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user information */}
    </div>
  );
};

export default ProfilePage;
