import React from "react";

export default function Input({ type, value, onClick }) {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      style={{ width: "80px", height: "80px" }}
    ></input>
  );
}
