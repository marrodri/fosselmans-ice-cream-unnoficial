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
          <div className="w-[600px] bg-red-400 h-[450px]">image</div>
        </div>
      </Banner>

      {/* Checkpoint, finish the previous part first. */}
      <Banner height={"h-[600px] w-auto"}>
        <div className="flex justify-center space-x-4">
          <div>
            Our poular items
            <div>description about our items</div>
          </div>
          <div className="w-[500px] bg-blue-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-x-[10px] gap-y-[10px]">
              <div className="w-[250px] h-[200px] bg-green-500">Ice Cream</div>
              <div className="w-[250px] h-[200px] bg-green-500">
                Banana Splits
              </div>
              <div className="w-[250px] h-[200px] bg-green-500">
                Ice Cream Sandwiches
              </div>
              <div className="w-[250px] h-[200px] bg-green-500">
                Signature Cakes
              </div>
            </div>
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
