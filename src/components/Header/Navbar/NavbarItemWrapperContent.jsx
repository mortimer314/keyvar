import React from 'react'

export default function NavbarItemWrapperContent(props) {


  let isNormalType = props.type === "normal"

  return (
    <div className={`
    
    ${ !props.isDual && (props.isSlim ? (!props.isLanguageFa ? "navbar-wrapper-content-slim" : "navbar-wrapper-content-slim-left") : "")} 
    ${  (!props.isLanguageFa ? "navbar-wrapper-content" : "navbar-wrapper-content-left")} py-2 w-max
    ${!isNormalType ?" before:right-1/2 before:left-1/2 -start-[40%] p-2":""}
      `}>
      {props.children}
      
      </div>
  )
}
