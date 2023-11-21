import React, { useState, memo, useContext } from 'react'
import CustomizeContext from '../../context/costomizeContext'

const CustomizeItem = memo(({ title, items = [], name, onChangeHandler, mainValue }) => {
    const [selectedOption, setSelectedOption] = useState(mainValue)

    const customizeContext = useContext(CustomizeContext)

    return (
        <>
            <div className="sidebar-item font-semibold items-center justify-center  w-full py-6 px-5 rounded-md border border-solid border-slate-300  bg-slate-100/80">
                <h2 className="sidebar-item__title mb-2.5 font-MorabbaLight text-slate-600"> {title}</h2>
                <div className="grid grid-cols-2 gap-x-2.5 gap-y-4">
                    {items.length !== 0 &&
                        items.map(item =>
                            <div key={item.itemId} className="relative">
                                <input
                                    className='absolute opacity-0 invisible pointer-events-none'
                                    onChange={() => {
                                        setSelectedOption(item.value)
                                        onChangeHandler(item.value)
                                    }
                                    }
                                    checked={item.value === selectedOption ? true : false}
                                    type="radio"
                                    name={name}
                                    id={item.itemId}
                                    value={item.value} />
                                <label className='cursor-pointer' htmlFor={`${item.itemId}`}>
                                    <div className="">
                                        <img src={`./src/assets/images/${customizeContext.theme === "dark"?  item.darkCover : item.cover }`} className={`rounded-md border-2 border-solid ${item.value === selectedOption ? 'border-blue-500  ' : " border-gray-300"} `} alt="" />
                                    </div>
                                    <div className="flex gap-x-2 items-center mt-2">
                                        <div className={`w-3.5 h-3.5 rounded-full border-solid ${item.value === selectedOption ? 'border-blue-500  border-4' : "border-[3px] border-gray-400"} `}></div>
                                        <div className='text-xs text-slate-600'>{item.title}</div>
                                    </div>
                                </label>
                            </div>)
                    }


                </div>
            </div>
        </>
    )
}
)


export default CustomizeItem