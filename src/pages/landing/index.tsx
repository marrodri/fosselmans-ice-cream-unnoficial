import Banner from "@/components/banner";
import CustomImage from "@/components/customImage";

export default function Landing() {
  //todo build the landing page.
  return (
    <div>
      <Banner height={"h-[600px] w-auto"}>
        <CustomImage
          opacity="opacity-50"
          imgUrl={
            "https://lh3.googleusercontent.com/p/AF1QipNt3izAj_N3QXWs_cZChGjsOmhoqPr1Tp_s7_1n=s1360-w1360-h1020"
          }
        />
        <div className="font-pismo text-[100px] absolute top-[300px] shadow-md px-[50px]">
          celebrating 100 years of serving ice cream
        </div>
      </Banner>
      <div className="h-[300px] bg-sky-300">Hi, about us</div>
      <div className="h-[300px] bg-red-300">Recognitions</div>
      <div className="h-[300px] bg-red-300">Pop Menu Items</div>
    </div>
  );
}
