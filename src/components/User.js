import { isEmpty } from "lodash";
import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector(state => state.userReducer)
  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user[0]) && user[0].pseudo}</h3>
        <img src="./icons/image.jpeg" alt="" />
        <p>Age : 35 ans</p>
        <p>Like{!isEmpty(user[0]) && user[0].likes > 1 ? 's' :null} : {!isEmpty(user[0]) && user[0].likes}</p>
      </div>
    </div>
  );
};

export default User;