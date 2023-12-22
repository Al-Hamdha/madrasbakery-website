import { cn } from "@/lib/utils";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container flex flex-col gap-6 justify-between md:items-center md:flex-row md:gap-12">
      <div className="space-y-4 flex-1 md:space-y-8 text-center md:text-left py-12">
        <h1 className="text-primary font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">
          Fresh bakery <br /> straight out <br /> of the oven.
        </h1>
        <p className="leading-relaxed text-muted-foreground text-sm">
          Unparalleled bakery delights at our haven. Each bite of our exquisite{" "}
          {/* <br /> */}
          savories is perfected by the delightful pairing with fresh cow milk{" "}
          {/* <br /> */}
          tea, creating a symphony of flavors.
        </p>
        <button className="bg-amber-500 px-6 py-2 rounded-xl text-lg">
          Visit Us
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 grid-rows-[repeat(5,_minmax(100px,_1fr))] md:grid-rows-[repeat(5,_minmax(180px,_1fr))] md:flex-1">
        <div
          className={cn("relative rounded-2xl overflow-hidden", "col-span-2")}
        >
          <Image
            src="/images/hero/tea.jpg"
            alt="Tea"
            className="object-cover object-[50%_70%]"
            fill
          />
        </div>
        <div className={cn("relative rounded-3xl overflow-hidden", "")}>
          <Image
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
            src="/images/hero/buns.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div className={cn("relative rounded-3xl overflow-hidden", "")}>
          <Image
            src="/images/hero/cake2.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
      </div>
      {/* <div className="p-4 grid gap-2 md:gap-4 grid-cols-5 grid-rows-[120px_100px_120px] md:grid-rows-[250px_230px_300px] absolute right-0 left-0 md:top-0 bottom-0">
        <div
          className={cn(
            "relative rounded-2xl overflow-hidden",
            "col-start-4 col-span-2"
          )}
        >
          <Image
            src="/images/hero/tea.jpg"
            alt="Tea"
            className="object-cover object-[50%_70%]"
            fill
          />
        </div>
        <div
          className={cn(
            "relative rounded-2xl overflow-hidden",
            "col-start-3 col-span-2"
          )}
        >
          <Image
            src="/images/hero/cake1.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div className={cn("relative rounded-2xl overflow-hidden", "")}>
          <Image
            src="/images/hero/puffs.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div className={cn("relative rounded-2xl overflow-hidden", "")}>
          <Image
            src="/images/hero/samosa.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div
          className={cn("relative rounded-2xl overflow-hidden", "col-span-2")}
        >
          <Image
            src="/images/hero/buns.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
        <div
          className={cn("relative rounded-2xl overflow-hidden", "col-span-2")}
        >
          <Image
            src="/images/hero/cake2.jpg"
            alt="Tea"
            className="object-cover"
            fill
          />
        </div>
      </div> */}
    </section>
  );
};
export default Hero;
