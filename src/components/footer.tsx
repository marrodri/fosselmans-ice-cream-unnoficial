import { ReactElement } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
export default function Footer() {
  //todo build the footer, this is hardcoded.
  return (
    <div className="flex h-[50px] items-center justify-between bg-black px-[50px] ">
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
      <div className="flex h-[35px] w-[35px] items-center justify-center rounded-3xl bg-white">
        {child}
      </div>
    </a>
  );
}
