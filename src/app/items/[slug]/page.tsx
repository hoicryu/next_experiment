import { getItem, getItems } from "@/app/service/items";
import { notFound } from "next/navigation";
import Image from "next/image";
import cabbageImg from "/public/images/Cabbage_kimchi.jpg";
import GoItemsBtn from "@/app/components/GoItemsBtn";

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
      <GoItemsBtn />
    </>
  );
}

export async function generateStaticParams() {
  const items = await getItems();
  return items.map((item) => ({
    slug: item.id,
  }));
}
