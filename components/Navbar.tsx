import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-50 border border-muted bg-black/80 backdrop-blur-lg backdrop-saturate-150">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Logo />
          <div className="font-display text-xl leading-none">
            Madras <br /> Bakery
          </div>
        </Link>
        <Button variant={"outline"}>Visit Us</Button>
      </div>
    </div>
  );
};
export default Navbar;
