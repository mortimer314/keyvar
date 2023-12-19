import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function SubMenuTitle({ SubMenu, id, href, title, isSubMenuOpen, subSubMenus, icon, collapsed, theme, verticalNavbarTheme, isLnaguageFa }) {
    let titleClasses = (theme === "dark" ?
        ((verticalNavbarTheme === "default") ? "text-slate-300  hover:bg-slate-700 hover:text-slate-50" : "text-slate-400  hover:bg-slate-800 hover:text-slate-50") :
        ((verticalNavbarTheme === "default") ? "text-slate-600  hover:bg-gray-200 " : "text-slate-400  hover:bg-slate-800 hover:text-slate-50"))

    return (
        <>
            {collapsed ?
                <NavLink 
                // style={({ isActive }) => {
                //     return {
                      
                //       color: isActive  ? "aqua" : ""
                    
                //     };
                //   }} 
                  to={href === "" ? true : href} className={`flex items-center text-sm rounded-lg min-w-fit mx-4 py-1 px-1 transition-all  ${titleClasses}`}>
                    {collapsed ?
                        (!isLnaguageFa ?
                            <div className='ms-11 w-2.5 h-2.5 flex-center'>
                                {subSubMenus.length !== 0 ?
                                    <div className={`${!isSubMenuOpen ? "rotate-0" : "rotate-90"} transition-all duration-200  w-full`}>
                                        <svg className='w-2.5 h-2.5'>
                                            <use href='#arrow-right-icon'></use>
                                        </svg>
                                    </div> : ""}
                            </div> :
                            <div className='ms-11 w-2.5 h-2.5 flex-center'>
                                {subSubMenus.length !== 0 ?
                                    <div className={`${!isSubMenuOpen ? "rotate-180" : "rotate-90"} transition-all duration-200 w-full`}>
                                        <svg className='w-2.5 h-2.5'>
                                            <use href='#arrow-right-icon'></use>
                                        </svg>
                                    </div> : ""}
                            </div>) : ""
                    }


                    {collapsed ?
                        <div className='ms-1.5 text-xs h-6 flex items-center'>
                            {title}
                        </div> : ""
                    }

                </NavLink> :
                <NavLink to={href} className={` flex z-30 items-center  min-w-fit  transition-all  
                                    ${titleClasses} 
                                    ${id === 2 ?" border-t border-solid border-gray-300 dark:border-slate-600":""}
                                    ${id === 1 ? "h-12 px-3 font-bold hover:bg-transparent dark:border-inherit" : "py-1 px-4 text-sm"}`}>
                    {!collapsed && id !== 1 ?
                        (!isLnaguageFa ?
                            <div className='w-2.5 h-2.5 flex-center'>
                                {subSubMenus.length !== 0 ?
                                    <div className={`${!isSubMenuOpen ? "rotate-0" : "rotate-90"} transition-all duration-200  w-full`}>
                                        <svg className='w-2.5 h-2.5'>
                                            <use href='#arrow-right-icon'></use>
                                        </svg>
                                    </div> : ""}
                            </div> :
                            <div className='w-2.5 h-2.5 flex-center'>
                                {subSubMenus.length !== 0 ?
                                    <div className={`${!isSubMenuOpen ? "rotate-180" : "rotate-90"} transition-all duration-200 w-full`}>
                                        <svg className='w-2.5 h-2.5'>
                                            <use href='#arrow-right-icon'></use>
                                        </svg>
                                    </div> : ""}
                            </div>) : ""
                    }



                    <div className='ms-1.5 text-xs h-6 flex items-center'>
                        {title}
                    </div>


                </NavLink>
            }

        </>
    )
}
