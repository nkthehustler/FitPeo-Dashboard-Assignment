import React from 'react';
import { healthData } from '../data/healthData';

function HealthStatusCards() {
  return (
    <div className="space-y-4">
      {healthData.map(item => (
        <div key={item.name} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span>{item.icon}</span>
            <div>
              <div className="font-semibold text-gray-700">{item.name}</div>
              <div className="text-sm text-gray-500">{item.date}</div>
            </div>
          </div>
          <div className="w-32 h-2 bg-gray-200 rounded-full">
            <div
              className={`h-2 rounded-full ${item.level > 70 ? 'bg-red-400' : 'bg-green-400'}`}
              style={{ width: `${item.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
