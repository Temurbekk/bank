import React from "react";

const Profile = (props) => {
  return (
    <>
      <div>{props.userName}'s Profile</div>
      <div>Account Number: {props.accountNum}</div>
    </>
  );
};

export default Profile;
