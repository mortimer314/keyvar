import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function SubSubMenuTitle({ href, title, isSubMenuOpen, subSubMenus, icon, collapsed, theme, verticalNavbarTheme, isLnaguageFa }) {
    let titleClasses = (theme === "dark" ?
        ((verticalNavbarTheme === "default") ? "text-slate-300  hover:bg-slate-700 hover:text-slate-50" : "text-slate-400  hover:bg-slate-800 hover:text-slate-50") :
        ((verticalNavbarTheme === "default") ? "text-slate-600  hover:bg-gray-200 " : "text-slate-400  hover:bg-slate-800 hover:text-slate-50"))


    return (
        <NavLink 
        // style={({ isActive }) => {
        //     return {
              
        //       color: !isActive  ? "aqua" : ""
            
        //     } }} 
            to={href === "" ? true : href} className={` flex items-center text-sm  min-w-fit  py-1  transition-all 
        ${collapsed ? "mx-4 rounded-lg px-1":" px-5"}
        ${titleClasses}`}>
            {collapsed ?
                <div className='ms-11 w-2.5 h-2.5 flex-center'>
                </div> :""
            }
            {collapsed ?
                <div className='ms-1.5 text-xs h-6 flex items-center'>
                    {title}
                </div>:
                <div className='ms-1.5 text-xs h-6 flex items-center'>
                            {title}
                        </div>
            }

        </NavLink>
    )
}
