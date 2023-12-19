import React from 'react'
import { useContext } from 'react'
import { Outlet, Route, Routes, Link, useRoutes } from 'react-router-dom'

import CustomizeContext from '../../context/costomizeContext'
import Notification from "./../Notifications/Notifications"
import Home from "./../Home/Home"
import MainContentFooter from '../MainContentFooter/MainContentFooter'
import Ecommerce from '../Ecommerce/Ecommerce'
import ProjectManagement from '../ProjectManagement/ProjectManagement'
import CRM from '../CRM/CRM'
import SocialFeed from '../SocialFeed/SocialFeed'

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
    <>
      <div className={`main-content w-full transition-all
        ${collapsed ? "h-full " : "min-h-[calc(100vh+160px)]"}
        ${language === "fa" && isShowCustimization ? "md:pr-[1em]" : "md:pr-0"}`}>

        <div className={`main transition ease-linear bg-gray-50 dark:bg-slate-950 w-full flex flex-col justify-between
                     
                     ${collapsed ? "min-h-[calc(100vh-64px)]" : " h-full"}
                    ${horizentalNavbarShape === "slim" ? " pt-7" : " pt-16"}
                    ${navigationType === "dual" ? " lg:pt-[118px]" : (horizentalNavbarShape === "slim" ? " lg:pt-7" : " lg:pt-16")}
                    ${(navigationType === "vertical" || navigationType === "combo") ?
            (language === "fa" ? (collapsed ? "px-0 lg:pr-[255px]" : "px-0 ") : (collapsed ? "px-0 lg:pl-[255px] " : "px-0 ")) : "p-0 "}`}>

          <div className={`flex flex-col justify-between 
            ${!collapsed && "h-full"}
            ${collapsed &&
              navigationType === "dual" ? " lg:min-h-[calc(100vh-118px)]" : (horizentalNavbarShape === "slim" ? "min-h-[calc(100vh-28px)]" : "min-h-[calc(100vh-64px)]")
            }
            `}>
            <Routes>
                <Route path='/keyvar/' element={<Ecommerce />} />

                <Route path='/keyvar/notifications' element={<Notification />} />
                <Route path='/keyvar/project-management' element={<ProjectManagement />} />
                <Route path='/keyvar/crm' element={<CRM />} />
                <Route path='/keyvar/social-feed' element={<SocialFeed />} />

            </Routes>

            {/* {router} */}

            <Outlet />

          </div>
          <MainContentFooter />

        </div>
      </div>

    </>
  )
}
