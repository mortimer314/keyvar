import React from 'react'
import { useContext } from 'react'
import CustomizeContext from '../../context/costomizeContext'

export default function Topbar() {
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
    // "bg-slate-700 dr:bg-gray-50" : "bg-slate-700 dr:bg-slate-800"
    <div className={`topbar  transition ease-linear  flex-center border-b border-solid
                    ${theme === "dark"? 
                      ((horizentalNavbarTheme === "default-horizental-theme")? "bg-slate-800 border-slate-700":"bg-slate-900 border-slate-700"):
                      ((horizentalNavbarTheme === "default-horizental-theme")? "bg-gray-50 border-gray-300":"bg-slate-900 border-gray-700")
                    }

                    ${console.log(horizentalNavbarTheme)}
                    ${(horizentalNavbarShape === "slim" && navigationType !== "dual") ? "lg:h-7" : "lg:h-16"}
                    ${(horizentalNavbarShape === "slim") ? "h-7" : "h-16"}
                    ${language === "fa" && isShowCustimization ? "pr-[17px]" : "pr-0"}`}>

      <div className="topbar-content flex items-center justify-between w-full px-6 lg:px-10">
        <div className="logo-wrapper flex-center gap-x-2">
          <div className="">=</div>
          <div className="">
            <div className="logo-img-wrapper ">
              <img src="" alt="" />
            </div>
            <div className="logo-title">{language === "fa" ? "کیوار" : "keyvar"}</div>
          </div>
        </div>
        <div className="middle hidden md:block">
          <div className="topbar__search-wrapper">
            {horizentalNavbarShape === "slim" ? ((navigationType === "dual") ? "topbar__search-wrapper" : "") : (navigationType === "vertical" || navigationType === "dual") ? "topbar__search-wrapper" : ""}
          </div>
          <div className="topbar__navbar-wrapper">
            {horizentalNavbarShape === "slim" ?
              (!(navigationType === "vertical" || navigationType === "dual") ? "topbar__navbar-wrapper" : "") :
              (navigationType === "horizental" || navigationType === "combo") ? "horizental__navbar-wrapper" : ""}
          </div>
        </div>
        <div className="tools-navbar">tools-navbar</div>
      </div>
    </div>
  )
}
