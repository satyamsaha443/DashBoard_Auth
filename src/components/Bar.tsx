import { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Most Active Users',
    height: 30,
  },
  {
    name: 'Most Active Users',
    height: 40,
  },
  {
    name: 'Most Active Users',
    height: 20,
  },
  {
    name: 'Most Active Users',
    height: 30,
  },
  {
    name: 'Most Active Users',
    height: 45,
  },
  {
    name: 'Most Active Users',
    height: 80,
    fill : "#007ACC"
  },
  {
    name: 'Most Active Users',
    height: 60,
  },
  {
    name: 'Most Active Users',
    height: 55,
  },
];

export default class BarCS extends PureComponent {
  render() {
    return (
      <div className="flex flex-col bg-white-100 p-4 rounded">
        <div className="flex items-center justify-between mb-2">
          <div className="text-2xl font-medium">Most Active Users</div>
        </div>
        <div className="flex items-center mb-2">
          <div className="text-xl font-medium mr-2">1.684</div>
          <div className="bg-green-300 text-sm text-green px-2 py-1 rounded">+12%</div>
          <div className="flex-grow text-gray-500 text-sm text-right">Last 3 Years</div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Bar dataKey="height" fill="#CCCCCC" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
