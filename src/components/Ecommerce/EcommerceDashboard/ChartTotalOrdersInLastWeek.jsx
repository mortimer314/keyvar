
import React, { PureComponent, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomizeContext from '../../../context/costomizeContext';

const data = [
  {
    name: "01",
    uv: 4000,
    May: 120,
    amt: 2400,
  },
  {
    name: "02",
    uv: 3000,
    May: 200,
    amt: 2210,
  },
  {
    name: "03",
    uv: 2000,
    May: 80,
    amt: 2290,
  },
  {
    name: "04",
    uv: 2780,
    May: 50,
    amt: 2000,
  },
  {
    name: "05",
    uv: 1890,
    May: 110,
    amt: 2181,
  },
  {
    name: "06",
    uv: 2390,
    May: 50,
    amt: 2500,
  },
  {
    name: "07",
    uv: 3490,
    May: 110,
    amt: 2100,
  },
];




const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipStyle">
        {/* محتوای دلخواه خود را اینجا قرار دهید */}
        <div className="w-28  flex flex-col ltr-dir px-2  justify-center gap-1  bg-slate-100 dark:bg-slate-800 shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] dark:shadow-[0_0px_5px_2px_rgba(255,255,255,0.3)] rounded-md border border-solid border-gray-400/80 dark:border-slate-500 ">
          {payload.map(item =>
            <div key={item.dataKey} className="flex items-center justify-between gap-x-2 whitespace-nowrap">
              <span className='font-bold  text-gray-700 dark:text-slate-200'> {item.payload.name} {item.dataKey} :</span>
              <span className='text-sm text-gray-700 dark:text-slate-300'> {item.payload[item.dataKey]}</span>
            </div>
          )}

        </div>
      </div>
    );
  }

  return null;
};





function CustomeBar(props) {
  const { x, y, height, width, fill } = props

  return <g><rect x={x} y={y} height={height} width={width} rx={3} ry={3} fill={fill}></rect></g>
}

export default function ChartTotalOrdersInLastWeek() {

  const { theme, language } = useContext(CustomizeContext)
  const isDark = theme === "dark"
  const isLanguageFa = language === "fa"

  return (

    <>
      <div className="flex-center py-10">

        <BarChart
          width={150}
          height={85}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={20}
        >

          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Bar dataKey="May" barSize={5} activeBar={<CustomeBar />} shape={<CustomeBar />}
            fill={isDark ? "#64748b" : "#1d4ed8"}
            background={isDark ? { fill: '#1e293b' } : { fill: '#e2e8f0' }}
          />
        </BarChart>
      </div>


     <div className="flex justify-between">
     {
        !isLanguageFa ?
          <div className=" text-xs space-y-2">
            <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
              <span className='block w-4 h-2 rounded-sm bg-blue-700 dark:bg-slate-400'></span>
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
              <span className='block w-4 h-2 rounded-sm bg-slate-300/90 dark:bg-slate-700'></span>
              <span>Pending payment</span>
            </div>
          </div> : 
          <div className=" text-xs space-y-2">
          <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
            <span className='block w-4 h-2 rounded-sm bg-blue-700 dark:bg-slate-400'></span>
            <span>تکمیل شده</span>
          </div>
          <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
            <span className='block w-4 h-2 rounded-sm bg-slate-300/90 dark:bg-slate-700'></span>
            <span>در انتظار پرداخت</span>
          </div>
        </div>
      }

      <div className="space-y-2 text-xs text-gray-600 dark:text-slate-400">
        <h4 className='space-x-1 ltr-dir'>52 <span>%</span></h4>
        <h4 className='space-x-1 ltr-dir'>48 <span>%</span></h4>
      </div>
     </div>

    </>
  );
}

