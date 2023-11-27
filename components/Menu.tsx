import Image from "next/image";

const Menu = () => {
  return (
    <div className=" bg-stone-100 p-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-4 space-y-4">
            <div className="relative h-72">
              <Image
                className="object-cover object-center rounded-xl"
                fill
                alt="hero"
                src="/images/Hero.jpg"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <h2 className="font-bold text-2xl">Food item {i}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis, cupiditate animi quia recusandae libero reprehenderit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
