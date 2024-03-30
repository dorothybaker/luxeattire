"use client";

import Link from "next/link";
import {
  IoBagOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useStore } from "../store/store";
import { useRouter } from "next/navigation";

function Navbar() {
  const clothes = useStore((state) => state.cart.clothes.length);
  const router = useRouter();

  return (
    <div className="shadow-sm">
      <div className="max-w-7xl w-full mx-auto px-4 h-[55px] flex items-center justify-between">
        <div className="flex-1 flex items-center gap-5">
          <h1 className="text-2xl font-medium uppercase">
            <Link href="/" className="w-max">
              luxe<span className="text-primary">Attire</span>.
            </Link>
          </h1>
          <div className="w-full rounded-lg sm:flex hidden items-center gap-2 px-2 py-1.5 bg-gray-200">
            <IoSearchOutline size={20} color="gray" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start gap-5 justify-end">
          <ul className="sm:flex hidden items-center gap-3 text-base">
            <li className={`cursor-pointer capitalize`}>
              <Link href="/">home</Link>
            </li>
            <li className={`cursor-pointer capitalize`}>
              <Link href="/category/men">men</Link>
            </li>
            <li className={`cursor-pointer capitalize`}>
              <Link href="/category/women">women</Link>
            </li>
            <li className={`cursor-pointer capitalize`}>
              <Link href="/category/kids">kids</Link>
            </li>
          </ul>
          <IoPersonOutline size={20} />
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <IoBagOutline size={20} />
            <div className="bg-primary text-white text-sm h-4 w-4 rounded-full -top-2.5 -right-2.5 absolute flex justify-center items-center">
              {clothes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
