import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
} from 'recharts';

const data = [
  {
    name: '27 Nov',
    uv: 250,
    pv: 240,
    amt: 240,
  },
  {
    name: '28 Nov',
    uv: 300,
    pv: 138,
    amt: 220,
  },
  {
    name: '29 Nov',
    uv: 200,
    pv: 380,
    amt: 229,
  },
  {
    name: '30 Nov',
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: '1 Dec',
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: '2 Dec',
    uv: 239,
    pv: 380,
    amt: 250,
  },
  {
    name: '3 Dec',
    uv: 349,
    pv: 430,
    amt: 210,
  },
  {
    name: '4 Dec',
    uv: 349,
    pv: 430,
    amt: 210,
  },
];

type Props = {};

export default function BarChart({}: Props) {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-sm border-gray-200 flex flex-col flex-1 '>
      <strong className='text-gray-700 font-medium'>Transactions</strong>
      <div className=' w-full mt-3 flex-1 text'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='name'
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-45}
              textAnchor='end'
            />
            <YAxis
              type='number'
              domain={[0, 400]}
              tick={{ fontSize: 12 }}
              interval={0}
              tickCount={5}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' stackId='a' fill='#8884d8' />
            <Bar dataKey='amt' stackId='a' fill='#82ca9d' />
            <Bar dataKey='uv' fill='#ffc658' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
