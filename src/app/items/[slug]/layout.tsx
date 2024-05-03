export default function ItemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = ["식품", "생필품", "의류", "가전"];
  return (
    <div>
      <div className="flex justify-around">
        {categories.map((category: string) => (
          <div>{category}</div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
