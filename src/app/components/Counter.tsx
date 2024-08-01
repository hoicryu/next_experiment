"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increaseByOne() {
    setCount(count + 1);
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={increaseByOne}>증가</button>
    </>
  );
}
