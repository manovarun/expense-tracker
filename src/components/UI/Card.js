import React from "react";
import "./Card.scss";

const Card = ({ children, className }) => {
  const classes = className;
  return <div className={`card ${classes}`}>{children}</div>;
};

export default Card;
