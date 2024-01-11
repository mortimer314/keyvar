import React, { useContext, useEffect, useRef, useState } from 'react'
import CustomizeContext from '../../context/costomizeContext'

export default function NotificationItem() {
    const { language } = useContext(CustomizeContext)
    const isLangugeFa = language === "fa"
    return (
        <div className='notification__item px-6 lg:px-10 flex items-center justify-between'>

            <div className="notification__item-content h-full flex py-6  gap-x-5 px-1.5">
                <div className="h-full">
                    <div className="notification__user-img notification__user-img--online w-10 h-10 rounded-full 
                                 flex-center m-auto border border-solid border-gray-300 dark:border-gray-500">
                        <img className='w-full h-full rounded-full' src="https://mortimer314.github.io/files/src/assets/ali.jpg" alt="" />
                    </div>
                </div>
                <div className="notification__details space-y-1">
                    <div className="notification__username text-black dark:text-slate-100 font-DanaMedium text-xs ">Ali Jalil</div>
                    <div className="space-y-2">
                        <div className="notification__type text-xs  flex items-center gap-x-2">
                            <span className='notification__type-img '>👍</span>
                            <span className='notification__type-text  dark:text-slate-300'>{isLangugeFa ? "نظر شما را پسندید." : "Liked your comment."}</span>
                            <span className='notification__type-time  dark:text-slate-600'>20m</span>

                        </div>
                        <div className="notification__date flex tems-center gap-x-2 text-xs text-gray-700  dark:text-slate-400">
                            <span className='notification__type-img flex-center'>
                                <svg className='w-3 h-3'>
                                    <use href='#clock-icon'></use>
                                </svg>
                            </span>
                            <span className='notification__type-text '><span className='font-bold'>9:11 AM</span> August 7,2023</span>
                        </div>
                    </div>
                </div>
            </div>
            <MarkNotification isLangugeFa={isLangugeFa}/>

        </div>
    )
}



function MarkNotification({isLangugeFa}) {
    const [showMarkerContent, setShowMarkerContent] = useState(false)

    const refBtnShowMarker = useRef(null)
    const refIsShowMarkerContent = useRef(false)

    const showMarkerContentHandler = (event) => {
        refIsShowMarkerContent.current = !refIsShowMarkerContent.current
        setShowMarkerContent(prevS => !prevS)
    }

    const closeMarkerContent = () => {
        refIsShowMarkerContent.current = false
        setShowMarkerContent(false)

    }


    const closeMarkerHandler = event => {
        if (!refBtnShowMarker.current.contains(event.target)) {
            closeMarkerContent()
        }
    }

    useEffect(() => {
        window.addEventListener("click", closeMarkerHandler)

        return () => {
            window.removeEventListener("click", closeMarkerHandler)
        }
    }, [])
    return (
        <div className=" relative">
            <button
                ref={refBtnShowMarker}
                onClick={showMarkerContentHandler}
                className='marker-btn flex-center m-5 w-8 h-6 text-slate-500 dark:text-gray-300 transition-all rounded-md hover:border border-solid border-slate-400/80 dark:border-slate-600' >
                <svg className='w-3 h-3'>
                    <use href='#etc-icon'></use>
                </svg>
            </button>

            <div className={`${refIsShowMarkerContent.current ?
                "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"} 
                 absolute w-fit whitespace-nowrap z-[0] end-6 top-12 py-2 rounded-md bg-white dark:bg-slate-800 border border-solid border-gray-300 dark:border-slate-600
                 
                 `}>
                <a href="#" className='flex  items-center transition-all justify-start text-sm py-1 px-3 w-full text-slate-600/90 hover:text-slate-700 dark:text-slate-300/80 hover:dark:text-slate-100 hover:bg-slate-200 hover:dark:bg-slate-600'>
                    {isLangugeFa ? "خوانده شد." : "Mark as unread"}
                </a>
            </div>
        </div>
    )
}