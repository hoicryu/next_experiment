export function getItems() {
  return [
    { id: 1, title: "식품" },
    { id: 2, title: "생필품" },
    { id: 3, title: "의류" },
    { id: 4, title: "건강식품" },
  ];
}

export function getItem(id: string) {
  const itmes = getItems();
  const item = itmes.find((item) => item.id === Number(id));
  return item;
}
