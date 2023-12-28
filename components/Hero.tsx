"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "react-scroll";
import { buttonVariants } from "./ui/Button";

const Hero = () => {
  return (
    <section className="container flex flex-col gap-6 justify-between md:items-center md:flex-row md:gap-12">
      <div className="space-y-4 flex-1 md:space-y-8 text-center md:text-left py-12">
        <h1 className="text-primary font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
          Fresh bakery <br /> straight out <br /> of the oven.
        </h1>
        <p className="leading-relaxed text-muted-foreground text-sm max-w-sm mx-auto md:mx-0">
          Unparalleled bakery delights at our haven. Each bite of our exquisite{" "}
          {/* <br /> */}
          savories is perfected by the delightful pairing with fresh cow milk{" "}
          {/* <br /> */}
          tea, creating a symphony of flavors.
        </p>
        <Link
          className={cn(buttonVariants({ size: "lg" }), "cursor-pointer")}
          to="visitUs"
          smooth={true}
          offset={-80}
          duration={500}
        >
          Visit Us
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 grid-rows-[repeat(5,_minmax(100px,_1fr))] md:grid-rows-[repeat(5,_minmax(150px,_1fr))] md:flex-1">
        <div
          className={cn("relative rounded-2xl overflow-hidden", "col-span-2")}
        >
          <Image
            sizes="(max-width: 768px) 90vw, 45vw"
            src="/images/hero/tea.jpg"
            alt="Tea"
            className="object-cover object-[50%_70%]"
            fill
          />
        </div>
        <div className={cn("relative rounded-3xl overflow-hidden", "")}>
          <Image
            sizes="(max-width: 768px) 90vw, 45vw"
            src="/images/hero/cake1.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div
          className={cn("relative rounded-3xl overflow-hidden", "row-span-2")}
        >
          <Image
            sizes="(max-width: 768px) 90vw, 45vw"
            src="/images/hero/puffs.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div
          className={cn("relative rounded-3xl overflow-hidden", "row-span-2")}
        >
          <Image
            sizes="(max-width: 768px) 90vw, 45vw"
            src="/images/hero/samosa.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div
          className={cn("relative rounded-3xl overflow-hidden", "row-span-2")}
        >
          <Image
            sizes="(max-width: 768px) 90vw, 45vw"
            src="/images/hero/buns.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div className={cn("relative rounded-3xl overflow-hidden", "")}>
          <Image
            sizes="(max-width: 768px) 90vw, 45vw"
            src="/images/hero/cake2.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
