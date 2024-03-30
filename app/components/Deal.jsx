function Deal() {
  return (
    <div className="max-w-5xl mx-auto w-full p-4 flex justify-between gap-4 items-center sm:flex-row flex-col">
      <div className="flex-1">
        <img
          src="https://tejasnasre.github.io/Cara-EcommerceWebsite/assets/products/f6.jpg"
          alt=""
          className="md:h-[400px] h-[350px] object-cover rounded-2xl"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="uppercase text-gray-500">Hot deals / offers</h3>
        <span className="text-primary text-lg">
          &#9733;&#9733;&#9733;&#9733;&#9734;
        </span>
        <h1 className="lg:text-4xl md:text-3xl text-2xl capitalize">
          Velvet Luxe 2-in-1 jacket
        </h1>
        <p className="text-gray-500">
          Indulge in luxury with our Velvet Luxe 2-in-1 jacket. Keep cozy and
          stylish with the soft velvet exterior, while staying warm with the
          removable quilted lining. This versatile jacket is the perfect
          addition to any wardrobe, adding a touch of elegance to any outfit.
          Stay on trend and turn heads wherever you go with this must-have
          piece.
        </p>
        <span className="text-2xl text-primary">$120.00</span>
        <button className="text-white bg-primary p-2 rounded-xl uppercase w-[80%] font-medium">
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Deal;
