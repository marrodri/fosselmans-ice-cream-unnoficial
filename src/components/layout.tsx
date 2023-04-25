import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Header />
      <div className="pt-[100px]">{children}</div>
      <Footer />
    </div>
  );
}
