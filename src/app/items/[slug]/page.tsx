import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ItemShow({ params }: Props) {
  const itemId = params.slug;
  if (itemId == "4") {
    notFound();
  }
  return <div>아이템{itemId}의 상세정보</div>;
}

export async function generateStaticParams() {
  const items = ["1", "2", "3"];
  return items.map((item) => ({
    slug: item,
  }));
}
