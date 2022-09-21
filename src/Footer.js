import React from "react";
import Button from "./Button";
import "./styles.css";

const Footer = () => {
  const buttonName = "FooterButton";
  return (
    <div className="footer">
      <h1>Footer Section</h1>
      <Button buttonName={buttonName} />
    </div>
  );
};
export default Footer;
