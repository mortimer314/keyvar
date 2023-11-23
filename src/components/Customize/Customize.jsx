import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import "./Customize.css"
import CustomizeItem from './CustomizeItem'
import CustomizeLanguage from './CustomizeLanguage'
import CustomizeContext from '../../context/costomizeContext'


export default function Customize() {

  const customizeContext = useContext(CustomizeContext)

  const {isShowCustimization, setIsShowCustimization} = useContext(CustomizeContext)
  const [customizationInfos, setCustomizationInfos] = useState({})
  const [customizationInfosOfItems, setCustomizationInfosOfItems] = useState()
  const [customizationInfosOfStatusTheme, setCustomizationInfosOfStatusTheme] = useState()
  const [customizationInfosOfLanguage, setCustomizationInfosOfLanguage] = useState()
  const [customizationInfosOfNavigationType, setCustomizationInfosOfNavigationType] = useState()
  const [customizationInfosOfVerticalNavbarTheme, setCustomizationInfosOfVerticalNavbarTheme] = useState()
  const [customizationInfosOfHorizentalNavbarTheme, setCustomizationInfosOfHorizentalNavbarTheme] = useState()
  const [customizationInfosOfHorizentalNavbarShape, setCustomizationInfosOfHorizentalNavbarShape] = useState()

  const showCustomization = () => {
    setIsShowCustimization(prevS => !prevS)
  }

  useEffect(() => {
    if (isShowCustimization) {
      document.documentElement.querySelector('body').style.height = "100vh"
      document.documentElement.querySelector('body').style.overflow = "hidden"
    } else {
      document.documentElement.querySelector('body').style.height = "auto"
      document.documentElement.querySelector('body').style.overflow = "auto"
    }
  }, [isShowCustimization])


  useEffect(() => {
    fetch(`http://localhost:3000/${customizeContext.language}-customize`)
      .then(res => res.json())
      .then(result => {
        setCustomizationInfos(result)
        setCustomizationInfosOfItems(result.items)
        setCustomizationInfosOfLanguage(result.items.language)
        setCustomizationInfosOfStatusTheme(result.items.statusTheme)
        setCustomizationInfosOfNavigationType(result.items.navigationType)
        setCustomizationInfosOfVerticalNavbarTheme(result.items.verticalNavbarTheme)
        setCustomizationInfosOfHorizentalNavbarTheme(result.items.horizentalNavbarTheme)
        setCustomizationInfosOfHorizentalNavbarShape(result.items.horizentalNavbarShape)
      })
  }, [customizeContext.language])

  return ReactDOM.createPortal(
    <>
      {/* customize btn */}
      <div
        onClick={() => {
          showCustomization()
        }}
        className={` fixed ${customizeContext.language !== "fa" ? '-right-1 sm:-right-11 border-t-0 rounded-t-none' : "-left-1 sm:-left-11 border-b-0  rounded-b-none"} bottom-0 top-0 m-auto rotate-90 
              w-fit h-fit bg-white dark:bg-slate-800 select-none 
              shadow-sm text-sm text-gray-600 dark:text-gray-300  
              border-solid border border-gray-400 
               px-2.5 py-2 
              flex items-center justify-center gap-x-1 
              cursor-pointer rounded-md  
              `}
      >
        <div className={`font-DanaBold hidden sm:block ${customizeContext.language !== "fa" ? "mt-2":""}`}>
          {
            customizationInfos.sideBtn
          }
        </div>
        <div className='animate-spin-slow text-sky-500'>
          <svg className='w-6 h-6'>
            <use href="#cog-6-tooth"></use>
          </svg>
        </div>
      </div>

      {/* customize modal */}
      <div className={`customize-modal ${isShowCustimization ? "active" : ""}`}
        onClick={e => {
          e.currentTarget.className.includes("customize-modal") &&
            e.target.className.includes("customize-modal") &&
            showCustomization()
        }}
      >

        {/* customize sidebar */}
        <div className={`transition-all duration-300 max-w-[455px] h-full dark:bg-slate-900 bg-white  shrink 
          ${customizeContext.language === "fa" ? "mr-auto " : "ml-auto"}
          ${isShowCustimization ? "translate-0 bg-white" :
            customizeContext.language === "fa" ? "translate-x-[-455px] bg-white/50" : "translate-x-[455px] bg-white/50"}`}>

          {/* header */}
          <div className="p-4 border-b  border-solid border-gray-200 dark:border-slate-700">
            <div className="flex justify-between mb-10">
              <div className="">
                <div className="text-gray-700 dark:text-gray-50 tracking-wider flex gap-2 items-center pb-2">
                  <svg className='w-5 h-5 '>
                    <use href='#paint-brush'></use>
                  </svg>
                  <h3 className='font-MorabbaBold'>{customizationInfos.title}</h3>

                </div>
                <h5 className='text-xs font-DanaMedium text-gray-500/80 dark:text-slate-200 '>{customizationInfos.subtitle}</h5>
              </div>
              <button className="flex w-5 h-5  items-start text-gray-700 dark:text-gray-50" onClick={showCustomization}>
                <svg className='w-5 h-5 '>
                  <use href='#x-mark'></use>
                </svg>
              </button>
            </div>
            <button
              onClick={() => {
                customizeContext.resetSetting()
              }}
              className='flex gap-x-2 font-semibold items-center border border-gray-300  dark:border-slate-700
            justify-center text-xs w-full py-2 rounded-md dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-white
              text-black/80 dark:text-gray-300 bg-slate-100/80 hover:bg-slate-200 transition'>
              <div className="">
                <svg className='w-3.5 h-3.5'>
                  <use href='#arrow-path'></use>
                </svg>
              </div>
              <div className="">{customizationInfos.ResetBtn}</div>
            </button>
          </div>

          {/* body */}
          <div className={`p-4 flex flex-col gap-y-4 h-[calc(100vh-170px)] overflow-y-auto
          ${customizeContext.language === "fa" ? "pl-[11px]" : "pr-[11px]"}
          `}>
            {/* theme color */}
            <CustomizeItem {...customizationInfosOfStatusTheme} onChangeHandler={customizeContext.changeTheme} mainValue={customizeContext.theme} />
            <CustomizeLanguage {...customizationInfosOfLanguage} />
            <CustomizeItem {...customizationInfosOfNavigationType} onChangeHandler={customizeContext.changeNavigation} mainValue={customizeContext.navigationType} />
            <CustomizeItem {...customizationInfosOfVerticalNavbarTheme} onChangeHandler={customizeContext.changeVerticalNavbarTheme} mainValue={customizeContext.verticalNavbarTheme} />
            <CustomizeItem {...customizationInfosOfHorizentalNavbarShape} onChangeHandler={customizeContext.changeHorizentalNavbarShape} mainValue={customizeContext.horizentalNavbarShape} />
            <CustomizeItem {...customizationInfosOfHorizentalNavbarTheme} onChangeHandler={customizeContext.changeHorizentalNavbarTheme} mainValue={customizeContext.horizentalNavbarTheme} />

            <a href="https://themes.getbootstrap.com/product/phoenix-admin-dashboard-webapp-template/" target='_blank'
              className="w-full text-sm/[14px] bg-blue-500 hover:bg-blue-600 transition font-DanaBold text-white text-center rounded py-2.5">

              {customizeContext.language === "fa" ? "نمای سایت اصلی" : "Main site view"}
            </a>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("offers-parent")

  )
}
