import { useRouter } from "next/router";
export default function Header() {
  // todo build a header
  return (
    <div className="bg-white px-[50px] h-[200px] flex  text-black">
      <div>fosselman icon</div>

      <div>
        <div>Menu</div>
        <div>Order Online</div>
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
