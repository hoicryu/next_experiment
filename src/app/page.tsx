import Image from "next/image";
import os from "os";
import Counter from "./components/Counter";

export default function Home() {
  console.log("서버 콘솔 테스트");
  console.log(os.hostname());

  return (
    <>
      <h1>홈</h1>
      <Counter />
    </>
  );
}
