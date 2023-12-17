import React from 'react'

export default function MenuHeaders({title,collapsed,theme,verticalNavbarTheme}) {

    let titleClasses = (theme === "dark" ?
    ((verticalNavbarTheme === "default") ? "text-slate-400" : "text-slate-400") :
    ((verticalNavbarTheme === "default") ? "text-gray-400" : "text-slate-400"))
   
    let hrClasses = (theme === "dark" ?
    ((verticalNavbarTheme === "default") ? "border-slate-400" : "border-slate-400") :
    ((verticalNavbarTheme === "default") ? "border-gray-400/70" : "border-slate-400"))


  return (
    <div className={`menu-headers-title flex items-center h-15 text-2xs  font-MorabbaMedium ${titleClasses}`}>
        
        {!collapsed ? 
        (<div className={`m-auto w-[50%] border-t border-solid  ${hrClasses}`}>  </div>) :
        ( <div className='px-2'>{title}</div>)}
    </div>
  )
}
