import React, { useContext, useEffect, useRef, useState } from 'react'
import CustomizeContext from '../../context/costomizeContext'
import CollapseBtn from './CollapseBtn'
import MenuHeaders from './MenuHeaders'
import MenuTitle from './MenuTitle'
import Menu from './menu'
import MenuContent from './MenuContent'
import {data} from "./../../../data.js"

export default function Sidebar() {
  const [dataSidebar, setDataSidebar] = useState()
  const refArrayOfMenuTitleElems = useRef([])
  const refLastSelectedMenuTitleElems = useState(null)
  const [reRenderSidebar, setReRenderSidebar] = useState(true)
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

  useEffect(() => {
    // fetch(`http://localhost:3000/${language}-menuHeaders`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setDataSidebar(data)

    //     refArrayOfMenuTitleElems.current = data.map((item, index) => {
    //       let subx = item.menus.map((subItem, subIndex) => 0)
    //       return subx
    //     })
    //   })

    let mainData = data[`${language}-menuHeaders`]
    refArrayOfMenuTitleElems.current = mainData.map((item, index) => {
            let subx = item.menus.map((subItem, subIndex) => 0)
            return subx
          })
      
      setDataSidebar(mainData)
   
  }, [language])

  function generateOpeningMenuContent(event, index, indexInner) {
    if (selectedMenu === refArrayOfMenuTitleElems.current[index][indexInner]) {
      setSelectedMenu(null)
    } else {
      setSelectedMenu(refArrayOfMenuTitleElems.current[index][indexInner])
    }
  }
  let isLnaguageFa = language === "fa"
  return (
    <>
      {
        (navigationType === "vertical" || navigationType === "combo") &&

        <div className={` sidebar  transition-all ease-linear lg:block hidden border-solid 
              ${collapsed ? (horizentalNavbarShape === "slim" ? "top-7 w-[255px] h-fit fixed bottom-0 " : "top-16 w-[255px] h-fit fixed bottom-0 ") : (horizentalNavbarShape === "slim" ? "pt-7 w-16  pb-32" : "pt-16 w-16  pb-96")}
              ${collapsed && language === "fa" ? "right-0" : "left-0"}
              ${language === "fa" ? "border-l" : "border-r"}
                            ${theme === "dark" ?
            ((verticalNavbarTheme === "default") ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-700") :
            ((verticalNavbarTheme === "default") ? "bg-white border-gray-300" : "bg-slate-900 border-gray-700")}
                            ${language === "fa" && isShowCustimization ? "pr-[17px]" : "pr-0"}  `}
        >

          <div className={`sidebar-items py-4
           ${collapsed ? (horizentalNavbarShape === "slim" ? "h-[calc(100vh-92px)] overflow-y-auto mb-16" : "h-[calc(100vh-128px)] overflow-y-auto mb-16") : "pb-16"}`}>

            {
              dataSidebar ?
                dataSidebar.map((item, index) =>
                  <div className='sidebar_item' key={item.id}>
                    {
                      item.id !== 1 && <MenuHeaders theme={theme} verticalNavbarTheme={verticalNavbarTheme} icon={undefined} title={item.title} collapsed={collapsed} language={language} />
                    }
                    <div className="menus">
                      {
                        item.menus.length !== 0 &&
                        item.menus.map((menu, indexInner) =>

                          <div className={collapsed ? "menu " : "menu flex-center group relative"} key={menu.id}>

                            <div className={`menu-title `} ref={(element) => { refArrayOfMenuTitleElems.current[index][indexInner] = element }}
                              onClick={event => generateOpeningMenuContent(event, index, indexInner)}>
                              <MenuTitle isLnaguageFa={isLnaguageFa} isThereSubMenus={menu.subMenus.length !== 1} isSubMenuOpen={(selectedMenu === refArrayOfMenuTitleElems.current[index][indexInner])} collapsed={collapsed} theme={theme} verticalNavbarTheme={verticalNavbarTheme} icon={menu.icon} href={menu.href} title={menu.title} />
                            </div>

                            <div className={`menu-content transition-all 
                            ${collapsed ? "" : 'absolute  hidden -top-1 start-16 group-hover:block px-3'}


                                   ${collapsed ? ((selectedMenu === refArrayOfMenuTitleElems.current[index][indexInner]) ?
                                "max-h-[1000px] overflow-visible" :
                                "max-h-0 overflow-hidden") : ""}
                                `}>
                              <MenuContent isLnaguageFa={isLnaguageFa} subMenus={menu.subMenus} collapsed={collapsed} theme={theme} verticalNavbarTheme={verticalNavbarTheme} />
                            </div>

                          </div>
                        )
                      }
                    </div>

                  </div>)
                : ""
            }

          </div>
          <CollapseBtn theme={theme} verticalNavbarTheme={verticalNavbarTheme} language={language} collapsed={collapsed} collapsedHandler={collapsedHandler} />
        </div>
      }
    </>
  )
}
