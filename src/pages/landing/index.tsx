import Banner from "@/components/banner";
import CustomImage from "@/components/customImage";
import FoodItem from "./components/foodItem";

export default function Landing() {
  //todo build the landing page.
  return (
    <div className="text-white">
      <Banner height={"h-[600px] w-auto"}>
        <CustomImage
          alt="fosselman front building"
          opacity="opacity-50"
          imgUrl={
            "https://lh3.googleusercontent.com/p/AF1QipNt3izAj_N3QXWs_cZChGjsOmhoqPr1Tp_s7_1n=s1360-w1360-h1020"
          }
        />
        <div className="absolute  top-[300px] px-[75px] font-pismo  text-[100px]">
          <p className="text-sh hover:pointer pr-[250px] leading-[70px]  transition-all">
            celebrating 100 years of serving ice cream
          </p>
        </div>
      </Banner>
      <Banner height={"h-auto w-auto"} color={"bg-black"}>
        <div className="flex justify-center space-x-2 py-[20px]">
          <div className="w-[500px] ">
            <div className="font-freestyle-script  text-[64px]">About Us</div>
            <div className=" text-[24px]">
              For over 100 years, Fosselman’s has delighted taste buds with a
              simple but powerful philosophy – we hand-make the most delicious
              ice cream by using only the finest ingredients. Quality,
              consistency, and customer service are our guiding values. No
              preservatives are used in the development of our products
            </div>
          </div>
          <div className="h-[450px] w-[600px] bg-gray-100">
            <CustomImage
              alt="fosselman old picture"
              imgUrl={
                "https://scpr.brightspotcdn.com/dims4/default/5ea0a95/2147483647/strip/true/crop/730x565+0+0/resize/730x565!/quality/90/?url=http%3A%2F%2Fscpr-brightspot.s3.amazonaws.com%2Flegacy%2Fi%2F2bf13c0fef07d3110c2aa44b6f441e11%2F5d6581a2c92b3500089d02c5-eight.jpg"
              }
            />
          </div>
        </div>
      </Banner>

      {/* Checkpoint, finish the previous part first. */}
      <Banner height={"h-auto w-auto py-[15px]"}>
        <div className="flex flex-col items-start justify-center  space-x-3 px-[80px]">
          <div>
            <div className="font-freestyle-script text-[48px] text-black">
              Our Poular items
            </div>
          </div>
          <div className="flex w-full   justify-center space-x-[10px]  text-[20px] text-black">
            <FoodItem
              name={"Ice Cream"}
              imgUrl={
                "https://lh3.googleusercontent.com/p/AF1QipNW-A8DwIpMLiidftqeT0zrRYr1IXUMWdb_VrVw=s1360-w1360-h1020"
              }
            />
            <FoodItem
              name={"Banana Splits"}
              imgUrl={
                "https://lh3.googleusercontent.com/p/AF1QipPePBPjGflkXAfhmh0mpH74oHpDu2DsR3GwYy5I=s1360-w1360-h1020"
              }
            />
            <FoodItem
              name={"Ice Cream Sandwiches"}
              imgUrl={
                "https://d1ralsognjng37.cloudfront.net/426651a8-aa8e-4422-a4bd-8805c150df73.jpeg"
              }
            />
            <FoodItem
              name={"Signature Cakes"}
              imgUrl={
                "https://d1ralsognjng37.cloudfront.net/7a38a1de-cbe1-44af-8627-9f6d6344e90c.jpeg"
              }
            />
          </div>
        </div>
      </Banner>
      <Banner height={"h-[600px] "}>
        <CustomImage
          alt="fosselman wall image"
          classes="black-and-white"
          opacity="opacity-80"
          imgUrl={
            "https://lh3.googleusercontent.com/p/AF1QipNGCNSTZ__aBWFkqtHVBmtaxta_eZbuquTtGTHZ=s1360-w1360-h1020"
          }
        />
        <div className="absolute  top-[1565px] w-full px-[75px]">
          <div className="font-freestyle-script text-[62px] ">Recognitions</div>

          <div className=" flex w-full justify-center space-x-20">
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g29078-d344276-Reviews-Fosselman_s-Alhambra_California.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className=" h-[400px] w-[400px] rounded-3xl transition-all hover:translate-y-[-20px]">
                <CustomImage
                  alt="tripadvisor image"
                  classes="rounded-3xl"
                  imgUrl={"https://www.fosselmans.com/images/trip.jpg"}
                />
              </div>
            </a>
            <div className=" h-[400px] w-[400px] transition-all hover:translate-y-[-20px]">
              <a
                href="https://theculturetrip.com/north-america/usa/california/articles/the-10-best-restaurants-in-alhambra-ca-top-local-eats/?utm_source=emails&utm_medium=featured&utm_campaign=160115californiafood"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CustomImage
                  alt="culture trip image"
                  imgUrl={"https://www.fosselmans.com/images/nueva.png"}
                />
              </a>
            </div>
          </div>
        </div>
      </Banner>
    </div>
  );
}
