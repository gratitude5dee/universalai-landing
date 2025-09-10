import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine, ReferenceDot } from 'recharts';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 110 },
  { name: 'Mar', value: 125 },
  { name: 'Apr', value: 140 },
  { name: 'May', value: 165 },
  { name: 'Jun', value: 180 },
  { name: 'Jul', value: 220 }
];

const InteractiveChart: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-40 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666666', fontSize: 12 }} />
          <YAxis hide />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, fill: 'white', stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
            strokeDasharray={isVisible ? "0" : "1000"}
            strokeDashoffset={isVisible ? "0" : "1000"}
            style={{ 
              transition: 'stroke-dashoffset 2s ease-in-out',
              filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.5))'
            }}
          />
          <ReferenceLine x="May" stroke="white" strokeOpacity={0.3} />
          <ReferenceDot x="May" y={165} r={4} fill="white" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InteractiveChart;