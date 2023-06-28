import React from 'react';
import { Progress } from 'flowbite-react';
import 'flag-icons/css/flag-icons.min.css';

import abc from './../images/abc.png'
export default function ColorsCS() {
  return (
    <div className="bg-white-100 p-6 rounded">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-medium">Top Countries</div>
        <div className="text-2xl text-gray-500">Top Country</div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="world-map">
            <img src={abc} alt="World Map" style={{ width: '80%' }} />
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-left gap-10">
          <div className="flex flex-col">
            <div className="text-base font-medium">
              <span className="flag-icon flag-icon-us rounded-full mr-2" /> United States
            </div>
            <Progress color="green" progress={54} />
          </div>
          <div className="flex flex-col">
            <div className="text-base font-medium text-cyan-700">
              <span className="flag-icon flag-icon-gb rounded-full mr-2" /> United Kingdom
            </div>
            <Progress color="blue" progress={36} />
          </div>
          <div className="flex flex-col">
            <div className="text-base font-medium text-cyan-700">
              <span className="flag-icon flag-icon-in rounded-full mr-2" /> India
            </div>
            <Progress color="yellow" progress={15} />
          </div>
          <div className="flex flex-col">
            <div className="text-base font-medium text-cyan-700">
              <span className="flag-icon flag-icon-id rounded-full mr-2" /> Indonesia
            </div>
            <Progress color="red" progress={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
