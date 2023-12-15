import React from 'react'
import { useContext } from 'react'
import { Outlet, Route, Routes, Link, useRoutes } from 'react-router-dom'

import CustomizeContext from '../../context/costomizeContext'
import Notification from "./../Notifications/Notifications"
import Home from "./../Home/Home"
import MainContentFooter from '../MainContentFooter/MainContentFooter'

// import routes from '../../routes'



export default function MainContent({ collapsed }) {
  // const router = useRoutes(routes)
  const {
    language,
    isShowCustimization,
    theme,
    navigationType,
    verticalNavbarTheme,
    horizentalNavbarTheme,
    horizentalNavbarShape,
    resetSetting
  } = useContext(CustomizeContext)
  return (
    <div className={`${language === "fa" && isShowCustimization ? "md:pr-[1em]" : "md:pr-0"}`}>

      <div className={`main transition ease-linear bg-gray-50 dark:bg-slate-950 w-full overflow-y-auto 
                        
                      ${horizentalNavbarShape === "slim" ? " pt-7" : " pt-16"}
                      ${navigationType === "dual" ? " lg:pt-[118px]" : (horizentalNavbarShape === "slim" ? " lg:pt-7" : " lg:pt-16")}
                      ${(navigationType === "vertical" || navigationType === "combo") ?
          (language === "fa" ? (collapsed ? "px-0 lg:pr-[255px]" : "px-0 lg:pr-16") : (collapsed ? "px-0 lg:pl-[255px]" : "px-0 lg:pl-16")) : "p-0"}`}>




        <Routes>
          <Route path='/keyvar/' element={<Home />} />
          <Route path='/keyvar/notifications' element={<Notification />} />
        </Routes>

        {/* {router} */}

        <Outlet />

<MainContentFooter/>
        

      </div>
    </div>
  )
}
