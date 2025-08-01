"use client";
import React from "react";

const ClickDate = ({ children, from }) => {
  return (
    <div onClick={() => console.log(`${from} - ${new Date().getTime().toString().slice(-5)}`)}>{children}</div>
  );
};

export default ClickDate;
