"use client";

import { urlForImage } from "@/sanity/lib/image";
import { useStore } from "../store/store";
import { GoTrash } from "react-icons/go";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { useState } from "react";

function page() {
  const clothes = useStore((state) => state.cart.clothes);
  const resetCart = useStore((state) => state.resetCart);
  const removeCloth = useStore((state) => state.removeCloth);

  const [loading, setLoading] = useState(false);

  const total = () => {
    return clothes.reduce((a, b) => a + b.quantity * b.price, 0);
  };

  const router = useRouter();
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clothes),
      });
      if (response.status === 500) return;

      const data = await response.json();
      toast.loading("Redirecting to checkout page!");
      router.push(data.url);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full p-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-medium">Your shopping cart</h1>
        <div className="flex gap-3 items-start sm:flex-row flex-col">
          <div className="lg:flex-3 sm:flex-2 flex flex-col gap-2 divide-y min-h-[300px] w-full">
            {clothes.length > 0 ? (
              clothes?.map((cloth, id) => (
                <div className="pt-2 flex gap-2 items-start" key={id}>
                  <div>
                    <div className="w-[101px]">
                      <img
                        src={urlForImage(cloth?.images[0])}
                        alt=""
                        className="h-[140px] rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 justify-between">
                    <h1 className="line-clamp-1">{cloth?.name}</h1>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {cloth?.description}
                    </p>
                    <div className="text-sm flex items-center gap-4">
                      <span>Qty: {cloth?.quantity}</span>
                      <span>Unit Price: ${cloth?.price?.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>
                        ${(cloth?.quantity * cloth?.price).toFixed(2)}
                      </span>
                      <button
                        className="bg-red-500 h-6 w-6 rounded-full text-white flex items-center justify-center"
                        onClick={() => removeCloth(cloth?._id)}
                      >
                        <GoTrash size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex w-full h-[300px] justify-center items-center flex-col gap-2 mx-auto">
                <span className="text-gray-500 text-center">
                  You have no items in your cart!
                </span>
                <button className="text-sm uppercase text-primary">
                  <Link href="/">continue shopping</Link>
                </button>
              </div>
            )}

            {clothes.length > 0 && (
              <div>
                <button
                  className="text-sm text-primary underline w-max mt-3"
                  onClick={resetCart}
                >
                  Reset Cart
                </button>
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-3 w-full">
            <h1 className="text-xl font-medium">Payment Summary</h1>
            <div className="border rounded-xl px-3 py-6 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-medium">${total().toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex items-center justify-between border-t pt-2 text-xl">
                <span>Total</span>
                <span className="font-medium">${total().toFixed(2)}</span>
              </div>
            </div>
            {clothes.length > 0 && (
              <button
                className={`text-white ${
                  loading ? "bg-teal-200" : "bg-primary"
                } uppercase py-3 rounded-xl mt-2 text-sm`}
                onClick={handleCheckout}
                disabled={loading}
              >
                checkout now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
