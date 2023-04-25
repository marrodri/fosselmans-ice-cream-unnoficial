import CustomImage from "@/components/customImage";

export default function FoodItem({
  name,
  imgUrl,
}: {
  name: string;
  imgUrl: string;
}) {
  return (
    <div className="">
      <div className="h-[200px] w-[320px] bg-gray-500">
        <CustomImage alt="food item" imgUrl={imgUrl} />
      </div>
      <div className="flex justify-center">{name}</div>
    </div>
  );
}
