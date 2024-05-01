type Props = {
  params: {
    slug: string;
  };
};

export default function ItemShow({ params }: Props) {
  return <div>아이템{params.slug}의 상세정보</div>;
}
