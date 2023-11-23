import React, { useState, memo, useContext } from 'react'
import CustomizeContext from '../../context/costomizeContext'

const CustomizeItem = (({ title, items = [], name, onChangeHandler, mainValue }) => {
    const [selectedOption, setSelectedOption] = useState(mainValue)

    const customizeContext = useContext(CustomizeContext)
    console.log(mainValue)
    return (
        <>
            <div className={`sidebar-item font-semibold items-center 
            justify-center  w-full py-6 px-5 rounded-md border border-solid border-gray-300  dark:border-slate-700
             bg-slate-100/80 dark:bg-slate-950`}>
                <h2 className={`sidebar-item__title mb-2.5 font-MorabbaLight text-slate-800 dark:text-gray-200
                                ${(customizeContext.navigationType === "dual" && name === "horizental-navbar-shape") && "opacity-50"}
                                ${((customizeContext.navigationType === "horizental" || customizeContext.navigationType === "dual") && name === "vertical-navbar-theme") && "opacity-50"}
                `}> {title}</h2>

                <div className={`grid grid-cols-2 gap-x-2.5 gap-y-4
                    ${(customizeContext.navigationType === "dual" && name === "horizental-navbar-shape") && "opacity-50"}
                    ${((customizeContext.navigationType === "horizental" || customizeContext.navigationType === "dual") && name === "vertical-navbar-theme") && "opacity-50"}
                `}>
                    {items.length !== 0 &&
                        items.map(item =>
                            <div key={item.itemId} className="relative"
                                onClick={() => {

                                    console.log(mainValue)
                                }}
                            >
                                <input
                                    className='absolute opacity-0 invisible pointer-events-none'
                                    onChange={() => {
                                        setSelectedOption(item.value)
                                        onChangeHandler(item.value)
                                        console.log(item, mainValue)
                                    }}
                                    disabled={
                                        (customizeContext.navigationType === "dual" && name === "horizental-navbar-shape") ||
                                        ((customizeContext.navigationType === "horizental" || customizeContext.navigationType === "dual") && name === "vertical-navbar-theme")
                                    }
                                    checked={item.value === mainValue ? true : false}
                                    type="radio"
                                    name={name}
                                    id={item.itemId}
                                    value={item.value} />
                                <label className={` ${(customizeContext.navigationType === "dual" && name === "horizental-navbar-shape") ||
                                                    ((customizeContext.navigationType === "horizental" || customizeContext.navigationType === "dual") && name === "vertical-navbar-theme")
                                                    ? "cursor-default" : "cursor-pointer"} `} 
                                                htmlFor={`${item.itemId}`}>
                                                    
                                    <div className="">
                                        <img src={`./src/assets/images/${customizeContext.theme === "dark" ? item.darkCover : item.cover}`}
                                            className={`rounded-md shadow-inner border-2 w-full border-solid 
                                            ${(!(customizeContext.navigationType === "dual" && name === "horizental-navbar-shape") &&
                                                    !((customizeContext.navigationType === "horizental" || customizeContext.navigationType === "dual") && name === "vertical-navbar-theme")
                                                )
                                                    ? (item.value === mainValue ? 'dark:border-blue-400/70 border-blue-500 ' : " dark:border-slate-700 border-gray-300") :
                                                    "dark:border-slate-700 border-gray-300"
                                                } `} alt="" />

                                    </div>
                                    <div className="flex gap-x-2 items-center mt-2">
                                        <div className={`w-3.5 h-3.5 rounded-full border-solid 
                                        ${(!(customizeContext.navigationType === "dual" && name === "horizental-navbar-shape") &&
                                                !((customizeContext.navigationType === "horizental" || customizeContext.navigationType === "dual") && name === "vertical-navbar-theme")
                                            )
                                                ? (item.value === mainValue ? 'border-blue-500  border-4' : "border-2 border-gray-400") : "border-2 border-gray-400"} `}></div>
                                        <div className='text-xs text-slate-600 dark:text-gray-400'>{item.title}</div>
                                    </div>
                                </label>
                            </div>)
                    }


                </div>
            </div >
        </>
    )
}
)


export default CustomizeItem