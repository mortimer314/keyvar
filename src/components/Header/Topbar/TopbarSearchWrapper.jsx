import React, { useEffect, useRef } from 'react'
import ContentWrapper from '../../ContentWrapper/ContentWrapper'
import TopbarSearch from './TopbarSearch'

export default function TopbarSearchWrapper({ isShowSearchContent, showSearchContentHandler, isLanguageFa, isDarkTheme, statusTopbar,isSlim }) {

    const refElemOfModal = useRef(null)

    const closeModal = () => {
        console.log(event.target.className)
        if (!refElemOfModal.current.contains(event.target) ) {
            showSearchContentHandler()
        }
    }

    useEffect(()=>{
        if(isShowSearchContent){
            document.documentElement.querySelector('body').style.height = "100vh"
            document.documentElement.querySelector('body').style.overflow = "hidden"
          } else {
            document.documentElement.querySelector('body').style.height = "auto"
            document.documentElement.querySelector('body').style.overflow = "auto"
          }
    },[isShowSearchContent])

    return (
        <>
            <ContentWrapper>
                <div className={`search-modal fixed transition-all z-[1000] inset-0 bg-black/60 w-full h-[100vh] overflow-hidden duration-200 
                             ${isShowSearchContent ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    onClick={closeModal}>

                    <div ref={refElemOfModal} className={`absolute left-0 right-0 m-auto w-[calc(100%-16px)] sm:w-[400px] transition-all duration-300
                                ${isShowSearchContent ? "mt-30" : "mt-20"}
                                `}>
                        <TopbarSearch isLanguageFa={isLanguageFa} isDarkTheme={isDarkTheme} statusTopbar={statusTopbar} isSlim={isSlim} />


                    </div>

                </div>
            </ContentWrapper>
        </>
    )
}
