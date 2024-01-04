
import React, { Component, useContext, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomizeContext from '../../../context/costomizeContext';

const data = [
  { fullName: "25 Dec", name: '25 Dec', 'Project Revenue': 4000, 'Actual revenue': 2400 },
  { fullName: "26 Dec", name: '', 'Project Revenue': 3000, 'Actual revenue': 1398 },
  { fullName: "27 Dec", name: '', 'Project Revenue': 2000, 'Actual revenue': 3800 },
  { fullName: "28 Dec", name: '', 'Project Revenue': 2780, 'Actual revenue': 3908 },
  { fullName: "29 Dec", name: '29 Dec', 'Project Revenue': 1890, 'Actual revenue': 4800 },
  { fullName: "30 Dec", name: '', 'Project Revenue': 2390, 'Actual revenue': 3800 },
  { fullName: "31 Dec", name: '', 'Project Revenue': 5490, 'Actual revenue': 4300 },
  { fullName: "01 Jan", name: '', 'Project Revenue': 3550, 'Actual revenue': 4300 },
  { fullName: "02 Jan", name: 'Jan 02', 'Project Revenue': 5490, 'Actual revenue': 4300 },
  { fullName: "03 Jan", name: '', 'Project Revenue': 4490, 'Actual revenue': 4300 },
];

const dataFa = [
  { fullName: "25 Dec", name: '25 Dec', 'Project Revenue': 4000, 'Actual revenue': 2400 },
  { fullName: "26 Dec", name: '', 'Project Revenue': 3000, 'Actual revenue': 1398 },
  { fullName: "27 Dec", name: '', 'Project Revenue': 2000, 'Actual revenue': 9800 },
  { fullName: "28 Dec", name: '', 'Project Revenue': 2780, 'Actual revenue': 3908 },
  { fullName: "29 Dec", name: '29 Dec', 'Project Revenue': 1890, 'Actual revenue': 4800 },
  { fullName: "30 Dec", name: '', 'Project Revenue': 2390, 'Actual revenue': 3800 },
  { fullName: "31 Dec", name: '', 'Project Revenue': 5490, 'Actual revenue': 4300 },
  { fullName: "01 Jan", name: '', 'Project Revenue': 3550, 'Actual revenue': 4300 },
  { fullName: "02 Jan", name: 'Jan 02', 'Project Revenue': 5490, 'Actual revenue': 4300 },
  { fullName: "03 Jan", name: '', 'Project Revenue': 8490, 'Actual revenue': 4300 },
];




const CustomTooltip = ({ payload, label, active, showPv, showUv }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipStyle">
        {/* محتوای دلخواه خود را اینجا قرار دهید */}
        <div className="w-[210px] flex flex-col p-2  justify-center gap-1 text-bold shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] dark:shadow-[0_0px_5px_2px_rgba(255,255,255,0.3)] text-gray-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-md border border-solid border-gray-400/80 dark:border-slate-500 ">
          <span>{payload[0].payload.fullName}</span>
          {(showPv && showUv) && payload.map(item =>
            <div key={item.dataKey} className="flex items-center gap-x-2 ">
              <span className='w-2.5 h-2.5 rounded-full block' style={{ background: item.color }}></span>
              <span>{item.dataKey}  : {item.payload[item.dataKey]}</span>
            </div>

          )}
          {(showPv && !showUv) && payload.map((item, index) =>
            index === 0 &&
            <div key={item.dataKey} className="flex items-center gap-x-2 ">
              <span className='w-2.5 h-2.5 rounded-full block' style={{ background: item.color }}></span>
              <span>{item.dataKey}  : {item.payload[item.dataKey]}</span>
            </div>

          )}
          {(!showPv && showUv) && payload.map((item, index) =>
            index === 1 &&
            <div key={item.dataKey} className="flex items-center gap-x-2 ">
              <span className='w-2.5 h-2.5 rounded-full block' style={{ background: item.color }}></span>
              <span>{item.dataKey}  : {item.payload[item.dataKey]}</span>
            </div>

          )}


        </div>
      </div>
    );
  }

  return null;
};





const ChartActualEarnings = () => {

  const [showPv, setShowPv] = useState(true)
  const [showUv, setShowUv] = useState(true)

  const { language, theme } = useContext(CustomizeContext)

  const isLanguageFa = language === "fa"
  const isDark = theme === "dark"

  return (
    <>
      <div className="flex items-center gap-4  pt-4 justify-end text-xs">
        <h3 className='flex items-center gap-x-1 cursor-pointer' onClick={() => setShowPv(prevState => !prevState)}>
          {showPv ?
            <>
              <span className='block w-4 h-2.5 rounded-sm  bg-blue-500 dark:bg-slate-400'></span>
              <span className={`text-gray-700 dark:text-slate-200`}>
                {isLanguageFa ? "درآمد پروژه" : "Project Revenue"}
              </span>
            </> :
            <>
              <span className='block w-4 h-2.5 rounded-sm  bg-gray-300 dark:bg-gray-500'></span>
              <span className={`text-gray-400 dark:text-slate-400`}>
                {isLanguageFa ? "درآمد پروژه" : "Project Revenue"}
              </span>
            </>
          }


        </h3>

        <h3 className='flex items-center gap-x-1 cursor-pointer' onClick={() => setShowUv(prevState => !prevState)}>
          {showUv ?
            <><span className='block w-4 h-2.5 rounded-sm  bg-blue-300 dark:bg-slate-700'></span>
              <span className={`text-gray-700 dark:text-slate-200`}>
                {isLanguageFa ? "درآمد واقعی" : "Actual revenue"}
              </span></> :
            <><span className='block w-4 h-2.5 rounded-sm  bg-gray-300 dark:bg-gray-500'></span>
              <span className={`text-gray-400 dark:text-slate-400`}>
                {isLanguageFa ? "درآمد واقعی" : "Actual revenue"}
              </span></>}


        </h3>
      </div>
      <div className="w-full h-72 md:h-96 ltr-dir">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
            
          >
            <CartesianGrid strokeDasharray="3 0" vertical={false} />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip content={(showPv || showUv) ? <CustomTooltip showPv={showPv} showUv={showUv} /> : <span className='scale-0'></span>} cursor={false} />


            {showPv ? (
              <Bar dataKey="Project Revenue" fill={isDark ? "#94a3b8" : "#3b82f6"} minPointSize={4} barSize={6} stackId="a" />
            ) :
              <Bar dataKey="Project Revenue" fill="transparent" minPointSize={4} barSize={6} stackId="a" />
            }
            {showUv ? (
              <Bar dataKey="Actual revenue" fill={isDark ? "#334155" : "#93c5fd"} minPointSize={4} barSize={6} stackId="b" />
            ) :
              <Bar dataKey="Actual revenue" fill="transparent" minPointSize={4} barSize={6} stackId="b" />
            }
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}


export default ChartActualEarnings;
