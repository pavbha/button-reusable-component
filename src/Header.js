import React from "react";
import Button from "./Button";
import "./styles.css";

const Header = () => {
  const buttonName = "HeaderButton";
  return (
    <div className="header">
      <h1>Header Section</h1>
      <Button buttonName={buttonName} />
    </div>
  );
};
export default Header;
