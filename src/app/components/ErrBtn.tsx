"use client";

export default function ErrBtn() {
  function createErr() {
    throw new Error();
  }
  return <div onClick={createErr}>에러 발생</div>;
}
