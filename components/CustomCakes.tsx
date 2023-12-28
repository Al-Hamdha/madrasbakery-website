import Image from "next/image";

const CustomCakes = () => {
  return (
    <div className="container flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
      <div className="flex-1 space-y-6">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl">
          Custom Cakes? <br /> We do that too!
        </h1>
        <p className="text-muted-foreground max-w-lg">
          Describe your dream cake and we make your dreams come true. Have a
          reference picture? Our extraordinarily talented chefs make
          pixel-perfect cakes!
        </p>
      </div>
      <div className="flex-1 flex gap-2 self-center w-full">
        <div className="relative h-96 w-full mt-8">
          <Image
            src="/images/custom-cakes/IceCreamCake.jpg"
            alt="Ice Cream Cake"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative h-96 w-full mt-16">
          <Image
            src="/images/custom-cakes/PinkVelvetCake.jpg"
            alt="Pink Velvet Cake"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative h-96 w-full">
          <Image
            src="/images/custom-cakes/VanillaCake.jpg"
            alt="Vanilla Cake"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default CustomCakes;
