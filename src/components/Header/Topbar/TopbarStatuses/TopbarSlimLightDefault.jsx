import React from 'react'
import { Link } from 'react-router-dom'


export default function TopbarSlimLightDefault({ isFadeScroll, isLanguageFa ,navigationType}) {
  return (
    < >

    <div className={`topbar  transition ease-linear  flex-center border-b border-solid h-7 lg:h-7 bg-gray-50 border-gray-300
        ${isFadeScroll ? "pr-[17px]" : "pr-0"}`}>
        <div className="topbar-content flex items-center justify-between w-full px-6 lg:px-10">
            <div className="logo-wrapper flex-center gap-x-2  text-gray-700">
                <div className="lg:hidden">
                    <svg className='w-6 h-6'>
                        <use href='#bars-3'></use>
                    </svg>
                </div>
                <a to='/' className="flex-center gap-x-2 ">
                    <div className="logo-img-wrapper ">
                        <img className='h-5 -mt-0.5' src="./src/assets/images/logo1.png" alt="" />
                    </div>
                    <div className="logo-title font-DanaMedium text-lg font-bold mt-1 ">
                        {isLanguageFa ? "کیوار" : "keyvar"}
                    </div>
                </a>
            </div>
            <div className="middle hidden md:block">
                <div className="topbar__search-wrapper">
                    {(navigationType === "vertical" || navigationType === "dual") ? "topbar__search-wrapper" : ""}
                </div>
                <div className="topbar__navbar-wrapper">
                    {(navigationType === "horizental" || navigationType === "combo") ? "horizental__navbar-wrapper" : ""}
                </div>
            </div>
            <div className="tools-navbar">tools-navbar</div>
        </div>
    </div>

</>
  )
}
