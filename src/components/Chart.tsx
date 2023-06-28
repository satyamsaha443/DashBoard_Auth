import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  {
    name: '27 Nov',
    height: 230,
  },
  {
    name: '28 Nov',
    height: 140,
  },
  {
    name: '29 Nov',
    height: 360,
  },
  {
    name: '30 Nov',
    height: 110,
  },
  {
    name: '1 Dec',
    height: 245,
  },
  {
    name: '2 Dec',
    height: 180,
    fill: "#007ACC"
  },
  {
    name: '3 Dec',
    height: 160,
  },
  {
    name: '4 Dec',
    height: 270,
  },
];

export default class LineCS extends PureComponent {
  render() {
    return (
      <div className="flex flex-col bg-white-100 p-4 rounded">
        <div className="flex items-center justify-between mb-2">
          <div className="text-2xl font-bold">Sessions Overview</div>
          <div className="flex-grow text-gray-500 text-xl text-right">Last 7 Days</div>
          <div className="toggle-dots"></div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} />

            <defs>
              <linearGradient id="lineGradient" gradientTransform="rotate(90)">
                <stop offset="5%" stopColor="#007ACC" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area type="monotone" dataKey="height" stroke="#007ACC" fill="url(#lineGradient)" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="height" stroke="#007ACC" strokeWidth={3} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
