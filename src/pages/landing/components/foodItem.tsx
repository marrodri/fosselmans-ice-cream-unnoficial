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
      <div className="w-[320px] h-[200px] bg-gray-500">

        <CustomImage imgUrl={imgUrl}/>
      </div>
      <div className="flex justify-center">{name}</div>
    </div>
  );
}
