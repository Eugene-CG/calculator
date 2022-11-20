import React from "react";
import { useState } from "react";
import Input from "./Input";

export default function App() {
  const [result, handleResult] = useState("");
  const styles = {
    backgroundColor: "black",
    margin: "100px auto",
    padding: "20px",
    width: "400px",
    height: "320px",
    display: "flex",
    flexWrap: "wrap",
    flexAlign: "center",
  };
  const btnsArray = [
    {
      value: "1",
      id: 2,
      type: "button",
    },
    {
      value: "2",
      id: 3,
      type: "button",
    },
    {
      value: "3",
      id: 4,
      type: "button",
    },
    {
      value: "4",
      id: 5,
      type: "button",
    },
    {
      value: "5",
      id: 6,
      type: "button",
    },
    {
      value: "6",
      id: 7,
      type: "button",
    },
    {
      value: "7",
      id: 8,
      type: "button",
    },
    {
      value: "8",
      id: 9,
      type: "button",
    },
    {
      value: "0",
      id: 10,
      type: "button",
    },
    {
      value: ".",
      id: 11,
      type: "button",
    },
    {
      value: "+",
      id: 12,
      type: "button",
    },
    {
      value: "-",
      id: 13,
      type: "button",
    },
    {
      value: "*",
      id: 14,
      type: "button",
    },
    {
      value: "/",
      id: 15,
      type: "button",
    },
  ];
  const handleOnClick = (event) => {
    const newResult = result + event.target.value;
    handleResult(newResult);
  };
  const handleOnChange = (event) => {
    const newResult = event.target.value;
    handleResult(newResult);
  };
  const getResult = () => {
    handleResult("Result later, sorry bro :D");
  };
  const inputs = btnsArray.map(({ value, id, type }) => {
    return (
      <Input
        key={id}
        type={type}
        value={value}
        onClick={handleOnClick}
      />
    );
  });
  return (
    <div style={styles}>
      <input
        type="text"
        placeholder="Result"
        value={result}
        onChange={handleOnChange}
        style={{ width: "100%" }}
      ></input>
      {inputs}
      <input
        type="button"
        value="="
        onClick={getResult}
        style={{ width: "80px", height: "80px" }}
      />
    </div>
  );
}
