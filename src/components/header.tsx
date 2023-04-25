import { useRouter } from "next/router";
import CustomImage from "./customImage";
export default function Header() {
  // todo build a header
  return (
    <div className="bg-white px-[75px] h-[100px] w-full z-10 fixed flex items-center justify-between  text-black">
      <a href="">
        <div className="bg-red h-[75px]  w-[120px]">
          <CustomImage imgUrl="https://www.fosselmans.com/2015.jpg" />
        </div>
      </a>

      <div className="flex space-x-5">
        <a href="">
          <div className="hover:font-bold hover:cursor-pointer">Menu</div>
        </a>
        <a href="">
          <div className="hover:font-bold hover:cursor-pointer">
            Order Online
          </div>
        </a>
      </div>
    </div>
  );
}

function HeaderButton({ text, route }: { text: string; route: string }) {
  const router = useRouter();
  return (
    <a
      href=""
      onClick={() => {
        router.push(route);
      }}
    >
      <div className="hover:cursor-pointer hover:font-bold">{text}</div>
    </a>
  );
}
