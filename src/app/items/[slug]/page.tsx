import { getItem, getItems } from "@/app/service/items";
import { notFound } from "next/navigation";
import Image from "next/image";
import cabbageImg from "/public/images/Cabbage_kimchi.jpg";

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
  return (
    <>
      <div>{item.title}의 상세정보!!!</div>
      <Image src={cabbageImg} alt="kimchi" priority />
      <Image
        src={"https://images.unsplash.com/photo-1441986300917-64674bd600d8"}
        width={300}
        height={100}
        alt="img"
      />
    </>
  );
}

export async function generateStaticParams() {
  const items = await getItems();
  return items.map((item) => ({
    slug: item.id,
  }));
}
