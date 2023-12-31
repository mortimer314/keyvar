import React, { useContext } from 'react'
import CustomizeContext from '../../../context/costomizeContext'

export default function ChartBoxHeader({ title, subtitle, tolerancs = undefined, mainValue = undefined }) {
    const { language } = useContext(CustomizeContext)
    const isLnaguageFa = language === "fa"

    return (
        <div className='flex justify-between'>
            <div className="space-y-0.5">
                <h4 className='flex items-center gap-x-2'>
                    <div className='text-base font-bold text-gray-800/95 dark:text-white'>{title[language]}</div>
                    {tolerancs !== undefined ?
                        <div className= {`${isLnaguageFa ? "pt-1" : ""} ltr-dir h-5 text-xs   tracking-widest font-bold px-1.5 flex-center gap-1 rounded-full border border-solid border-orange-500 bg-orange-100 text-orange-700 dark:border-orange-400/80 dark:bg-orange-100/10 dark:text-yellow-600 `}>
                            {tolerancs} %
                        </div> : ""
                    }
                </h4>
                <h5 className='text-gray-600 dark:text-gray-400 text-xs lg:text-sm'>{subtitle[language]}</h5>
            </div>
            {
                mainValue ?
                <div className='text-xl font-bold text-gray-800/95 dark:text-white/80'>{mainValue.toLocaleString()}</div>: ""
            }
        </div>
    )
}
