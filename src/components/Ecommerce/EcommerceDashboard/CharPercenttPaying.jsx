
import React, { PureComponent, useContext, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import CustomizeContext from '../../../context/costomizeContext';


const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipStyle">
        {/* محتوای دلخواه خود را اینجا قرار دهید */}
        <div className=" flex-center p-1 px-2  bg-slate-100 dark:bg-slate-800 shadow-[0_0px_7px_3px_rgba(0,0,0,0.3)] dark:shadow-[0_0px_3px_2px_rgba(255,255,255,0.3)] rounded-md border border-solid border-gray-400/80 dark:border-slate-500 ">
          {payload.map(item =>
            <div key={item.dataKey} className="flex items-center justify-between gap-x-2 whitespace-nowrap">
              <span className='font-bold  text-gray-700 dark:text-slate-200/95'> {item.payload.name} :</span>
              <span className='text-sm ltr-dir  text-gray-700 dark:text-slate-300'> {item.payload[item.dataKey]} %</span>
            </div>
          )}

        </div>
      </div>
    );
  }

  return null;
};



const data = [
  { name: 'Paying customer', value: 30 },
  { name: 'Non-paying customer', value: 70 },

];
const dataFa = [
  { name: 'پرداخت مشتری', value: 30 },
  { name: 'مشتری بدون پرداخت', value: 70 },

];
const COLORS = ['#0088FE', '#334155'];
// const COLORSDARK = ['#0088FE','#cecece' ];

export default function CharPercenttPaying() {
  const { language, dark } = useContext(CustomizeContext)

  const isLanguageFa = language === "fa"



  return (
    <>
      <div className="w-52 flex-center m-auto">
        <PieChart width={160} height={160} >
          <Tooltip content={<CustomTooltip />} cursor={false} />

          <Pie
            data={isLanguageFa ? dataFa : data}
            cx={75}
            cy={90}
            startAngle={180}
            endAngle={0}
            innerRadius={45}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='transparent' />
            ))}
          </Pie>

        </PieChart>
      </div>
      <div className="flex justify-between ">
        {
          !isLanguageFa ?
            <div className=" text-xs space-y-1">
              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-[#0891b2] '></span>
                <span>Paying customer</span>
              </div>

              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-slate-700'></span>
                <span>Non-paying customer</span>
              </div>
            </div> :
            <div className=" text-xs space-y-1">
              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-[#0891b2]'></span>
                <span>پرداخت مشتری</span>
              </div>

              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-slate-700'></span>
                <span>مشتری بدون پرداخت</span>
              </div>
            </div>
        }

        <div className=" text-[13px] font-medium text-gray-600 dark:text-slate-400">
          <h4 className='space-x-0.5 ltr-dir'>30 <span>%</span></h4>

          <h4 className='space-x-0.5 ltr-dir'>70 <span>%</span></h4>
        </div>
      </div>
    </>
  );

}
