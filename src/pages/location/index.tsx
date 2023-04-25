import Banner from "@/components/banner";
import CustomImage from "@/components/customImage";

export default function Location() {
  return (
    <div>
      <Banner height={"h-[350px] w-auto"}>
        <CustomImage
          opacity="opacity-25"
          imgUrl={
            "https://lh3.googleusercontent.com/p/AF1QipP_p8NZtnDTWzq9gpfsXQsQ9MB1V2MEJhAwUwA7=s1360-w1360-h1020"
          }
        />
        <div className="font-pismo text-[100px] absolute top-[190px] w-full flex items-center justify-center px-[75px]">
          Location
        </div>
      </Banner>
      <div className="h-[300px] bg-red-300">
        <div>address Alhambra, CA</div>
        <div>google map img</div>
        {/* bring the layout from dtodo natural  page. */}
      </div>
    </div>
  );
}
