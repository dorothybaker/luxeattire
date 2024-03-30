"use client";

import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";
import { useStore } from "../store/store";

import Confetti from "react-confetti";

import { useState, useEffect } from "react";

function page() {
  const resetCart = useStore((state) => state.resetCart);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    setClient(true);

    resetCart();
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full p-4 min-h-[70vh] flex justify-center items-center">
      {isClient && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}
      <div className="flex flex-col gap-3 items-center text-center justify-center">
        <IoCheckmarkDone size={60} color="green" />
        <p className="text-gray-500 lg:w-[50%] md:w-[75%] sm:w-[85%] w-full">
          Congratulations on your purchase! 🎉 You are officially one step
          closer to elevating your wardrobe with luxe attire. Thank you for
          choosing us to be a part of your style journey. Enjoy your new pieces
          and feel fabulous wearing them!
        </p>
        <span className="text-primary text-sm">
          #luxeattire #fashionforward #luxuryEverywhere
        </span>
        <h2 className="w-max text-base uppercase text-primary font-medium underline">
          <Link href="/">back to home</Link>
        </h2>
      </div>
    </div>
  );
}

export default page;
