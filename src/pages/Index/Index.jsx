import React, { useEffect, useState } from 'react'
import Customize from '../../components/Customize/Customize'
import CustomizeContext from '../../context/costomizeContext'
import {
  localStorageChangeTheme,
  localStorageChangeDirection,
  localStorageChangeNavigation,
  localStorageChangeVerticalNavbarTheme,
  localStorageChangeHorizentalNavbarShape,
  localStorageChangeHorizentalNavbarTheme
} from '../../utilFunctions/utilFunctions'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainContent from '../../components/MainContent/MainContent'

export default function Index() {
  const [collapsed, setCollapsed] = useState(false)
  const [isShowCustimization, setIsShowCustimization] = useState(false)

  const [theme, setTheme] = useState(() => localStorage.theme || "dark")
  const [language, setLanguage] = useState('fa')
  const [navigationType, setNavigationType] = useState(() => localStorage.navigation || "vertical")
  const [verticalNavbarTheme, setVerticalNavbarTheme] = useState(() => localStorage.verticalNavbarTheme || "default")
  const [horizentalNavbarTheme, setHorizentalNavbarTheme] = useState(() => localStorage.horizentalNavbarTheme || "default-horizental-theme")
  const [horizentalNavbarShape, setHorizentalNavbarShape] = useState(() => localStorage.horizentalNavbarShape || "thick")

  function changeLanguage() {
    localStorageChangeDirection()
    language === "fa" ? setLanguage("en") : setLanguage("fa")
  }

  function changeTheme(value) {
    setTheme(value)
    localStorageChangeTheme()
  }

  function changeNavigation(value) {
    setNavigationType(value)
    localStorageChangeNavigation(value)
  }

  function changeVerticalNavbarTheme(value) {
    setVerticalNavbarTheme(value)
    localStorageChangeVerticalNavbarTheme(value)
  }

  function changeHorizentalNavbarTheme(value) {
    setHorizentalNavbarTheme(value)
    localStorageChangeHorizentalNavbarTheme(value)
  }

  function changeHorizentalNavbarShape(value) {
    setHorizentalNavbarShape(value)
    localStorageChangeHorizentalNavbarShape(value)
  }

  function resetSetting() {
    if (theme !== "dark") {
      console.log(theme)
      changeTheme("dark")
    }
    setCollapsed(true)
    changeNavigation("vertical")
    changeVerticalNavbarTheme("default")
    changeHorizentalNavbarTheme("default-horizental-theme")
    changeHorizentalNavbarShape("thick")
    language != "fa" && changeLanguage()
  }
  useEffect(() => {

  }, [resetSetting])

  useEffect(() => {
    const scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;
    //  Theme Script In Starting App 

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    //  Direction Script In Starting App 
    if (localStorage.dir === 'rtl') {
      document.documentElement.dir = "rtl"
    } else if (localStorage.dir === 'ltr') {
      document.documentElement.dir = "ltr"
    } else {
      document.documentElement.dir = "rtl"
    }

    document.documentElement.dir === "ltr" && setLanguage('en')

    //  Navigation-Type Script In Starting App 



  }, [])

  return (
    <CustomizeContext.Provider value={{
      theme,
      language,
      changeTheme,
      changeLanguage,
      navigationType,
      changeNavigation,
      verticalNavbarTheme,
      changeVerticalNavbarTheme,
      horizentalNavbarTheme,
      horizentalNavbarShape,
      changeHorizentalNavbarTheme,
      changeHorizentalNavbarShape,
      resetSetting,
      isShowCustimization, 
      setIsShowCustimization
    }}>
      <div className={`wrapper-content `}>
        <Customize />
        <Header />
        <Sidebar collapsed={collapsed} collapsedHandler={setCollapsed} />
        <MainContent collapsed={collapsed} />
      </div>
    </CustomizeContext.Provider>
  )
}
