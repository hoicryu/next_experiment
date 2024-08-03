import { getItem, getItems } from "@/app/service/items";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

type Item = {
  id: number;
  title: string;
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `테스트 제품 제품 이름`,
    description: `제품 이름: ${slug}`,
  };
}

export default function ItemShow({ params: { slug } }: Props) {
  // 서버파일에 있는 데이터 중 해당 제품의 정보를 찾아서 렌더
  const item = getItem(slug);
  if (!item) notFound();
  return <div>{item.title}의 상세정보!!!</div>;
}

export async function generateStaticParams() {
  // 제품의 페이지들을 미리 만들어 둘 수 있게 해줄 것 (SSG)
  const items = getItems();
  return items.map((item: Item) => ({
    slug: item.title,
  }));
}
