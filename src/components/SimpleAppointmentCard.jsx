import React from 'react';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="bg-blue-50 p-2 rounded-lg text-sm text-blue-700 flex justify-between">
      <span>{title}</span>
      <span>{time}</span>
    </div>
  );
}

export default SimpleAppointmentCard;
