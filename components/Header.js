import React from "react";
import Image from "next/image";
// import { Input } from "postcss";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <header>
      <div className="flex item-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            className="object-contain cursor-pointer"
          />
        </div>

        <div className="bg-yellow-400 sm:flex items-center h-10 rounded-md flex-grow cursor-pointer hover:bg-yellow-500 hidden ml-2">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md  focus:outline-none px-4"
          ></input>
          <MagnifyingGlassIcon className="p-4 h-12 " />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Ansh Goyal</p>
            <p className="font-extrabold text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns &</p>
            <p className="font-extrabold text-sm">Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden sm:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 text-white bg-amazon_blue-light text-small">
        <p className="flex items-center link">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        {/* <p className="link hidden lg:inline-flex">Electronics</p> */}
      </div>
    </header>
  );
};

export default Header;
