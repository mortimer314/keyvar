import React from 'react'
import { useContext } from 'react'
import CustomizeContext from '../../../context/costomizeContext'
import TopbarSlimDarkDefault from './TopbarStatuses/TopbarSlimDarkDefault'
import TopbarSlimDarkDarker from './TopbarStatuses/TopbarSlimDarkDarker'
import TopbarSlimLightDefault from './TopbarStatuses/TopbarSlimLightDefault'
import TopbarSlimLightDarker from './TopbarStatuses/TopbarSlimLightDarker'
import TopbarThickDarkDefault from './TopbarStatuses/TopbarThickDarkDefault'
import TopbarThickDarkDarker from './TopbarStatuses/TopbarThickDarkDarker'
import TopbarThickLightDefault from './TopbarStatuses/TopbarThickLightDefault'
import TopbarThickLightDarker from './TopbarStatuses/TopbarThickLightDarker'

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
  const isSlime = (horizentalNavbarShape === "slim" && navigationType !== "dual")
  const isHorizentalThemeDefault = (horizentalNavbarTheme === "default-horizental-theme")
  const isDarkTheme = theme === "dark"
  const isFadeScroll = isLanguageFa && isShowCustimization
  let mainComponent = <></>

  const statusTopbar = isSlime ?
    (isDarkTheme ? (isHorizentalThemeDefault ? "slim-dark-default" : "slim-dark-darker") : (isHorizentalThemeDefault ? "slim-light-default" : "slim-light-darker")) :
    (isDarkTheme ? (isHorizentalThemeDefault ? "thick-dark-default" : "thick-dark-darker") : (isHorizentalThemeDefault ? "thick-light-default" : "thick-light-darker"))

  switch (statusTopbar) {
    case "slim-dark-default":
      mainComponent = <TopbarSlimDarkDefault isFadeScroll={isFadeScroll} isLanguageFa={isLanguageFa} navigationType={navigationType} />
      break;
    case "slim-dark-darker":
      mainComponent = <TopbarSlimDarkDarker isFadeScroll={isFadeScroll} isLanguageFa={isLanguageFa} navigationType={navigationType} />
      break;
    case "slim-light-default":
      mainComponent = <TopbarSlimLightDefault isFadeScroll={isFadeScroll} isLanguageFa={isLanguageFa} navigationType={navigationType} />
      break;
    case "slim-light-darker":
      mainComponent = <TopbarSlimLightDarker isFadeScroll={isFadeScroll} isLanguageFa={isLanguageFa} navigationType={navigationType} />
      break;
    case "thick-dark-default":
      mainComponent = <TopbarThickDarkDefault isFadeScroll={isFadeScroll} isLanguageFa={isLanguageFa} navigationType={navigationType} />
      break;
    case "thick-dark-darker":
      mainComponent = <TopbarThickDarkDarker isFadeScroll={isFadeScroll} isLanguageFa={isLanguageFa} navigationType={navigationType} />
      break;
    case "thick-light-default":
      mainComponent = <TopbarThickLightDefault isFadeScroll={isFadeScroll} isLanguageFa={isLanguageFa} navigationType={navigationType} />
      break;
    case "thick-light-darker":
      mainComponent = <TopbarThickLightDarker isFadeScroll={isFadeScroll} isLanguageFa={isLanguageFa} navigationType={navigationType} />
      break;
  }

  return (
    <>
      {
        mainComponent
      }

    </>
  )
}
/* <div className={`topbar  transition ease-linear  flex-center border-b border-solid
                    ${theme === "dark" ?
          (isHorizentalThemeDefault ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-700") :
          (isHorizentalThemeDefault ? "bg-gray-50 border-gray-300" : "bg-slate-900 border-gray-700")
        }
                    ${isSlime ? "h-7 lg:h-7" : "h-16 lg:h-16"}
                    ${isLanguageFa && isShowCustimization ? "pr-[17px]" : "pr-0"}`}>

        <div className="topbar-content flex items-center justify-between w-full px-6 lg:px-10">

          <div className="logo-wrapper flex-center gap-x-2  text-white">
            <div className="lg:hidden">
              <svg className='w-7 h-7'>
                <use href='#bars-3'></use>
              </svg>
            </div>
            <div className="flex-center gap-x-2 ">
              <div className="logo-img-wrapper ">
                <img className='h-6 -mt-0.5' src="./src/assets/images/logo1.png" alt="" />
              </div>
              <div className="font-DanaMedium text-2xl mt-2 logo-title">
                {isLanguageFa ? "کیوار" : "keyvar"}
              </div>
            </div>
          </div>
          <div className="middle hidden md:block">
            <div className="topbar__search-wrapper">
              {horizentalNavbarShape === "slim" ? ((navigationType === "dual") ? "topbar__search-wrapper" : "") : (navigationType === "vertical" || navigationType === "dual") ? "topbar__search-wrapper" : ""}
            </div>
            <div className="topbar__navbar-wrapper">
              {horizentalNavbarShape === "slim" ?
                (!(navigationType === "vertical" || navigationType === "dual") ? "topbar__navbar-wrapper" : "") :
                (navigationType === "horizental" || navigationType === "combo") ? "horizental__navbar-wrapper" : ""}
            </div>
          </div>
          <div className="tools-navbar">tools-navbar</div>
        </div>
      </div>
 */