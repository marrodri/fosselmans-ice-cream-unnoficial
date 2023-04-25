import { ReactElement } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
export default function Footer() {
  //todo build the footer, this is hardcoded.
  return (
    <div className="bg-black px-[50px] h-[50px] flex items-center justify-between ">
      <div className="flex space-x-1">
        <FooterButton
          link={"https://www.facebook.com/FosselmansIceCream/"}
          child={<FaFacebookF className="h-[20px] w-[20px] text-yellow-950" />}
        />
        <FooterButton
          link={"https://www.instagram.com/fosselmansicecreamco/?hl=en"}
          child={<FaInstagram className="h-[20px] w-[20px] text-yellow-950" />}
        />
      </div>
      <div className="text-white">
        Unnoficial Website Fosselmans Ice Cream. 2023
      </div>
    </div>
  );
}

function FooterButton({
  child,
  link,
}: {
  child?: ReactElement | ReactElement[];
  link: string;
}) {
  return (
    <a
      className="rounded-3xl"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="bg-white h-[35px] w-[35px] flex items-center justify-center rounded-3xl">
        {child}
      </div>
    </a>
  );
}
