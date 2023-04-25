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
        <div className="font-pismo  text-[100px] absolute top-[300px]  px-[75px]">
          <p className="pr-[250px] leading-[70px] text-sh transition-all  hover:pointer">
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
          <div className="w-[600px] bg-gray-100 h-[450px]">
            <CustomImage
              alt="fosselman old picture"
              imgUrl={
                "https://drive.google.com/uc?export=view&id=1jCQq2HahZK9ha2nBEl4rMi5xxvRf9Eut"
              }
            />
          </div>
        </div>
      </Banner>

      {/* Checkpoint, finish the previous part first. */}
      <Banner height={"h-auto w-auto py-[15px]"}>
        <div className="px-[80px] flex flex-col justify-center  items-start space-x-3">
          <div>
            <div className="text-black font-freestyle-script text-[48px]">
              Our Poular items
            </div>
          </div>
          <div className="w-full flex   space-x-[10px] justify-center  text-black text-[20px]">
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

          <div className=" w-full flex space-x-20 justify-center">
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
            <div className=" h-[400px] w-[400px] hover:translate-y-[-20px] transition-all">
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
