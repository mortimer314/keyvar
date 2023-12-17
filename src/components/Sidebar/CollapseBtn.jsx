import React from 'react'

export default function CollapseBtn({ collapsed, collapsedHandler, language, theme, verticalNavbarTheme }) {

  let titleClasses = (theme === "dark" ?
    ((verticalNavbarTheme === "default") ? "text-slate-400 bg-slate-800 border-slate-600 hover:text-slate-200 " : "text-slate-400 bg-slate-900 border-slate-600 hover:text-slate-200 ") :
    ((verticalNavbarTheme === "default") ? "text-gray-500 bg-white border-gray-300 hover:text-gray-700 " : "text-slate-400 bg-slate-900 border-slate-600 hover:text-slate-200 "))

  return (
    <div className={`colse-btn  bottom-0 right-0 left-0 transition-all  ${collapsed ? "w-[255px] absolute z-10":" w-[64px] fixed "} h-[65px] flex-center  font-medium ${titleClasses}
    delay-75   border-t  border-e border-solid`}>
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
  )
}
