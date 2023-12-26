import React, { useContext } from 'react'
import CustomizeContext from '../../../context/costomizeContext'

export default function NavbarItemTitle(props) {




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

  let topbarClass = null

  const statusTopbar = isSlim ?
    (isDarkTheme ? (isHorizentalThemeDefault ? "slim-dark-default" : "slim-dark-darker") : (isHorizentalThemeDefault ? "slim-light-default" : "slim-light-darker")) :
    (isDarkTheme ? (isHorizentalThemeDefault ? "thick-dark-default" : "thick-dark-darker") : (isHorizentalThemeDefault ? "thick-light-default" : "thick-light-darker"))


  switch (statusTopbar) {
    case "slim-dark-default":
      topbarClass = { topbar: "text-slate-400 " }
      break;
    case "slim-dark-darker":
      topbarClass = { topbar: "text-slate-400 " }
      break;
    case "slim-light-default":
      topbarClass = { topbar: "text-gray-700" }
      break;
    case "slim-light-darker":
      topbarClass = { topbar: "text-slate-400  " }
      break;
    case "thick-dark-default":
      topbarClass = { topbar: ` ${isDual ? "text-slate-400 group-hover:bg-slate-900/50" : "text-slate-400 group-hover:bg-slate-900/50"}  ` }
      break;
    case "thick-dark-darker":
      topbarClass = { topbar: ` ${isDual ? "text-slate-400 group-hover:bg-slate-800/50" : "text-slate-400 group-hover:bg-slate-800/50"} ` }
      break;
    case "thick-light-default":
      topbarClass = { topbar: `  ${isDual ? "text-slate-700 group-hover:bg-slate-300/50" : "text-gray-700 group-hover:bg-slate-300/50"} ` }
      break;
    case "thick-light-darker":
      topbarClass = { topbar: ` ${isDual ? "text-slate-400 group-hover:bg-slate-800/50" : "text-slate-400 group-hover:bg-slate-800/50"} ` }
      break;
  }


  return (
    <div className={` flex gap-x-1 items-center ${topbarClass.topbar} rounded-md
    ${isDual ? 'py-2 px-5 text-sm' : (isSlim ? "text-xs pe-10" : "text-sm py-2 px-5")} `}>
      <svg className='w-4 h-4'>
        <use href={props.icon}></use>
      </svg>

      {props.title}

    </div>
  )
}
