import React from 'react';

function UpcomingSchedule() {
  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-3">
      <h2 className="font-semibold text-gray-700 mb-2">The Upcoming Schedule</h2>
      <div className="bg-blue-50 p-2 rounded-lg text-sm text-blue-700 flex justify-between">
        <span>Health checkup complete</span>
        <span>11:00 AM</span>
      </div>
      <div className="bg-blue-50 p-2 rounded-lg text-sm text-blue-700 flex justify-between">
        <span>Ophthalmologist</span>
        <span>2:00 PM</span>
      </div>
      <div className="bg-blue-50 p-2 rounded-lg text-sm text-blue-700 flex justify-between">
        <span>Cardiologist</span>
        <span>12:00 AM</span>
      </div>
      <div className="bg-blue-50 p-2 rounded-lg text-sm text-blue-700 flex justify-between">
        <span>Neurologist</span>
        <span>4:00 PM</span>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
