import { getItem, getItems } from "@/app/service/items";
import { notFound } from "next/navigation";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `테스트 제품 제품 이름`,
    description: `제품 이름: ${slug}`,
  };
}

export default async function ItemShow({ params: { slug } }: Props) {
  // 서버파일에 있는 데이터 중 해당 제품의 정보를 찾아서 렌더
  const item = await getItem(slug);
  if (!item) notFound();
  return <div>{item.title}의 상세정보!!!</div>;
}

export async function generateStaticParams() {
  const items = await getItems();
  return items.map((item) => ({
    slug: item.id,
  }));
}
