
import React, { useEffect, useState } from 'react';
import { XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';



const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipStyle">
        {/* محتوای دلخواه خود را اینجا قرار دهید */}
        <div className="w-30 h-14 flex flex-col ltr-dir p-2 text-xs justify-center gap-1 text-bold shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] dark:shadow-[0_0px_5px_2px_rgba(255,255,255,0.3)] text-gray-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-md border border-solid border-gray-400/80 dark:border-slate-500 ">
          {payload.map(item =>
            <div key={item.dataKey} className="flex items-center gap-x-2">
              <span className='w-2.5 h-2.5 rounded-full block' style={{ background: item.color }}></span>
              <span>{item.dataKey} {item.payload.name} : {item.payload[item.dataKey]}</span>
            </div>
          )}

        </div>
      </div>
    );
  }

  return null;
};




const data = [
  {
    name: '1',
    May: 4000,
    Apr: 2400,
    amt: 2400,
  },
  {
    name: '2',
    May: 3000,
    Apr: 1398,
    amt: 2210,
  },
  {
    name: '3',
    May: 2000,
    Apr: 9800,
    amt: 2290,
  },
  {
    name: '4',
    May: 2780,
    Apr: 3908,
    amt: 2000,
  },
  {
    name: '5',
    May: 1890,
    Apr: 4800,
    amt: 2181,
  },
  {
    name: '6',
    May: 2390,
    Apr: 1000,
    amt: 2500,
  },
  {
    name: '7',
    May: 3490,
    Apr: 1000,
    amt: 2100,
  }
]


export default function ChartNewCustomersInLastWeek() {


  return (

    <div className="flex-center">
      <div className='relative w-[100%] h-[200px] '>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={280}
            data={data}
            margin={{
              top: 20, 
            }}
          >
            <XAxis dataKey="0" tickLine={false} />
            <Area dataKey="May" stroke="#8884cc" fill="transparent" strokeWidth={2} />
            <Area dataKey="Apr" stroke="#00fff0"  fill="transparent" strokeWidth={2} strokeDasharray="2 4"  />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'gray', strokeWidth: 1 }} />
          </AreaChart>
        </ResponsiveContainer>

        <div className="text-xs dark:text-gray-300 ltr-dir absolute bottom-0 right-0 left-0 m-auto w-full flex justify-between">
          <span>1 May</span>
          <span>7 May</span>

        </div>

      </div>
    </div>
  );

}





