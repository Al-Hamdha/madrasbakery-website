import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-50 border border-muted bg-black/80 backdrop-blur-lg backdrop-saturate-150">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center md:gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              sizes="256px"
              className="object-cover origin-[30px_center] scale-[1.5]"
              src="/images/logo.jpg"
              alt="Madras Bakery Logo"
              fill
            />
          </div>
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
