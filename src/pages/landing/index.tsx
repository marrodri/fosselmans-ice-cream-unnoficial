import Banner from "@/components/banner";
import CustomImage from "@/components/customImage";
import FoodItem from "./components/foodItem";

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
      <Banner height={"h-auto w-auto"} color={"bg-black"}>
        <div className="flex justify-center space-x-2 py-[20px]">
          <div className="w-[500px] ">
            <div className="font-freestyle-script text-white text-[64px]">
              About Us
            </div>
            <div className="text-white text-[24px]">
              For over 100 years, Fosselman’s has delighted taste buds with a
              simple but powerful philosophy – we hand-make the most delicious
              ice cream by using only the finest ingredients. Quality,
              consistency, and customer service are our guiding values. No
              preservatives are used in the development of our products
            </div>
          </div>
          <div className="w-[600px] bg-gray-100 h-[450px]">
            <CustomImage
              imgUrl={
                "https://drive.google.com/uc?export=view&id=1jCQq2HahZK9ha2nBEl4rMi5xxvRf9Eut"
              }
            />
          </div>
        </div>
      </Banner>

      {/* Checkpoint, finish the previous part first. */}
      <Banner height={"h-[600px] w-auto"}>
        <div className="px-[80px] flex flex-col justify-center  items-start space-x-4">
          <div>
            <div className="font-freestyle-script text-[48px]">
              Our Poular items
            </div>
            <div>description about our items</div>
          </div>
          <div className="w-full flex   space-x-[10px] justify-center bg-blue-300">
            {/* <div className=" "> */}
              <FoodItem name={"Ice Cream"} imgUrl={""} />
              <FoodItem name={"Banana Splits"} imgUrl={""} />
              <FoodItem name={"Ice Cream Sandwiches"} imgUrl={""} />
              <FoodItem name={"Signature Cakes"} imgUrl={""} />
            {/* </div> */}
          </div>
        </div>
      </Banner>
      <Banner height={"h-[600px] w-auto"}>
        <>
          Recognitions, trip advisor, culture trip. Fosselman wall(black and
          white)
        </>
      </Banner>
    </div>
  );
}
