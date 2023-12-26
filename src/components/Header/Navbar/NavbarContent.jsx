import React, { useContext, useEffect, useRef, useState } from 'react'
import CustomizeContext from '../../../context/costomizeContext'
import NavbarItemTitle from './NavbarItemTitle'
import NavbarItemWrapperContent from './NavbarItemWrapperContent'
import NavbarItemContent from './NavbarItemContent'
import {data} from "./../../../../data.js"
export default function NavbarContent() {

    const [dataNavbar, setDataNavbar] = useState()
    const refArrayOfMenuTitleElems = useRef([])
    const refLastSelectedMenuTitleElems = useState(null)
    const [reRenderNavbar, setReRenderNavbar] = useState(true)
    const [selectedMenu, setSelectedMenu] = useState(null)

    const {
        collapsed,
        collapsedHandler,
        language,
        isShowCustimization,
        theme,
        navigationType,
        verticalNavbarTheme,
        horizentalNavbarTheme,
        horizentalNavbarShape,
        resetSetting
    } = useContext(CustomizeContext)

    let isDual = navigationType === "dual"
    let isSlim = horizentalNavbarShape === "slim"
    let isLanguageFa = language === "fa"
    const isDarkTheme = theme === "dark"
    const isHorizentalThemeDefault = horizentalNavbarTheme === "default-horizental-theme"

    useEffect(() => {
        // fetch(`http://localhost:3000/${language}-navbar`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setDataNavbar(data)

        //         refArrayOfMenuTitleElems.current = data.map((item, index) => {
        //             let subArray = item.menus.map((subItem, subIndex) => 0)
        //             return subArray
        //         })
        //     })

        let mainData = data[`${language}-navbar`]
        refArrayOfMenuTitleElems.current = mainData.map((item, index) => {
                let subx = item.menus.map((subItem, subIndex) => 0)
                return subx
              })
          
              setDataNavbar(mainData)
    }, [language])



    return (
        <div className='  text-center'>

            <ul className="horizental__navbar flex items-center ">

                {Boolean(dataNavbar) && dataNavbar.map(item =>
                    <li key={item.id} className="horizental__navbar-item group relative">
                        <NavbarItemTitle isDual={isDual} isSlim={isSlim} {...item} />

                        <div className={`horizental__navbar-menu group-hover:block hidden absolute 
                            ${isDual ? 'pt-5' : (isSlim ? "-pt-0 top-0" : "pt-6")}
                            
                 `}>
                            <NavbarItemWrapperContent  theme={theme} navigationType={navigationType} {...item} isDual={isDual} isSlim={isSlim} isLanguageFa={isLanguageFa}>
                                <NavbarItemContent  menus={item.menus}  {...item} isLanguageFa={isLanguageFa} />
                            </NavbarItemWrapperContent>


                        </div>
                    </li>
                )

                }
            </ul>




        </div>
    )
}
