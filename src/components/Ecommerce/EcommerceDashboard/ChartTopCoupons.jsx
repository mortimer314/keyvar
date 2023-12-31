
import React, { PureComponent, useContext } from 'react';
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
  { name: 'Fixed card discount', value: 18 },
  { name: 'Fixed product discount', value: 10 },
  { name: 'Percentage discount', value: 72 },
];

const dataFa = [
  { name: 'تخفیف کالای ثابت', value: 18 },
  { name: 'تخفیف کارت ثابت', value: 10 },
  { name: 'درصد تخفیف', value: 72 },
];

const COLORS = ['#67e8f9', '#06b6d4', '#0891b2'];

export default function ChartTopCoupons() {
  const { language } = useContext(CustomizeContext)
  const isLanguageFa = language === "fa"

  return (
    <>
      <div className="relative h-[115px]">
        <div className="flex-center z-10 absolute inset-0">
          <PieChart width={115} height={115} >
            <Pie
              data={isLanguageFa ? dataFa : data}
              cx={54}
              cy={54}
              innerRadius={48}
              outerRadius={54}
              fill="#8884d8"
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='transparent' />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} cursor={false} />
          </PieChart>

        </div>
        <div className=" absolute z-0 w-fit m-auto left-[45%] top-[39%]  ltr-dir text-gray-800 dark:text-slate-300 text-2xl font-medium ">72%</div>

      </div>

      <div className="flex justify-between ">
        {
          !isLanguageFa ?
            <div className=" text-xs space-y-1">
              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-[#0891b2] '></span>
                <span>Percentage discount</span>
              </div>
              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-[#67e8f9]'></span>
                <span>Fixed card discount</span>
              </div>
              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-[#06b6d4]'></span>
                <span>Fixed product discount</span>
              </div>
            </div> :
            <div className=" text-xs space-y-1">
              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-[#0891b2]'></span>
                <span>درصد تخفیف</span>
              </div>
              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-[#67e8f9]'></span>
                <span>تخفیف کالای ثابت</span>
              </div>
              <div className="flex items-center gap-x-3 text-gray-600 dark:text-slate-400">
                <span className='block w-4 h-2 rounded-sm bg-[#06b6d4]'></span>
                <span>تخفیف کارت ثابت</span>
              </div>
            </div>
        }

        <div className=" text-[13px] font-medium text-gray-600 dark:text-slate-400">
          <h4 className='space-x-0.5 ltr-dir'>72 <span>%</span></h4>
          <h4 className='space-x-0.5 ltr-dir'>18 <span>%</span></h4>
          <h4 className='space-x-0.5 ltr-dir'>10 <span>%</span></h4>
        </div>
      </div>
    </>
  );
}

