import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function MenuTitle({ href, title, isSubMenuOpen, isThereSubMenus, icon, collapsed, theme, verticalNavbarTheme }) {
    let titleClasses = (theme === "dark" ?
        ((verticalNavbarTheme === "default") ? "text-slate-300  hover:bg-slate-700 hover:text-slate-50" : "text-slate-400  hover:bg-slate-800 hover:text-slate-50") :
        ((verticalNavbarTheme === "default") ? "text-slate-600  hover:bg-gray-100 " : "text-slate-400  hover:bg-slate-800 hover:text-slate-50"))

    let hrClasses = (theme === "dark" ?
        ((verticalNavbarTheme === "default") ? "border-slate-400" : "border-slate-400") :
        ((verticalNavbarTheme === "default") ? "border-gray-400/70" : "border-slate-400"))

    return (
        <NavLink to={href} className={`flex items-center text-sm rounded-md py-1 transition-all  ${titleClasses}`}>
            {collapsed &&
                <div className='me-0.5 w-2.5 h-2.5 flex-center'>
                    {isThereSubMenus &&
                        <div className={`${!isSubMenuOpen ? "rotate-0" : "rotate-90"} transition-all w-full`}>
                            <svg className='w-2.5 h-2.5'>
                                <use href='#arrow-right-icon'></use>
                            </svg>
                        </div>}
                </div>
            }

            <div className=''>
                <svg className='w-3.5 h-3.5'>
                    <use href='#arrow-path'></use>
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
