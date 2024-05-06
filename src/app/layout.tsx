import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "넥스트 실험소",
  description: "Next.js 14버전 테스트용입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <header className="px-10 py-5 flex justify-between bg-black text-white">
          <h1>테스트용 앱</h1>
          <nav>
            <Link href="/items" className="mr-4">
              Item
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
