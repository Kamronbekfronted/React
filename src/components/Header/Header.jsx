import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex justify-between px-20 py-5 bg-cyan-500 text-white">
      <Link className="text-2xl" to={"/"}>
        Home
      </Link>
      <Link className="text-2xl" to={"/login"}>
        Login
      </Link>
    </div>
  );
}

export default Header;
