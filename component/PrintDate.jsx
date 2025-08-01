"use client";
const PrintDate = ({ from }) => {
  console.log(`${from}-end - ${new Date().getTime().toString().slice(-5)}`);
  return null;
};

export default PrintDate;
