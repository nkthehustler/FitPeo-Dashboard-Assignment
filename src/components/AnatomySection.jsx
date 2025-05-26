import React from 'react';

function AnatomySection() {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center">
      <img src="https://images.pexels.com/photos/9574324/pexels-photo-9574324.jpeg?
      auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Anatomy" className="w-40 h-40 object-cover" />
      <div className="mt-4 text-center">
        <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">Healthy Heart</span>
      </div>
      <div className="mt-2 text-center">
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">Healthy Leg</span>
      </div>
    </div>
  );
}

export default AnatomySection;
