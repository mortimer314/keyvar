import React, { useEffect, useState } from 'react'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'
import MobieMenu from './MobileMenu/MobieMenu'

export default function Header() {
    const [isSlim ,setIsSlim] = useState()
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false)
    function showMobileMenuHandler() {
        setIsShowMobileMenu(prevS => !prevS)
    }
    
    useEffect(()=>{
        setIsSlim(localStorage.horizentalNavbarShape === "slim")
        console.log("x")
    },[localStorage.horizentalNavbarShape])

    return (
        <div className='header fixed z-10 top-0 right-0 left-0'>

            <Topbar showMobileMenuHandler={showMobileMenuHandler} />
            
            <Navbar />

            <div className={`${isShowMobileMenu ? `${isSlim ? "h-[calc(100vh-28px)]":"h-[calc(100vh-64px)]"}  md:h-screen overflow-y-auto  pointer-events-auto` : "overflow-hidden h-0  pointer-events-none"} lg:hidden  transition-all   duration-700`}>
                <MobieMenu />
            </div>

        </div>
    )
}
