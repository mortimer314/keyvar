import React, { useContext, useEffect, useRef, useState } from 'react'
import MenuHeaders from '../../Sidebar/MenuHeaders'
import MenuTitle from '../../Sidebar/MenuTitle'
import MenuContent from '../../Sidebar/MenuContent'
import CustomizeContext from '../../../context/costomizeContext'

export default function MobieMenu() {
       
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
    fetch(`http://localhost:3000/${language}-menuHeaders`)
      .then(res => res.json())
      .then(data => {
        setDataSidebar(data)

        refArrayOfMenuTitleElems.current = data.map((item, index) => {
          let subx = item.menus.map((subItem, subIndex) => 0)
          return subx
        })
      })
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


        <div className={` sidebar  transition-all ease-linear  border-solid  w-full
              ${true ? (horizentalNavbarShape === "slim" ? "top-7   bottom-0 " : "top-16    bottom-0 ") : (horizentalNavbarShape === "slim" ? "pt-7 w-16  pb-32" : "pt-16 w-16  pb-96")}
              ${language === "fa" ? "border-l" : "border-r"}
                            ${theme === "dark" ?
            ((verticalNavbarTheme === "default") ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-700") :
            ((verticalNavbarTheme === "default") ? "bg-white border-gray-300" : "bg-slate-900 border-gray-700")}
                            ${language === "fa" && isShowCustimization ? "pr-[17px]" : "pr-0"}  `}
        >

          <div className={`sidebar-items pb-4
           `}>

            {
              dataSidebar ?
                dataSidebar.map((item, index) =>
                  <div className='sidebar_item' key={item.id}>
                    {
                      item.id !== 1 && <MenuHeaders theme={theme} verticalNavbarTheme={verticalNavbarTheme} icon={undefined} title={item.title} collapsed={true} language={language} />
                    }
                    <div className="menus">
                      {
                        item.menus.length !== 0 &&
                        item.menus.map((menu, indexInner) =>

                          <div className={collapsed ? "menu " : "menu flex flex-col group relative"} key={menu.id}>

                            <div className={`menu-title `} ref={(element) => { refArrayOfMenuTitleElems.current[index][indexInner] = element }}
                              onClick={event => generateOpeningMenuContent(event, index, indexInner)}>
                              <MenuTitle isLnaguageFa={isLnaguageFa} isThereSubMenus={menu.subMenus.length !== 1} isSubMenuOpen={(selectedMenu === refArrayOfMenuTitleElems.current[index][indexInner])} collapsed={true} theme={theme} verticalNavbarTheme={verticalNavbarTheme} icon={menu.icon} href={menu.href} title={menu.title} />
                            </div>

                            <div className={`menu-content transition-all 


                                   ${ ((selectedMenu === refArrayOfMenuTitleElems.current[index][indexInner]) ?
                                "max-h-[1000px] overflow-visible" :
                                "max-h-0 overflow-hidden")}
                                `}>
                              <MenuContent isLnaguageFa={isLnaguageFa} subMenus={menu.subMenus} collapsed={true} theme={theme} verticalNavbarTheme={verticalNavbarTheme} />
                            </div>

                          </div>
                        )
                      }
                    </div>

                  </div>)
                : ""
            }

          </div>


        </div>

      }


    </>
    // <div className=""></div>
  )
      }
      
