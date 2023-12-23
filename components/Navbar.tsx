"use client";
import NextLink from "next/link";
import { buttonVariants } from "./ui/Button";
import Logo from "./Logo";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full z-50 border-b border-muted bg-black/80 backdrop-blur-lg backdrop-saturate-150">
      <div className="container py-4 flex justify-between items-center">
        <NextLink href="/" className="flex gap-2 items-center">
          <Logo />
          <div className="font-display text-xl leading-none">
            Madras <br /> Bakery
          </div>
        </NextLink>
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "cursor-pointer"
          )}
          to="visitUs"
          smooth={true}
          offset={-80}
          duration={500}
        >
          Visit Us
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
