"use client";
import { useRouter } from "next/navigation";

export default function GoItemsBtn() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/items");
      }}
    >
      제품 페이지로 이동
    </button>
  );
}
