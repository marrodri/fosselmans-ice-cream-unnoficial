export default function FoodItem({
  name,
  imgUrl,
}: {
  name: string;
  imgUrl: string;
}) {
  return (
    <div className="">
      <div className="w-[320px] h-[200px] bg-gray-500">url</div>
      <div className="flex justify-center">{name}</div>
    </div>
  );
}
