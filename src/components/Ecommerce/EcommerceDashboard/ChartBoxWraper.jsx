import React from 'react'

export default function ChartBoxWraper({ children }) {
    return (
        <div className='flex flex-col justify-between p-5 h-[290px] bg-white dark:bg-slate-900 rounded-lg border border-solid border-gray-300 dark:border-slate-600'>
            {children}

        </div>
    )
}
