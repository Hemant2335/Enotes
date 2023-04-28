import React from "react";
const Alert = (props) => {
  return (
    <div>
      <div className={`alert alert-${props.type} shadow-lg`}>
          <span>{props.type}{props.msg}</span>
      </div>
    </div>
  );
};
export default Alert;
