import React, { useState } from 'react'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar'
import Sidebar from '../Sidebar/Sidebar'
import MobieMenu from './MobileMenu/MobieMenu'

export default function Header() {
    const [isShowMobileMenu,setIsShowMobileMenu] = useState(false)
    function showMobileMenuHandler(){
        setIsShowMobileMenu(prevS => !prevS)
    }
    return (
        <div className='header fixed z-10 top-0 right-0 left-0'>
            <Topbar showMobileMenuHandler={showMobileMenuHandler}/>
            <Navbar/>

                <div className={`${isShowMobileMenu ? "open-menu-mobile overflow-y-auto  pointer-events-auto":"overflow-hidden h-0  pointer-events-none"} lg:hidden  transition-all   duration-500`}>
                  <MobieMenu/>
                </div>

        </div>
    )
}
