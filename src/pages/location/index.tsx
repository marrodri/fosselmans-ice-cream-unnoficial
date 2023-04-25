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
      <div className="h-[500px] text-black bg-white pt-[25px]  justify-center flex space-x-5">
        <div>
          <div className="text-[50px] font-bold">Alhambra, CA</div>
          <div className="text-[20px]">1824 W Main St, Alhambra, CA 91801</div>
          <div className="text-[20px]">(323)-688-9012</div>
          <div className="text-[24px] ">
            Schedule:
            <ul className="list-disc text-[20px]">
              <li>
                Monday thru friday
                <ul>
                  <li>7:30 am - 8 pm</li>
                </ul>
              </li>
              <li>
                Saturdays
                <ul>
                  <li>8:00 am - 8 pm</li>
                </ul>
              </li>
              <li>
                Sundays
                <ul>
                  <li>8:00 am - 6:30 pm</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[400px] w-[500px] bg-green-200">
          <CustomImage
            imgUrl={
              "https://drive.google.com/file/d/1Zg-qXqFL7xgry8LD-Hbb9cwXCrCyyqZO/view"
            }
          />
        </div>
      </div>
    </div>
  );
}

