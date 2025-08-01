"use client";
import React from "react";

const ClickDate = ({ children, from }) => {
  return (
    <div onClick={() => console.log(`${from} - ${new Date()}`)}>{children}</div>
  );
};

export default ClickDate;
