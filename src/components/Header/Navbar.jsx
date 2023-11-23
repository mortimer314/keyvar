import React from 'react'
import { useContext } from 'react'
import CustomizeContext from '../../context/costomizeContext'

export default function Navbar() {
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
      {
        (navigationType === "dual") &&
        <div className={`navbar  hidden lg:flex items-center justify-center transition ease-linear bg-blue-600 h-[54px] ${language === "fa" && isShowCustimization ? "pr-[17px]" : "pr-0"}`}>

          <div className="horizental__navbar-wrapper container flex-center"> horizental__navbar-wrapper</div>
        </div>
      }
    </>
  )
}
