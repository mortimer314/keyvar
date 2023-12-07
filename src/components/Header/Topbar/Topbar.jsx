import React from 'react'
import { useContext } from 'react'
import CustomizeContext from '../../../context/costomizeContext'
import TopbarSearch from './TopbarSearch'
import TopbarTools from './TopbarTools'

export default function Topbar() {
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
  const isHorizentalThemeDefault = (horizentalNavbarTheme === "default-horizental-theme")
  const isDarkTheme = theme === "dark"
  const isFadeScroll = isLanguageFa && isShowCustimization
  let mainComponent = <></>
  let topbarClass = null
  const statusTopbar = isSlim ?
    (isDarkTheme ? (isHorizentalThemeDefault ? "slim-dark-default" : "slim-dark-darker") : (isHorizentalThemeDefault ? "slim-light-default" : "slim-light-darker")) :
    (isDarkTheme ? (isHorizentalThemeDefault ? "thick-dark-default" : "thick-dark-darker") : (isHorizentalThemeDefault ? "thick-light-default" : "thick-light-darker"))


  switch (statusTopbar) {
    case "slim-dark-default":
      topbarClass = { topbar: "h-7 lg:h-7 bg-slate-800 border-slate-700", logoWrapper: "text-white", menuBtn: "w-6 h-6", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case "slim-dark-darker":
      topbarClass = { topbar: "h-7 lg:h-7 bg-slate-900 border-slate-700", logoWrapper: "text-white", menuBtn: "w-6 h-6", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case "slim-light-default":
      topbarClass = { topbar: "h-7 lg:h-7 bg-gray-50 border-gray-300", logoWrapper: "text-gray-700", menuBtn: "w-6 h-6", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case "slim-light-darker":
      topbarClass = { topbar: " h-7 lg:h-7 bg-slate-900 border-gray-700", logoWrapper: "text-white", menuBtn: "w-6 h-6", logoImg: "h-5 -mt-0.5", logoBrand: "text-lg font-bold mt-1" }
      break;
    case "thick-dark-default":
      topbarClass = { topbar: "h-16 lg:h-16 bg-slate-800 border-slate-700", logoWrapper: "text-white", menuBtn: "w-7 h-7", logoImg: "h-6 -mt-0.5", logoBrand: "text-2xl mt-1.5" }
      break;
    case "thick-dark-darker":
      topbarClass = { topbar: "h-16 lg:h-16 bg-slate-900 border-slate-700", logoWrapper: "text-white", menuBtn: "w-7 h-7", logoImg: "h-6 -mt-0.5", logoBrand: "text-2xl mt-1.5" }
      break;
    case "thick-light-default":
      topbarClass = { topbar: "h-16 lg:h-16 bg-gray-50 border-gray-300", logoWrapper: "text-gray-700", menuBtn: "w-7 h-7", logoImg: "h-6 -mt-0.5", logoBrand: "text-2xl mt-1.5" }
      break;
    case "thick-light-darker":
      topbarClass = { topbar: "h-16 lg:h-16 bg-slate-900 border-gray-700", logoWrapper: "text-white", menuBtn: "w-7 h-7", logoImg: "h-6 -mt-0.5", logoBrand: "text-2xl mt-1.5" }
      break;
  }

  return (
    <>
      <div className={`topbar  transition ease-linear  flex-center border-b border-solid 
      ${topbarClass.topbar} ${isFadeScroll ? "pr-[17px]" : "pr-0"}`}>

        <div className="topbar-content flex items-center justify-between w-full px-6 lg:px-10">

          <div className={`logo-wrapper flex-center gap-x-1 sm:gap-x-2 ${topbarClass.logoWrapper}`}>
            <div className="lg:hidden">
              <svg className={`${topbarClass.menuBtn}`}>
                <use href='#bars-3'></use>
              </svg>
            </div>
            <div className="flex-center gap-x-2 ">
              <div className="logo-img-wrapper ">
                <img className={`${topbarClass.logoImg}`} src="./src/assets/images/logo1.png" alt="" />
              </div>
              <div className={`logo-title font-DanaMedium hidden sm:block ${topbarClass.logoBrand}`}>
                {isLanguageFa ? "کیوار" : "keyvar"}
              </div>
            </div>
          </div>
          <div className="middle hidden lg:block">
            <div className="topbar__search-wrapper w-[400px] shrink">
              {horizentalNavbarShape === "slim" ?
                ((navigationType === "dual") ? <TopbarSearch isLanguageFa={isLanguageFa} isDarkTheme={isDarkTheme} statusTopbar={statusTopbar} isSlim={isSlim}/> : "") :
                (navigationType === "vertical" || navigationType === "dual") ?
                  <TopbarSearch isLanguageFa={isLanguageFa} isDarkTheme={isDarkTheme} statusTopbar={statusTopbar} isSlim={isSlim}/> : ""}
            </div>
            <div className="topbar__navbar-wrapper">
              {horizentalNavbarShape === "slim" ?
                (!(navigationType === "vertical" || navigationType === "dual") ? "topbar__navbar-wrapper" : "") :
                (navigationType === "horizental" || navigationType === "combo") ? "horizental__navbar-wrapper" : ""}
            </div>
          </div>
          <div className="topbor-tools">
            <TopbarTools isLanguageFa={isLanguageFa} isSlim={isSlim} statusTopbar={statusTopbar} isDarkTheme={isDarkTheme} />
          </div>
        </div>
      </div>

    </>
  )
}