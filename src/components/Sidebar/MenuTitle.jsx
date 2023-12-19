import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function MenuTitle({ href, title, isSubMenuOpen, isThereSubMenus, icon, collapsed, theme, verticalNavbarTheme, isLnaguageFa }) {
    let titleClasses = (theme === "dark" ?
        ((verticalNavbarTheme === "default") ? "text-slate-300  hover:bg-slate-700 hover:text-slate-50" : "text-slate-400  hover:bg-slate-800 hover:text-slate-50") :
        ((verticalNavbarTheme === "default") ? "text-slate-600  hover:bg-gray-200 " : "text-slate-400  hover:bg-slate-800 hover:text-slate-50"))

  
    return (
        <NavLink 
        // style={({ isActive }) => {
        //     return {
              
        //       color: isActive  ? "aqua" : ""
            
        //     };
        //   }} 
          to={href} className={`flex items-center text-sm rounded-lg min-w-fit mx-4 py-1 px-1 transition-all  ${titleClasses}
        
        `}>
            {collapsed &&
                (!isLnaguageFa ?
                    <div className='ms-2 w-2.5 h-2.5 flex-center'>
                        {isThereSubMenus ?
                            <div className={`${!isSubMenuOpen ? "rotate-0" : "rotate-90"} transition-all duration-200  w-full`}>
                                <svg className='w-2.5 h-2.5'>
                                    <use href='#arrow-right-icon'></use>
                                </svg>
                            </div> : ""}
                    </div> :
                    <div className='ms-2 w-2.5 h-2.5 flex-center'>
                        {isThereSubMenus ?
                            <div className={`${!isSubMenuOpen ? "rotate-180" : "rotate-90"} transition-all duration-200 w-full`}>
                                <svg className='w-2.5 h-2.5'>
                                    <use href='#arrow-right-icon'></use>
                                </svg>
                            </div> : ""}
                    </div>)
            }

            <div className={collapsed ? "p-1" : "p-2 "}>
                <svg className='w-4 h-4'>
                    <use href={`${icon}`}></use>
                </svg>
            </div>
            {collapsed &&
                <div className='ms-2'>
                    {title}
                </div>
            }

        </NavLink>
    )
}
