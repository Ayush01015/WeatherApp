import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Please Login</h1>;
  return <div>
    <h3>Welcome {user.username}</h3>
  </div>;
};

export default Profile;
