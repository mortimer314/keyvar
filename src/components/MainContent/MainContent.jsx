import React from 'react'
import { useContext } from 'react'
import CustomizeContext from '../../context/costomizeContext'

export default function MainContent({ collapsed }) {
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

      <div className={`main transition ease-linear bg-orange-300 w-full overflow-y-auto 
                        
                      ${horizentalNavbarShape === "slim" ? " pt-7" : " pt-16"}
                      ${navigationType === "dual" ? " lg:pt-[118px]" : (horizentalNavbarShape === "slim" ? " lg:pt-7" : " lg:pt-16")}
                      ${(navigationType === "vertical" || navigationType === "combo") ?
          (language === "fa" ? (collapsed ? "px-0 lg:pr-[255px]" : "px-0 lg:pr-16") : (collapsed ? "px-0 lg:pl-[255px]" : "px-0 lg:pl-16")) : "p-0"}`}>


        <div className="bg-red-300 p-6 lg:p-10 "> MainContent</div>
        <div className="bg-red-500 "> MainContent</div>
        <div className="bg-red-300 p-6 lg:p-10"> MainContent</div>


        qqqqqqqw
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
        qqqqqqq
        <br />
      </div>
    </div>
  )
}
