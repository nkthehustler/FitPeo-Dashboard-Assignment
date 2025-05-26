import React from "react";

function Header() {
  return (
    <header className="p-4 bg-white shadow flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">
        Healthcare Dashboard
      </h1>

      <div className="relative">
        {/* Desktop search input */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden sm:block w-64 px-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-black"
        />
        {/* Mobile search icon */}
        <span className="sm:hidden text-2xl text-gray-500 cursor-pointer">
          🔍
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          N
        </span>
        <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
          +
        </span>
      </div>
    </header>
  );
}

export default Header;
