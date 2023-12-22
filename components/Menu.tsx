import Image from "next/image";

type MenuType = CategoryType[];

type CategoryType = {
  category: string;
  items: ItemType[];
};

type ItemType = {
  image: string;
  name: string;
  description: string;
  price: number;
};

const menu: MenuType = [
  {
    category: "bread",
    items: [
      {
        image: "wheatBread.jpg",
        name: "Wheat Bread",
        description:
          "Our wholesome wheat bread, a classic choice with a hearty, nutty flavor and a soft, pillowy texture.",
        price: 5.0,
      },
      {
        image: "saltBread.jpg",
        name: "Salt Bread",
        description:
          "Savor the simplicity of our Salt Bread, a classic blend of fluffy texture and a hint of savory goodness.",
        price: 4.5,
      },
      {
        image: "sweetBread.jpg",
        name: "Sweet Bread",
        description:
          "Savor the sweetness in every bite of our delightful sweet bread, a perfect blend of moistness and sugary goodness.",
        price: 4.5,
      },
      // { image: "fruitBread.jpg", name: "Fruit Bread", price: 888 },
      // { image: "sandwichBread.jpg", name: "Sandwich Bread", price: 888 },
    ],
  },
  {
    category: "bun",
    items: [
      {
        image: "plainBun.jpg",
        name: "Plain Bun",
        description:
          "Our plain bun, a simple and fluffy delight that serves as the perfect companion for any meal or snack.",
        price: 1.0,
      },
      {
        image: "chocolateBun.jpg",
        name: "Chocolate Bun",
        description:
          "Enjoy the delicious blend of rich cocoa and fluffy goodness in every bite of our chocolate bun.",
        price: 2.5,
      },
      {
        image: "coconutBun.jpg",
        name: "Coconut Bun",
        description:
          "Savor the tropical goodness of our coconut bun—a soft delight that brings a taste of paradise to each bite.",
        price: 6.0,
      },
      {
        image: "creamBun.jpg",
        name: "Cream Bun",
        description:
          "Soft and pillowy, our cream bun features a generous swirl of velvety cream for a simple and delightful treat.",
        price: 2.5,
      },
      {
        image: "jamBun.jpg",
        name: "Jam Bun",
        description:
          "A soft and fluffy bun filled with a burst of fruity sweetness, our jam bun is a delightful treat for your taste buds.",
        price: 2.5,
      },
      {
        image: "sweetPizzaBun.jpg",
        name: "Sweet Pizza Bun",
        description:
          "Our sweet pizza bun combines classic pizza flavors with a delightful sweetness, creating a unique and satisfying treat.",
        price: 2.3,
      },
      // { image: "miniBun.jpg", name: "Mini Bun", price: 888 },
    ],
  },
  {
    category: "cake",
    items: [
      {
        image: "plainCake.jpg",
        name: "Plain Cake",
        description:
          "Simplicity at its best, our plain cake is a timeless classic with a light, moist texture that speaks volumes in every bite.",
        price: 1.5,
      },
      {
        image: "bananaCake.jpg",
        name: "Banana Cake",
        description:
          "Enjoy the natural sweetness of ripe bananas in every bite of our moist and flavorful banana cake.",
        price: 2.5,
      },
      {
        image: "gheeCake.jpg",
        name: "Ghee Cake",
        description:
          "A moist, flavorful delight, our ghee-infused cake brings the rich essence of buttery goodness to each slice.",
        price: 2.5,
      },
      {
        image: "puddingCake.jpg",
        name: "Pudding Cake",
        description:
          "Delight in the goodness of our pudding cake, featuring a moist and flavorful cake that promises a delectable treat in every bite.",
        price: 2.5,
      },
      // { image: "walnutCake.jpg", name: "Walnut Cake", price: 888 },
      // { image: "chocolateVanillaCake.jpg", name: "Chocolate Vanilla Cake", price: 888 },
      // { image: "carrotCake.jpg", name: "Carrot Cake", price: 888 },
    ],
  },
  {
    category: "puff",
    items: [
      {
        image: "chickenPuff.jpg",
        name: "Chicken Puff",
        description:
          "A flaky pastry filled with seasoned chicken, our chicken puff is a savory delight for a satisfying snack.",
        price: 3.0,
      },
      {
        image: "eggPuff.jpg",
        name: "Egg Puff",
        description:
          "Flaky pastry embracing a flavorful blend of spiced eggs for a satisfying and tasty snack.",
        price: 3.0,
      },
      {
        image: "vegPuff.jpg",
        name: "Veg Puff",
        description:
          "A delightful combination of seasoned vegetables encased in a flaky pastry shell, our veg puff is a tasty and satisfying snack.",
        price: 2.5,
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="p-8">
      <div className="container mx-auto space-y-4 p-0">
        <h1 className="font-display text-3xl md:text-5xl">Our Menu</h1>
        {menu.map((c) => (
          <div key={c.category}>
            <div className="flex items-center mb-2">
              <h2 className="text-xs text-muted-foreground font-semibold">
                {c.category.charAt(0).toUpperCase() + c.category.slice(1)}
              </h2>
              <div className="w-full border-b border-muted ml-2" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.items.map((item) => (
                <div
                  key={item.name}
                  className="relative p-2 h-36 items-center flex gap-4 cursor-pointer group"
                >
                  <div className="absolute border rounded-xl border-muted top-0 bottom-0 right-0 left-0 transition-all ease-[cubic-bezier(0.35, 0.12, 0.14, 1.42)] -z-50 group-hover:bg-primary/10 group-hover:rounded-lg group-hover:scale-[1.04]" />
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
                    <h2 className="font-semibold line-clamp-2">{item.name}</h2>
                    <p className="text-xs text-muted-foreground line-clamp-3">
                      {item.description}
                    </p>
                    <div className="text-lg line-clamp-1">
                      <span className="text-xs">RM </span>
                      <span className="font-semibold">
                        {item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
