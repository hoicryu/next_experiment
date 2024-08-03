import { Metadata } from "next";
import Link from "next/link";
import { getItems } from "../service/items";

export const metadata: Metadata = {
  title: "아이템 페이지",
  description: "아이템들을 판매하는곳입니다.",
};

export default function ItemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = getItems();
  return (
    <div>
      <div className="my-4">
        <ul className="flex justify-around">
          {items.map((item, index) => (
            <li key={`item-${index}`}>
              <Link href={`/items/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
