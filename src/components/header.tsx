import { useRouter } from "next/router";
import CustomImage from "./customImage";
import Link from "next/link";
export default function Header() {
  const router = useRouter();
  // todo build a header
  return (
    <div className="fixed z-10 flex h-[100px] w-full items-center justify-between bg-white px-[75px]  text-black">
      <Link href="/">
        <div className="bg-red h-[75px]  w-[120px]">
          <CustomImage
            alt="logo"
            imgUrl="https://www.fosselmans.com/2015.jpg"
          />
        </div>
      </Link>

      <div className="flex space-x-5">
        <HeaderButton text="Location" route={"/location"} />
        <RedirectHeaderButton
          text="Order Online"
          url="https://www.ubereats.com/store/fosselmans-ice-cream/toHNbceURraRdUWyktBFCQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkZvc3NlbG1hbidzJTIwSWNlJTIwQ3JlYW0lMjBDbyUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjE0ZTBmN2Q2LTkyNWYtMTg2Ni1hZDkzLWIzMDE1MGE2MDFlZiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzQuMDkxMjgyNSUyQyUyMmxvbmdpdHVkZSUyMiUzQS0xMTguMTQzODczOCU3RA%3D%3D&sc=SEARCH_SUGGESTION"
        />
      </div>
    </div>
  );
}

function RedirectHeaderButton({ text, url }: { text: string; url: string }) {
  const router = useRouter();
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <div className="hover:cursor-pointer hover:font-bold">{text}</div>
    </a>
  );
}

function HeaderButton({ text, route }: { text: string; route: string }) {
  const router = useRouter();
  return (
    <Link href={route}>
      <div className="hover:cursor-pointer hover:font-bold">{text}</div>
    </Link>
  );
}
