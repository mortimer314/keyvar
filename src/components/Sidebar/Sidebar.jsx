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

        <div className={`sidebar transition ease-linear fixed  bottom-0 lg:block hidden  ${language ==="fa"?"border-l":"border-r"} border-solid
                      ${theme === "dark" ?
                          ((verticalNavbarTheme === "default") ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-700") :
                          ((verticalNavbarTheme === "default") ? "bg-gray-50 border-gray-300" : "bg-slate-900 border-gray-700") }

                      ${horizentalNavbarShape === "slim" ? "h-[calc(100vh-28px)]" : "h-[calc(100vh-64px)]"}
                      ${language === "fa" && isShowCustimization ? "pr-[17px]" : "pr-0"}
                      ${language === "fa" ? "right-0" : "left-0"}`}
        >

          <div className={`transition-all ${collapsed ? "w-[255px]" : "w-16"} flex flex-col h-full`}>
            <div className="h-full">Sidebar</div>

            <div className=""
              onClick={() => collapsedHandler(prevS => !prevS)}>collapse btn</div>
          </div>

        </div>
      }


    </>
  )
}
