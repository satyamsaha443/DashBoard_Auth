import React from 'react';
import { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

const data = [
  { name: 'Tablet', value: 3 },
  { name: 'Mobile', value: 21 },
  { name: 'Desktop', value: 76 },
];

const COLORS = ['#FFBB28', '#FF8042', '#007ACC'];

export default class DoughnutChart extends PureComponent {
  render() {
    return (
      <div className="flex flex-col bg-white-100 p-4 rounded">
        <div className="flex items-center justify-between mb-2">
          <div className="text-2xl font-bold">Sessions by Devices</div>
          <div className="flex-grow text-gray-500 text-xl text-right">Last 7 Days</div>
          <div className="toggle-dots"></div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={1}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  isAnimationActive={false}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  <Label value="Total" position="centerBottom" fill="#000" fontSize={18} />
                  <Label value="5,388" position="centerTop" fill="#000" fontSize={30} style={{ marginTop: '10px' }} />
                </Pie>
                <Label
                  value={`4,089 / 76%`}
                  position="center"
                  fill="#000"
                  fontSize={14}
                  offset={0}
                  style={{ marginTop: '-40px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col items-start justify-center ml-4">
            <div className="flex flex-col items-start">
              <div className="mt-1 text-md">
                <span className="text-xl text-gray-500 mr-2 left">Desktop</span>
                <span className="text-sm text-gray-500 mr-2 right">4,089 / 76%</span>
              </div>
              <div className="w-64 h-4 rounded-full bg-gray-200">
                <div className="h-4 rounded-full bg-blue-500" style={{ width: '76%' }}></div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="mt-1 text-md">
                <span className="text-xl text-gray-500 mr-2 left">Mobile</span>
                <span className="text-sm text-gray-500 mr-2 right">1,149 / 21%</span>
              </div>
              <div className="w-64 h-4 rounded-full bg-gray-200">
                <div className="h-4 rounded-full bg-orange-500" style={{ width: '21%' }}></div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="mt-1 text-md">
                <span className="text-xl text-gray-500 mr-2 left">Tablet</span>
                <span className="text-sm text-gray-500 mr-2 right">150 / 3%</span>
              </div>
              <div className="w-64 h-4 rounded-full bg-gray-200">
  <div className="h-4 rounded-full bg-black" style={{ width: '3%' }}></div>


              </div>
            </div>
            </div>
          </div>
        </div>
      
    );
  }
}
