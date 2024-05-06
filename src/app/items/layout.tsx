import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "아이템 페이지",
  description: "아이템들을 판매하는곳입니다.",
};

export default function ItemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = [
    { id: 1, title: "식품" },
    { id: 2, title: "생필품" },
    { id: 3, title: "의류" },
  ];
  return (
    <div>
      <div className="my-4">
        <ul className="flex justify-around">
          {categories.map((category, index) => (
            <li key={`category-${index}`}>
              <Link href={`/items/${category.id}`}>{category.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
