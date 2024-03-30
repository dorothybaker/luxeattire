"use client";

import { client } from "@/sanity/lib/client";
import Card from "./Card";
import { useEffect, useState } from "react";
import CardSkeleton from "../skeletons/card.skeleton";

async function getData() {
  const query = `*[_type == 'product' && listing->name == 'latest'][0...5] | order(_createdAt desc) {
    _id, price, name, "slug" : slug.current,
      "category": category->name,
      "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

function Latest() {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getData();
        setClothes(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <div className="flex flex-col">
        <h1 className="sm:text-4xl text-3xl">Latest products</h1>
        <span className="text-sm text-gray-500">
          The latest arrivals on LUXEATTIRE
        </span>
      </div>
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
  );
}

export default Latest;
