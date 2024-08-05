"use client";
import { useEffect, useState } from "react";

export default function Article() {
  const [text, setText] = useState("데이터 로딩중...");
  function getText() {
    const res = fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }

  useEffect(() => {
    getText();
  }, []);

  return <span>{text}</span>;
}
