import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rdb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hex}`;

  const handleCopy = () => {
    setAlert(!alert);
    navigator.clipboard.writeText(hexValue);
    setTimeout(() => {
      setAlert(false);
      clearTimeout();
    }, 3000);
  };
  // another way of controling the alert state

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setAlert(false);
  //     console.log("hi");
  //   }, 2000);
  //   return () => clearTimeout(timeout);
  // }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rdb})` }}
      onClick={handleCopy}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard!</p>}
    </article>
  );
};

export default SingleColor;
