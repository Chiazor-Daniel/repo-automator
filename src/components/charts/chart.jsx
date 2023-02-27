import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import {data} from "./chart-data";

export function Chart() {
    const CustomDot = ({ cx, cy, payload, value }) => {
      return <circle cx={cx} cy={cy} r={5} className="dot" />;
    }

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#00365aad" className='shadow-xl' strokeWidth={4} dot={<CustomDot />}
           strokeLinecap="round" />
          <CartesianGrid stroke="lightgray" opacity={0.2} vertical={false}/>
          <XAxis dataKey="name" tickLine={false} stroke="rgb(168 162 158)"/>
          <YAxis axisLine={false}  className="y-axis" stroke="rgb(168 162 158)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}