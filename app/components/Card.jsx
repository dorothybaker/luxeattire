import Link from "next/link";

function Card({ cloth }) {
  return (
    <div className="shadow-sm bg-white rounded-xl">
      <Link href={`/product/${cloth.slug}`}>
        <img
          src={cloth.imageUrl}
          alt=""
          className="h-[300px] object-cover w-full rounded-t-xl"
        />
        <div className="flex flex-col gap-0.5 px-2 py-0.5">
          <span className="text-xs text-gray-500 uppercase">
            {cloth.category}
          </span>
          <h2 className="line-clamp-1">{cloth.name}</h2>
          <div className="text-primary flex justify-between items-center">
            <p className="text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</p>
            <span>${cloth.price.toFixed(2)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
