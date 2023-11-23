import React, { useContext, useEffect, useState } from 'react'
import CustomizeContext from '../../context/costomizeContext'

export default function CustomizeLanguage({ title, subtitle }) {

    const customizeContext = useContext(CustomizeContext)

    function delay(){
        setTimeout(()=>{
            customizeContext.changeLanguage()
        },800)
    }


    return (
        <>
            <div className="sidebar-item font-semibold items-center justify-center  w-full py-6 px-5 rounded-md border border-solid border-gray-300 dark:border-slate-600 ">

                <div className="flex justify-between items-start">
                    <div className="">
                        <h2 className="sidebar-item__title mb-2.5  text-gray-700 dark:text-gray-100"> {title}</h2>
                        <h3 className="sidebar-item__subtitle text-xs font-DanaMedium text-gray-500/80 dark:text-gray-400"> {subtitle}</h3>
                    </div>
                    <label className={`switch `}>
                        <input type="checkbox"  onChange={()=>{
                            delay()
                        }} />
                        <span className={`slider round `}></span>
                    </label>
                </div>
            </div>
        </>
    )
}
