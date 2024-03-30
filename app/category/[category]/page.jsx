"use client";

import Card from "@/app/components/Card";
import CardSkeleton from "@/app/skeletons/card.skeleton";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

async function getData(category) {
  const query = `*[_type == 'product' && category->name == '${category}'] {
        _id, name, 'imageUrl': images[0].asset->url, price, 'slug': slug.current, 'category': category->name
    }`;

  const data = await client.fetch(query);
  return data;
}

function page({ params: { category } }) {
  const [loading, setLoading] = useState(false);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getData(category);
        setClothes(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl capitalize">{category}</h1>
        {loading ? (
          <CardSkeleton />
        ) : (
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-2">
            {clothes?.map((cloth, id) => (
              <Card cloth={cloth} key={id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
