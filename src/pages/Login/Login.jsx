import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbMenu2 } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import LoginItems from "./LoginItems";

function Login() {
  return (
    <div className="">
      <div
        className={"px-20 py-5 flex justify-between bg-slate-200 items-center"}
      >
        <div className="flex">
          <h1 className="text-xl mr-14 text-indigo-700 font-bold items-center flex ">
            <AiOutlineShoppingCart className="text-blue-700 mr-1 text-4xl font-thin	" />
            UniStore
          </h1>
          <button className="text-lg bg-blue-700 text-white px-5 gap-3 h-10 border rounded flex items-center">
            <TbMenu2 className="text-xl" />
            Katalog
          </button>
        </div>
        <input
          className="w-80 px-5 h-8 rounded outline-none border-solid border-2 border-gray-400	"
          type="text"
          placeholder="maxsulot qidirish"
        />
        <div className="flex items-center gap-14">
          <h1 className="text-xl flex items-center gap-3">
            <BsHeart />
            Sevimlilar
          </h1>
          <h1 className="text-xl flex items-center gap-3">
            <CiShoppingCart className="text-3xl" />
            Korzinka
          </h1>
          <button className="text-xl text-blue-700 border-solid border-2 border-indigo-600 rounded w-20 h-9">
            Kirish
          </button>
        </div>
      </div>
      <LoginItems />
    </div>
  );
}

export default Login;
