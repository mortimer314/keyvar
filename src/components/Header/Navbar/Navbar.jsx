import React from 'react'
import { useContext } from 'react'
import CustomizeContext from '../../../context/costomizeContext'
import NavbarContent from './NavbarContent'

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

  const isLanguageFa = language === "fa"
  const isSlim = (horizentalNavbarShape === "slim" && navigationType !== "dual")
  const isDual = navigationType === "dual"

  const isHorizentalThemeDefault = (horizentalNavbarTheme === "default-horizental-theme")
  const isDarkTheme = theme === "dark"
  const isFadeScroll = isLanguageFa && isShowCustimization
  let navbarClass = null
  const statusTopbar = isSlim ?
    (isDarkTheme ? (isHorizentalThemeDefault ? "slim-dark-default" : "slim-dark-darker") : (isHorizentalThemeDefault ? "slim-light-default" : "slim-light-darker")) :
    (isDarkTheme ? (isHorizentalThemeDefault ? "thick-dark-default" : "thick-dark-darker") : (isHorizentalThemeDefault ? "thick-light-default" : "thick-light-darker"))

  switch (statusTopbar) {
    case "slim-dark-default":
      navbarClass = { navbar: " bg-slate-900 border-slate-700", logoWrapper: "text-white", menuBtn: "w-6 h-6", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case "slim-dark-darker":
      navbarClass = { navbar: " bg-slate-950 border-slate-700", logoWrapper: "text-white", menuBtn: "w-6 h-6", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case "slim-light-default":
      navbarClass = { navbar: " bg-white border-gray-300", logoWrapper: "text-gray-700", menuBtn: "w-6 h-6", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case "slim-light-darker":
      navbarClass = { navbar: "  bg-slate-900 border-gray-700", logoWrapper: "text-white", menuBtn: "w-6 h-6", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case "thick-dark-default":
      navbarClass = { navbar: " bg-slate-800 border-slate-700", logoWrapper: "text-white", menuBtn: "w-7 h-7", logoImg: "h-6 -mt-0.5", logoBrand: "text-2xl mt-1.5" }
      break;
    case "thick-dark-darker":
      navbarClass = { navbar: " bg-slate-900 border-slate-700", logoWrapper: "text-white", menuBtn: "w-7 h-7", logoImg: "h-6 -mt-0.5", logoBrand: "text-2xl mt-1.5" }
      break;
    case "thick-light-default":
      navbarClass = { navbar: `${isDual? "bg-white":"bg-gray-100"} border-gray-300`, logoWrapper: "text-gray-700", menuBtn: "w-7 h-7", logoImg: "h-6 -mt-0.5", logoBrand: "text-2xl mt-1.5" }
      break;
    case "thick-light-darker":
      navbarClass = { navbar: " bg-slate-900 border-gray-700", logoWrapper: "text-white", menuBtn: "w-7 h-7", logoImg: "h-6 -mt-0.5", logoBrand: "text-2xl mt-1.5" }
      break;
  }

  return (
    <>
      {
        (navigationType === "dual") &&
        <div className={`navbar  hidden lg:flex items-center justify-center transition ease-linear  h-[54px] 
        ${navbarClass.navbar} border-b border-solid 
        ${language === "fa" && isShowCustimization ? "md:pr-[17px]" : "md:pr-0"}`}>

          <div className="horizental__navbar-wrapper container flex-center"> <NavbarContent /></div>
        </div>
      }
    </>
  )
}
