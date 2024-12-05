import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div>
      <h2>Profile</h2>
      {userInfo ? (
        <div>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default ProfilePage;
