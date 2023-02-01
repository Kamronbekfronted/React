import React from "react";

function Navbar() {
  return (
    <div className={"px-20 py-10"}>
      <div>
        <h1>UniStore</h1>
        <button>Katalog</button>
      </div>

      <div>
        <h1>Sevimlilar</h1>
        <h1>Korzinka</h1>
        <button>Kirish</button>
      </div>
    </div>
  );
}

export default Navbar;
