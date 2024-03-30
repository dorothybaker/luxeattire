import Link from "next/link";

function Categories() {
  const categories = [
    {
      name: "men",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/coat.svg",
      link: "/category/men",
    },
    {
      name: "women",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg",
      link: "/category/women",
    },
    {
      name: "kids",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shorts.svg",
      link: "/category/kids",
    },
    {
      name: "latest",
      image:
        "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg",
      link: "/",
    },
  ];
  return (
    <div className="max-w-7xl w-full mx-auto p-4">
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
        {categories.map((category, id) => (
          <div
            key={id}
            className="flex lg:gap-5 md:gap-3 gap-2 items-center p-3 bg-white rounded-xl shadow-md"
          >
            <div className="p-2 border rounded-xl">
              <img src={category.image} alt="" width={35} />
            </div>
            <div className="flex flex-col justify-between">
              <span className="uppercase font-medium">{category.name}</span>
              <Link href={category.link} className="w-max text-sm text-primary">
                View all
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
