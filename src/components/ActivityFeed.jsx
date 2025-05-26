import React from 'react';

function ActivityFeed() {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold text-gray-700 mb-4">Activity</h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div key={day} className="flex flex-col items-center">
            <div className="w-6 h-24 bg-blue-100 rounded">
              <div className="w-full bg-blue-500 rounded" style={{ height: `${Math.random() * 100}%` }}></div>
            </div>
            <div className="text-xs mt-1 text-gray-500">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
