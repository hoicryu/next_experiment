"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseByOne() {
    setCount(count + 1);
  }

  console.log("클라 콘솔");

  return (
    <>
      <span>{count}</span>
      <button onClick={increaseByOne}>증가</button>
    </>
  );
}
