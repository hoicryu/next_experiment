import { getItems, Item } from "@/app/service/items";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  if (req.method === "GET") {
    const items = await getItems();
    return res.status(200).json(items);
  }
}
