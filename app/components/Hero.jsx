function Hero() {
  return (
    <div className="max-w-7xl w-full mx-auto p-4">
      <div className="flex justify-between gap-3 items-center sm:flex-row flex-col">
        <div className="flex-1 flex flex-col gap-4">
          <span className="uppercase text-primary text-sm font-medium">
            Luxury everywhere
          </span>
          <h1 className="lg:text-6xl md:text-5xl text-4xl">
            Explore, shop, <br /> <span className="text-primary">repeat</span>{" "}
            again.
          </h1>
          <p className="text-gray-500">
            <span className="text-primary">LuxeAttire</span>, your one-stop shop
            for all things luxe and stylish. Elevate your wardrobe with
            luxeAttire - where fashion meets convenience!
          </p>
          <span className="text-sm text-pretty">
            Shop the latest trends in luxury fashion with luxeAttire - your
            go-to destination for chic and timeless attire.
          </span>
          <button className="w-max bg-primary text-white px-4 py-2 rounded-xl capitalize">
            get started
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-1 items-center justify-center w-full">
          <div className="p-4 bg-teal-100/40 rounded-xl">
            <img
              src="https://tejasnasre.github.io/Cara-EcommerceWebsite/assets/products/n4.jpg"
              alt=""
              className="sm:w-[270px] w-full rounded-xl"
            />
            <span className="font-medium text-lg">
              Calvin Klein Classic Shirt
            </span>
            <p className="text-lg text-primary">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </p>
            <div className="flex justify-between">
              <span className="font-medium">$89.00</span>
              <button className="text-sm bg-primary text-white rounded-full px-2 py-1 uppercase">
                paid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
