import { useState } from "react";
import "./UserProfile.css";

export const UserProfile = () => {
  const [user, setUser] = useState({
    userName: "Ankit",
    collName: "IEM",
    emailID: "ankit@gmail.com",
    score: 9.98,
    address: {
      city: "Kolkata",
      pinCode: 700102,
      country: "India",
    },
  });

  const updateNameScore = () => {
    setUser({
      ...user,
      score: 9.99,
      userName: "Ankit Sharma",
      address: {
        ...user.address,
        pinCode: 700103,
      },
    });
  };

  return (
    <><div class="user-profile">
      <h2>This is User Profile</h2>

      <p>
        {user.userName} is from {user.collName} and scored {user.score}
      </p>

      <h3>Address Details</h3>

      <p>City: {user.address.city}</p>
      <p>Pin Code: {user.address.pinCode}</p>
      <p>Country: {user.address.country}</p>

      <button onClick={updateNameScore}>
        Update Name & Score
      </button></div>
    </>
  );
};