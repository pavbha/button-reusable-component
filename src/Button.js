import React from "react";
import "./styles.css";

const Button = (props) => {
  return (
    <div className="button" onClick={() => console.log("props", props)}>
      {props.buttonName}
    </div>
  );
};
export default Button;
