import React, { useContext } from 'react'
import CustomizeContext from '../../../context/costomizeContext'

export default function ChartBoxHeader({ title, subtitle, tolerancs, mainValue, }) {
    const { language } = useContext(CustomizeContext)
    const isLnaguageFa = language === "fa"

    return (
        <div className='flex justify-between'>
            <div className="space-y-0.5">
                <h4 className='flex items-center gap-x-2'>
                    <div className='text-base font-bold text-gray-800/95 dark:text-white'>{title[language]}</div>
                    <div className='ltr-dir h-5 text-xs/3 font-bold px-2 flex-center gap-1 rounded-full border border-solid border-orange-500 bg-orange-100 text-orange-700'>{tolerancs} %</div>
                </h4>
                <h5 className='text-gray-600 dark:text-gray-400 text-xs lg:text-sm'>{subtitle[language]}</h5>
            </div>
            <div className=''>{mainValue.toLocaleString()}</div>
        </div>
    )
}
