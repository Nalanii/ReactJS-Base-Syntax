import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>Hi, {props.username}</p>
      <p>How are you?</p>
    </div>
  );
};

export default userOutput;
