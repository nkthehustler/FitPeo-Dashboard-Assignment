import React from "react";

function Header() {
  return (
    <header className="p-4 bg-white shadow flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">
        Healthcare Dashboard
      </h1>
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border-1 rounded-full focus:outline-none focus:ring-1 focus:ring-black-400"
        />
        <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          N
        </span>
      </div>
    </header>
  );
}

export default Header;
