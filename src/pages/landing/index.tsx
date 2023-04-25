import Banner from "@/components/banner";
import CustomImage from "@/components/customImage";

export default function Landing() {
  //todo build the landing page.
  return (
    <div className="text-black">
      <Banner height={"h-[600px] w-auto"}>
        <CustomImage
          opacity="opacity-50"
          imgUrl={
            "https://lh3.googleusercontent.com/p/AF1QipNt3izAj_N3QXWs_cZChGjsOmhoqPr1Tp_s7_1n=s1360-w1360-h1020"
          }
        />
        <div className="font-pismo text-white text-[100px] absolute top-[300px] shadow-md px-[75px]">
          celebrating 100 years of serving ice cream
        </div>
      </Banner>
      <Banner height={"h-[600px] w-auto"}>
        <>
          Hi, about us(use black and white image one side, other side descri)
          <div>
            For over 100 years, Fosselman’s has delighted taste buds with a
            simple but powerful philosophy – we hand-make the most delicious ice
            cream by using only the finest ingredients. Quality, consistency,
            and customer service are our guiding values. No preservatives are
            used in the development of our products
          </div>
        </>
      </Banner>
      <Banner height={"h-[600px] w-auto"}>
        <>
          here we serve Scoop of Ice Cream, Banana Splits, Ice Cream Sandwiches,
          Signature Cakes
        </>
      </Banner>
      <Banner height={"h-[600px] w-auto"}>
        <>
          Recognitions, trip advisor, culture trip. Fosselman wall(black and
          white)
        </>
      </Banner>
      <Banner height={"h-[600px] w-auto"}>
        <>Location: inside building, address</>
      </Banner>
    </div>
  );
}
