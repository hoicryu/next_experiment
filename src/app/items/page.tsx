import { Suspense } from "react";
import Article from "../components/Article";

export default async function Item() {
  return (
    <div>
      아이템 페이지
      <Suspense fallback={<div>Loading....</div>}>
        <Article />
      </Suspense>
    </div>
  );
}
