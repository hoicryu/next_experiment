import path from "path";
import { promises as fs } from "fs";

export type Item = {
  id: string;
  title: string;
  price: number;
};

export async function getItems(): Promise<Item[]> {
  const filePath = path.join(process.cwd(), "data", "items.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getItem(id: string) {
  const itmes = await getItems();
  const item = itmes.find((item) => item.id === id);
  console.log(item);
  return item;
}
