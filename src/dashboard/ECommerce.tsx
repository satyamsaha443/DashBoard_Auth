import React from 'react';
import Graph from '../components/graph';
import Header from './header';
import Chart from '../components/Chart';
import CChart from '../components/CChart';

import ProgressBar from '../components/ProgressBar';
import BarCS from '../components/Bar';
import ChartCS from '../components/Chart';
import PieCS from '../components/pie';
import ColorsCS from '../components/ProgressBar';
// import MapOne from "../components/MapOne";

const testData = [
  { bgcolor: '#6a1b9a', completed: 60 },
  { bgcolor: '#00695c', completed: 30 },
  { bgcolor: '#ef6c00', completed: 53 },
];

const ECommerce = () => {
  return (
    <div>
      <div style={{ backgroundColor: 'rgb(15 23 42)' }}>
        <Header></Header>
      </div>

      <div className="w-full">
        <div className="-mx-2 md:flex">
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10"> {/* Added text-center class */}
                  <h4 className="text-m uppercase text-gray-500 leading-tight">Total Revenue</h4>
                  <div className="flex items-center">
                    <div className="bg-green-300 text-sm text-red px-2 py-1 rounded">+15%</div>
                  </div>

                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">$56,472</h3>
                  <h6 className="text-sm uppercase text-gray-500 leading-tight">480 Orders</h6>
                </div>
                <div className="absolute bottom-0 inset-x-0"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10"> {/* Added text-center class */}
                  <h4 className="text-m uppercase text-gray-500 leading-tight">Conversations</h4>
                  <div className="flex items-center">
                    <div className="bg-red-300 text-sm text-red px-2 py-1 rounded">-0.72%</div>
                  </div>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">372</h3>
                  <h6 className="text-sm uppercase text-gray-500 leading-tight">214 Clicks</h6>
                </div>
                <div className="absolute bottom-0 inset-x-0"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10"> {/* Added text-center class */}
                  <h4 className="text-m uppercase text-gray-500 leading-tight">Subscribers</h4>
                  <div className="flex items-center">
                    <div className="bg-green-300 text-sm text-red px-2 py-1 rounded">+10.4%</div>
                  </div>
                  
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">2,873</h3>
                  <h6 className="text-sm uppercase text-gray-500 leading-tight">$62 Lifetime Value</h6>
                </div>
                <div className="absolute bottom-0 inset-x-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ChartCS></ChartCS>
        </div>
        <div>
          <BarCS></BarCS>
        </div>
        <div className="col-span-2">
          <div className="p-3">
            <ColorsCS></ColorsCS>
          </div>
        </div>
        <div className="p-3">
          <PieCS></PieCS>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
