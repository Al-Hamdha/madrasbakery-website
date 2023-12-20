import Image from "next/image";

type MenuType = CategoryType[];

type CategoryType = {
  category: string;
  items: ItemType[];
};

type ItemType = {
  image: string;
  name: string;
  price: number;
};

const menu: MenuType = [
  {
    category: "bread",
    items: [
      { image: "wheatBread.jpg", name: "Wheat Bread", price: 5.0 },
      { image: "saltBread.jpg", name: "Salt Bread", price: 4.5 },
      { image: "sweetBread.jpg", name: "Sweet Bread", price: 4.5 },
      // { image: "fruitBread.jpg", name: "Fruit Bread", price: 888 },
      // { image: "sandwichBread.jpg", name: "Sandwich Bread", price: 888 },
    ],
  },
  {
    category: "bun",
    items: [
      { image: "plainBun.jpg", name: "Plain Bun", price: 1.0 },
      { image: "chocolateBun.jpg", name: "Chocolate Bun", price: 2.5 },
      { image: "coconutBun.jpg", name: "Coconut Bun", price: 6.0 },
      { image: "creamBun.jpg", name: "Cream Bun", price: 2.5 },
      { image: "jamBun.jpg", name: "Jam Bun", price: 2.5 },
      { image: "sweetPizzaBun.jpg", name: "Sweet Pizza Bun", price: 2.3 },
      // { image: "miniBun.jpg", name: "Mini Bun", price: 888 },
    ],
  },
  {
    category: "cake",
    items: [
      { image: "plainCake.jpg", name: "Plain Cake", price: 1.5 },
      { image: "bananaCake.jpg", name: "Banana Cake", price: 2.5 },
      { image: "gheeCake.jpg", name: "Ghee Cake", price: 2.5 },
      { image: "puddingCake.jpg", name: "Pudding Cake", price: 2.5 },
      // { image: "walnutCake.jpg", name: "Walnut Cake", price: 888 },
      // { image: "chocolateVanillaCake.jpg", name: "Chocolate Vanilla Cake", price: 888 },
      // { image: "carrotCake.jpg", name: "Carrot Cake", price: 888 },
    ],
  },
  {
    category: "puff",
    items: [
      { image: "chickenPuff.jpg", name: "Chicken Puff", price: 3.0 },
      { image: "eggPuff.jpg", name: "Egg Puff", price: 3.0 },
      { image: "vegPuff.jpg", name: "Veg Puff", price: 2.5 },
    ],
  },
];

const Menu = () => {
  return (
    <div className="p-8">
      <div className="container mx-auto space-y-16 p-0">
        {menu.map((c) => (
          <div key={c.category}>
            <div className="flex items-center mb-2">
              <h1 className="text-xl font-bold">
                {c.category.charAt(0).toUpperCase() + c.category.slice(1)}
              </h1>
              {/* <div className="w-full border-b border-gray-300" /> */}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.items.map((item) => (
                <div
                  key={item.name}
                  className="relative p-2 h-36 items-center flex gap-4 cursor-pointer group"
                >
                  {/*   hover:rounded-md hover:scale-[1.02] */}
                  <div className="absolute border rounded-xl border-gray-300 top-0 bottom-0 right-0 left-0 transition-all ease-[cubic-bezier(0.35, 0.12, 0.14, 1.42)] -z-50 group-hover:bg-slate-100 group-hover:rounded-lg group-hover:scale-[1.04]" />
                  <div className="relative w-32 h-full">
                    <Image
                      className="object-cover object-center rounded-lg"
                      fill
                      alt="hero"
                      src={`/images/menu/${c.category}/${item.image}`}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="font-semibold text-gray-800 line-clamp-2">
                      {item.name}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias sit assumenda facilis.
                    </p>
                    <div className="text-lg line-clamp-1">
                      <span className="text-xs">RM </span>
                      <span className="font-semibold text-gray-800">
                        {item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="grid gap-4 md:grid-cols-5">
              {c.items.map((i) => (
                <div
                  key={i.image}
                  className="bg-white rounded-2xl flex gap-4 p-4 md:flex-col transition-all duration-200 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative w-24 h-24 md:w-full md:h-36">
                    <Image
                      className="object-cover object-center rounded-xl"
                      fill
                      alt="hero"
                      src={`/images/menu/${c.category}/${i.image}`}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center gap-2">
                    <h2 className="font-semibold text-lg">{i.name}</h2>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className="font-bold text-xl">
                      <span className="text-xs">RM </span>
                      {i.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
