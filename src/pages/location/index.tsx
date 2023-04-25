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
        <div className="font-pismo text-[100px] text-white text-sh absolute top-[190px] w-full flex items-center justify-center px-[75px]">
          Location
        </div>
      </Banner>
      <div className="h-[500px] text-black bg-white pt-[25px]  justify-center flex space-x-5">
        <div>
          <div className="text-[50px] font-bold">Alhambra, CA</div>
          <div className="text-[20px]">1824 W Main St, Alhambra, CA 91801</div>
          <div className="text-[20px]">
            <span className="font-bold">Phone: </span> (626) 282-6533
          </div>
          <div className="text-[24px] ">
            Schedule:
            <ul className="list-disc text-[20px]">
              <li>
                Monday thru Saturday
                <ul>
                  <li>10:00 AM - 10:00 PM</li>
                </ul>
              </li>
              <li>
                Sundays
                <ul>
                  <li>11:00 AM - 10:00 PM</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.google.com/maps/place/Fosselman's+Ice+Cream+Co./@34.091311,-118.1438884,15z/data=!4m2!3m1!1s0x0:0x6b7e703dba4dd8b8?sa=X&ved=2ahUKEwibp6aGg8T-AhVURjABHWcJAl0Q_BJ6BQiDARAI"
        >
          <div className="h-[350px] w-[500px] bg-gray-100 shadow-xl">
            <CustomImage
              imgUrl={
                "https://drive.google.com/uc?export=view&id=1Zg-qXqFL7xgry8LD-Hbb9cwXCrCyyqZO"
              }
            />
          </div>
        </a>
      </div>
    </div>
  );
}
