import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 border border-muted bg-black/60 backdrop-blur-2xl">
      <div className="container py-4 flex justify-between">
        <Link href="/" className="flex gap-2 items-center md:gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
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
      </div>
    </div>
  );
};
export default Navbar;
