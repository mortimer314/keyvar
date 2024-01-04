
import React, { useContext, useEffect, useState } from 'react';
import { XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import CustomizeContext from '../../../context/costomizeContext';



const CustomTooltip = ({ payload, label, active, isShowList }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipStyle">
        {/* محتوای دلخواه خود را اینجا قرار دهید */}
        <div className="w-[210px] flex flex-col p-2  justify-center gap-1 text-bold shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] dark:shadow-[0_0px_5px_2px_rgba(255,255,255,0.3)] text-gray-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-md border border-solid border-gray-400/80 dark:border-slate-500 ">
          <span>{payload[0].payload.fullName}</span>
          {payload.map((item, index) =>
            isShowList[index] &&
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



const data = [
  {
    fullName: 'January',
    name: '',
    'Fourth time': 4000,
    'Third time': 2400,
    'Second time': 2400,
  },
  {
    fullName: 'Feruary',
    name: 'Feb',
    'Fourth time': 3000,
    'Third time': 1398,
    'Second time': 2210,
  },
  {
    fullName: 'March',
    name: 'Mar',
    'Fourth time': 5000,
    'Third time': 9800,
    'Second time': 2290,
  },
  {
    fullName: 'April',
    name: 'Apr',
    'Fourth time': 2780,
    'Third time': 3908,
    'Second time': 2000,
  },
  {
    fullName: 'May',
    name: 'May',
    'Fourth time': 1890,
    'Third time': 4800,
    'Second time': 2181,
  },
  {
    fullName: 'June',
    name: 'Jun',
    'Fourth time': 2390,
    'Third time': 1000,
    'Second time': 2500,
  },
  {
    fullName: 'July',
    name: 'Jul',
    'Fourth time': 3490,
    'Third time': 1000,
    'Second time': 7100,
  },
  {
    fullName: 'August',
    name: 'Aug',
    'Fourth time': 1500,
    'Third time': 1000,
    'Second time': 1800,
  },
  {
    fullName: 'September',
    name: 'Sep',
    'Fourth time': 5500,
    'Third time': 1000,
    'Second time': 2700,
  },
  {
    fullName: 'October',
    name: 'Oct',
    'Fourth time': 7200,
    'Third time': 1000,
    'Second time': 3900,
  },
  {
    fullName: 'Nvember',
    name: 'Nov',
    'Fourth time': 1800,
    'Third time': 1000,
    'Second time': 2800,
  },
  {
    fullName: 'December',
    name: '',
    'Fourth time': 1000,
    'Third time': 2000,
    'Second time': 1500,
  }

]


export default function ChartReturningCustomerRate() {
  const [showFourth, setShowFourth] = useState(true)
  const [showThird, setShowThird] = useState(true)
  const [showSecond, setShowSecond] = useState(true)


  const { language, theme } = useContext(CustomizeContext)
  const isLanguageFa = language === "fa"
  const isDark = theme === "dark"

  return (
    <>

      <div className="flex items-center gap-4  pt-4 justify-end text-xs">
        <h3 className='flex items-center gap-x-1 cursor-pointer' onClick={() => setShowFourth(prevState => !prevState)}>
          {showFourth ?
            <>
              <span className='block w-4 h-2.5 rounded-sm  bg-blue-500 dark:bg-slate-400'></span>
              <span className={`text-gray-700 dark:text-slate-200`}>
                {isLanguageFa ? "بار چهارم" : "Furth time"}
              </span>
            </> :
            <>
              <span className='block w-4 h-2.5 rounded-sm  bg-gray-300 dark:bg-gray-500'></span>
              <span className={`text-gray-400 dark:text-slate-400`}>
                {isLanguageFa ? "بار چهارم" : "Furth time"}
              </span>
            </>
          }


        </h3>

        <h3 className='flex items-center gap-x-1 cursor-pointer' onClick={() => setShowThird(prevState => !prevState)}>
          {showThird ?
            <><span className='block w-4 h-2.5 rounded-sm  bg-blue-300 dark:bg-slate-700'></span>
              <span className={`text-gray-700 dark:text-slate-200`}>
                {isLanguageFa ? "بار سوم" : "Third time"}
              </span></> :
            <><span className='block w-4 h-2.5 rounded-sm  bg-gray-300 dark:bg-gray-500'></span>
              <span className={`text-gray-400 dark:text-slate-400`}>
                {isLanguageFa ? "بار سوم" : "Third time"}
              </span></>}


        </h3>
        <h3 className='flex items-center gap-x-1 cursor-pointer' onClick={() => setShowSecond(prevState => !prevState)}>
          {showSecond ?
            <><span className='block w-4 h-2.5 rounded-sm  bg-sky-500 dark:bg-sky-800'></span>
              <span className={`text-gray-700 dark:text-slate-200`}>
                {isLanguageFa ? "بار دوم" : "Secondw time"}
              </span></> :
            <><span className='block w-4 h-2.5 rounded-sm  bg-gray-300 dark:bg-gray-500'></span>
              <span className={`text-gray-400 dark:text-slate-400`}>
                {isLanguageFa ? "بار دوم" : "Secondw time"}
              </span></>}


        </h3>
      </div>

      <div className='w-full h-72 md:h-96 ltr-dir'>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20, right: 5, bottom: 5, left: 5,
            }}
          >
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} />
            <CartesianGrid />
            {
              showFourth ?
                <Area dataKey="Fourth time" stroke={isDark ? "#94a3b8" : "#3b82f6"} fill="transparent" strokeWidth={3} /> :
                <Area dataKey="Fourth time" stroke="transparent" fill="transparent" strokeWidth={4} />
            }
            {
              showThird ?
                <Area dataKey="Third time" stroke={isDark ? "#334155" : "#93c5fd"} fill="transparent" strokeWidth={3} /> :
                <Area dataKey="Third time" stroke="transparent" fill="transparent" strokeWidth={2} />
            }
            {
              showSecond ?
                <Area dataKey='Second time' stroke={isDark ? "#075985" : "#0ea5e9"} fill="transparent" strokeDasharray="2 4" strokeWidth={3} /> :
                <Area dataKey='Second time' stroke="transparent" fill="transparent" strokeDasharray="2 4" strokeWidth={2} />
            }
            <Tooltip content={(showFourth || showThird || showSecond) ? <CustomTooltip isShowList={[showFourth, showThird, showSecond]} /> : <span className='scale-0'></span>} />
          </AreaChart>
        </ResponsiveContainer>

      </div>

    </>
  );

}





