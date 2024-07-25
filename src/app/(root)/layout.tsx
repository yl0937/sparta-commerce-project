import Image from "next/image";
import Logo from "/public/assets/logo.png";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="relative flex h-[60px] justify-center items-center">
        <Link href={"/"}>
          <Image height={40} src={Logo} alt="logo"></Image>
        </Link>
        <div className="absolute flex gap-2 right-[40px] top-1/2 -translate-y-1/2">
          <Link href={"/cart"}>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              Cart
            </button>
          </Link>
          <Link href={"/sign-in"}>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              Sign In
            </button>
          </Link>
        </div>
      </header>
      {children}
    </>
  );
}
