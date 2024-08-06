import { getItems } from "@/app/service/items";
import { NextResponse } from "next/server";
// import { getItems, Item } from "@/app/service/items";

export async function GET(request: Request) {
  const items = await getItems();
  return NextResponse.json({ items });
}
