import React from 'react'
import ReactDOM from 'react-dom'


export default function CustomizeSidebar({ showCustomization, isShowCustimization }) {

  // const closeCustomization = (e) => {
  //   console.log(e.target.className.includes("btn"))
  //   if (e.target.className.includes("btn")) {
  //     props.onClose()
  //   }
  // }

  return ReactDOM.createPortal(
    <div className={`customize-modal ${isShowCustimization ? "active" : ""}`}>
      <div className={`transition-all duration-300  md:ease-cubic-transition w-[455px] h-full  ${isShowCustimization ? "translate-0 bg-white" : "translate-x-[455px] bg-white/50"}`}>
        <span className='pt-64 block ' onClick={showCustomization}>btn</span>

      </div>
    </div>,
    document.getElementById("offers-parent")
  )
}
