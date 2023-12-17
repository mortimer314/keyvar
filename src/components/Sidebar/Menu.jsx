import React, { useEffect, useRef, useState } from 'react'
import MenuTitle from './MenuTitle'
import MenuContent from './MenuContent'

export default function Menu({ menu, collapsed, theme, verticalNavbarTheme }) {

    const [isOpenMenuContent, setIsOpenMenuContent] = useState(false)
    const refBtnElem = useRef(null)
    const refIsOpenMenuContent = useRef(false)

    function openMenuContent() {
        setIsOpenMenuContent(prevS => !prevS)
        refIsOpenMenuContent.current = !refIsOpenMenuContent.current
    }
    function closeMenuContent() {
        setIsOpenMenuContent(false)
    }

    function generateCloseMenuContent(event) {
        console.log(!refBtnElem.current.contains(event.target) && event.target.className.includes("menu-title"))
    }

    useEffect(() => {
        window.addEventListener("click", generateCloseMenuContent)
        return () => {
            window.removeEventListener("click", generateCloseMenuContent)
        }
    }, [])
    

    return (
        <div>
            <div className="menu-title" ref={refBtnElem} onClick={openMenuContent}>
                <MenuTitle collapsed={collapsed} theme={theme} verticalNavbarTheme={verticalNavbarTheme} icon={menu.icon} href={menu.href} title={menu.title} isThereSubMenus={() => (menu.subMenus.length !== 0)} />
            </div>
            <div className={`menu-content transition-all  ${refIsOpenMenuContent.current ? "max-h-[100px] overflow-visible" : "max-h-0 overflow-hidden"}`}>
                <MenuContent />
            </div>

        </div>
    )
}
