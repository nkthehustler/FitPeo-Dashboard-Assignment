import React from 'react';
import { navLinks } from '../data/navLinks';

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow p-4 space-y-4">
      <div className="text-2xl font-bold text-blue-600 mb-6">Health<span className="text-gray-700">care.</span></div>
      <nav className="space-y-2">
        {navLinks.map(link => (
          <button
            key={link.name}
            className="w-full flex items-center px-3 py-2 text-sm rounded hover:bg-blue-50 text-gray-600 hover:text-blue-600"
          >
            <span className="mr-2">{link.icon}</span>
            {link.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
