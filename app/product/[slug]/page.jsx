"use client";

import Sponsored from "@/app/components/Sponsored";
import ProductSkeleton from "@/app/skeletons/product.skeleton";
import { useStore } from "@/app/store/store";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { GoDash, GoPlus } from "react-icons/go";

async function getData(slug) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
        _id, images, price, name, description, 'slug': slug.current, 'category': category->name, price_id, "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);
  return data;
}

function page({ params: { slug } }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [bigImg, setBigImg] = useState(data?.images[0]);

  const handleImageClick = (image) => {
    setBigImg(image);
  };

  const addCloth = useStore((state) => state.addCloth);
  const addToCart = () => {
    addCloth({ ...data, quantity: quantity });
    toast.success(`${data?.name?.slice(0, 20)}... added to cart!`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getData(slug);
        setBigImg(res?.images[0]);
        setData(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      {loading ? (
        <ProductSkeleton />
      ) : (
        <div className="flex justify-between items-center gap-3 sm:flex-row flex-col">
          <div className="flex-1 flex gap-2 justify-center items-start">
            <div className="flex gap-2 flex-col items-center">
              {data?.images?.map((image, id) => (
                <img
                  src={urlForImage(image)}
                  alt=""
                  key={id}
                  className="w-[90px] rounded-xl cursor-pointer"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <div>
              <img
                src={data?.images && urlForImage(bigImg)}
                alt=""
                className="max-h-[500px] rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col lg:gap-3 gap-2">
            <span className="text-sm uppercase text-gray-500">
              {data?.category}
            </span>
            <h1 className="text-3xl">{data?.name}</h1>
            <button className="bg-primary text-white text-sm w-[90px] p-2 rounded-full">
              &#9734; 4.8
            </button>
            <span className="text-2xl font-medium text-primary">
              ${data?.price?.toFixed(2)}
            </span>
            <p className="lg:text-[15px] text-sm text-gray-600">
              {data?.description}
            </p>

            <div className="flex items-center h-10 border rounded-lg w-max">
              <button
                className="bg-primary text-white h-full p-2 rounded-l-lg"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? prev : prev - 1))
                }
              >
                <GoDash size={19} />
              </button>
              <span className="w-[90px] h-full flex items-center justify-center">
                {quantity}
              </span>
              <button
                className="bg-primary text-white h-full p-2 rounded-r-lg"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <GoPlus size={19} />
              </button>
            </div>
            <button
              className="sm:w-[300px] w-full uppercase font-medium bg-primary text-white p-2 rounded-lg mt-3"
              onClick={addToCart}
            >
              add to cart
            </button>
          </div>
        </div>
      )}
      <Sponsored />
    </div>
  );
}

export default page;
