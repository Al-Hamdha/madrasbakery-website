import Image from "next/image";

const Hero = () => {
  return (
    <section className="body-font bg-gray-900">
      <div className="container flex px-16 py-24 flex-col items-center md:flex-row">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-3xl sm:text-5xl mb-4 font-bold text-white">
            Fresh bakery straight out of the oven.
          </h1>
          <p className="mb-8 leading-relaxed text-muted">
            Finest bakery delights, with fresh cow milk tea complimenting every
            bite of our savouries.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg font-medium">
              Visit Us
            </button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-3xl"
            width={720}
            height={600}
            priority
            alt="hero"
            src="/images/Hero.jpg"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
