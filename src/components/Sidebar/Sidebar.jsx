import React, { useContext, useState } from 'react'
import CustomizeContext from '../../context/costomizeContext'

export default function Sidebar({ collapsed, collapsedHandler }) {
  const {
    language,
    isShowCustimization,
    theme,
    navigationType,
    verticalNavbarTheme,
    horizentalNavbarTheme,
    horizentalNavbarShape,
    resetSetting
  } = useContext(CustomizeContext)

  return (
    <>
      {
        (navigationType === "vertical" || navigationType === "combo") &&

        <div className={`sidebar transition ease-linear fixed  bottom-0 lg:block hidden  ${language === "fa" ? "border-l" : "border-r"} border-solid
                      ${theme === "dark" ?
            ((verticalNavbarTheme === "default") ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-700") :
            ((verticalNavbarTheme === "default") ? "bg-gray-50 border-gray-300" : "bg-slate-900 border-gray-700")}

                      ${horizentalNavbarShape === "slim" ? "h-[calc(100vh-28px)]" : "h-[calc(100vh-64px)]"}
                      ${language === "fa" && isShowCustimization ? "pr-[17px]" : "pr-0"}
                      ${language === "fa" ? "right-0" : "left-0"}`}
        >

          <div className={`transition-all ${collapsed ? "w-[255px]" : "w-16"} flex flex-col h-full`}>
            <div className="h-full">Sidebar</div>

            <div className="h-[65px] flex-center transition-all font-medium  delay-75 text-gray-500 dark:text-slate-400 hover:text-gray-600 hover:dark:text-slate-200 border-t border-solid border-gray-400 dark:border-slate-600">
              <button className=" flex w-full p-5 text-sm gap-x-3 items-center"
                onClick={() => collapsedHandler(prevS => !prevS)}>
                {collapsed ?
                  <svg className="w-6 h-6">
                    <use href='#arrow-from'></use>
                  </svg> :
                  <svg className="w-6 h-6">
                    <use href='#arrow-to'></use>
                  </svg>}
                {collapsed &&
                  <span className={` whitespace-nowrap`}>
                    {language === "fa" ? "حالت نواری" : "Collapsed View"}
                  </span>
                }


              </button>
            </div>
          </div>

        </div>
      }


    </>
  )
}
