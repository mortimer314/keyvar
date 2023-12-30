import React from 'react'

export default function ChartBoxWraper({ children }) {
    return (
        <div className='p-5 bg-white dark:bg-slate-900 rounded-lg border border-solid border-gray-300 dark:border-slate-600'>
            {children}

        </div>
    )
}
