import React from 'react';
import { appointments } from '../data/appointments';

function CalendarView() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold text-gray-700 mb-4">October 2021</h2>
      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600">
        {appointments.days.map(day => (
          <div key={day.date} className="p-2 rounded hover:bg-blue-50 cursor-pointer">
            <div className="font-bold">{day.day}</div>
            <div>{day.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
