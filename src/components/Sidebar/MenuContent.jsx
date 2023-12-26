import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubMenuTitle from './SubMenuTitle'
import SubSubMenuTitle from './SubSubMenuTitle'

export default function MenuContent({ isLnaguageFa, subMenus, collapsed, theme, verticalNavbarTheme }) {
    let titleClasses = (theme === "dark" ?
        ((verticalNavbarTheme === "default") ? "text-slate-300 border-slate-600 bg-slate-800 text-slate-50" : "text-slate-400 border-slate-700 bg-slate-900 text-slate-50") :
        ((verticalNavbarTheme === "default") ? "text-slate-600 border-slate-400/80 bg-white " : "text-slate-400 border-slate-700 bg-slate-900 text-slate-50"))

    return (
        <div className={`${!collapsed && (isLnaguageFa ? ` menu-content-right--hover ` : "menu-content--hover")}  ${titleClasses} `}>

            {collapsed ?
                subMenus.map((subMenu, index) => {
                    if (index) {
                        return <SubMenu key={subMenu.title} subMenu={subMenu} isLnaguageFa={isLnaguageFa}
                            collapsed={collapsed}
                            theme={theme}
                            verticalNavbarTheme={verticalNavbarTheme}
                        />
                    }
                }) :
                (<div  className="min-h-[48px] grid grid-cols-1 items-center rounded-lg overflow-hidden">
                    {
                        subMenus.map((subMenu, index) => {
                            return <SubMenu key={subMenu.id} subMenu={subMenu} isLnaguageFa={isLnaguageFa}
                                collapsed={collapsed}
                                theme={theme}
                                verticalNavbarTheme={verticalNavbarTheme}
                            />


                        })
                    }

                </div>)

            }

        </div>
    )
}


function SubMenu({ subMenu, isLnaguageFa, collapsed, theme, verticalNavbarTheme, }) {
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)
    function generateOpeningSubMenuCntent() {
        setIsOpenSubMenu(prevS => !prevS)
    }
    return (
        <div className=''>
            <div className="" onClick={generateOpeningSubMenuCntent}>
                <SubMenuTitle subMenu={subMenu} {...subMenu} isSubMenuOpen={isOpenSubMenu} isLnaguageFa={isLnaguageFa} collapsed={collapsed} theme={theme} verticalNavbarTheme={verticalNavbarTheme} />
            </div>
            <div className={`submenu-content transition-all duration-200 
            ${!isOpenSubMenu ? "overflow-hidden max-h-0" : "max-h-[700px] overflow-visible"}
            `}>
                {
                    subMenu.subSubMenus.map(subSubMenu => <div key={subSubMenu.title} className='[&>*]:font-MorabbaBold '>
                        <SubSubMenuTitle   {...subSubMenu} isLnaguageFa={isLnaguageFa} collapsed={collapsed} theme={theme} verticalNavbarTheme={verticalNavbarTheme} />
                    </div>
                    )
                }
            </div>
        </div>
    )
}

