import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import CustomizeContext from '../../../context/costomizeContext'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export default function TopbarTools(props) {
    return (
        <div className={`topbar-tools__content flex items-center  ${props.isSlim ? "gap-x-3" : "gap-x-1"}`}>
            <ThemeBtn {...props} />
            {

                <Tool {...props} dropdownContent={<ToolDropdownContent {...props} />} btnContent={<ToolBtnContent {...props} iconId={"#magnifying-glass"} />} />
            }
            <Tool {...props} dropdownContent={<ToolDropdownContent {...props} />} btnContent={<ToolBtnContent {...props} iconId={"#bell"} />} />
            <Tool {...props} dropdownContent={<ToolDropdownContent {...props} />} btnContent={<ToolBtnContent {...props} iconId={"#menu-grid"} />} />
            <Tool {...props} dropdownContent={<ToolDropdownContent {...props} />} btnContent={<ToolBtnContentOfProfile  {...props} />} />




        </div>
    )
}



function ThemeBtn(props) {

    // tooltip style
    // const BootstrapTooltip = styled(({ className, ...props }) => (
    //     <Tooltip {...props} arrow classes={{ popper: className }} />
    // ))(({ theme }) => ({
    //     [`& .${tooltipClasses.arrow}`]: {
    //         color: theme.palette.common.black,
    //     },
    //     [`& .${tooltipClasses.tooltip}`]: {
    //         backgroundColor: theme.palette.common.black,
    //     },
    // }));

    const { theme, language, changeTheme } = useContext(CustomizeContext)

    return (
        <div className='text-white '>
            {/* <BootstrapTooltip title={language === "fa" ? "تغییر تم" : "Switch theme"} placement='bottom'> */}

            {
                props.isSlim && (theme === "dark" ?
                    <div onClick={() => changeTheme("light")} className="cursor-pointer w-15 flex-center gap-x-1.5  px-2 transition-all  rounded-full text-blue-200 bg-blue-900/80 hover:bg-blue-700 hover:text-blue-50">
                        <div className="w-5 h-5  flex-center">
                            <svg className='w-3 h-3'>
                                <use href='#moon'></use>
                            </svg>
                        </div>
                        <span className='text-xs mb-0.5'>{language === "fa" ? "تیره" : "Dark"}</span>
                    </div>
                    :
                    <div onClick={() => changeTheme("dark")} className="cursor-pointer w-15 flex-center  gap-x-1.5  px-2 transition-all  rounded-full text-[#e5780b] bg-[#e5780b2e] hover:bg-[#e5780b] hover:text-[#f5f5f4]">
                        <div className="w-5 h-5  flex-center">
                            <svg className='w-3 h-3'>
                                <use href='#sun'></use>
                            </svg>
                        </div>
                        <span className='text-xs mb-0.5'>{language === "fa" ? "روشن" : "Light"}</span>
                    </div>
                )
            }
            {
                !props.isSlim && (theme === "dark" ?
                    <div onClick={() => changeTheme("light")} className="cursor-pointer flex-center transition-all  rounded-full text-blue-200 bg-blue-900/80 hover:bg-blue-700 hover:text-blue-50">
                        <div className="w-7 h-7  flex-center">
                            <svg className='w-4 h-4'>
                                <use href='#moon'></use>
                            </svg>
                        </div>
                    </div> :
                    <div onClick={() => changeTheme("dark")} className="cursor-pointer flex-center   transition-all  rounded-full text-[#e5780b] bg-[#e5780b4d] hover:bg-[#e5780b] hover:text-[#f5f5f4]">
                        <div className="w-7 h-7  flex-center">
                            <svg className='w-4 h-4'>
                                <use href='#sun'></use>
                            </svg>
                        </div>
                    </div>
                )
            }

            {/* </BootstrapTooltip> */}
        </div>
    )
}

function Tool(props) {
    const [showContent, setShowContent] = useState(false)
    let refShowBtn = useRef(false)
    let refContentElem = useRef(null)
    let refBtnElem = useRef(null)

    const showContentHandler = useCallback(() => {
        refShowBtn.current = !refShowBtn.current
        setShowContent(prevS => !prevS)
    }, [])

    const closeContentHandler = useCallback(() => {
        refShowBtn.current = false
        setShowContent(false)
    }, [])

    const hideContent = useCallback((event) => {
        if (!refContentElem.current.contains(event.target) && !refBtnElem.current.contains(event.target)) {
            closeContentHandler()
        }
    }, [])

    useEffect(() => {
        window.addEventListener("click", hideContent)
        return () => {
            window.removeEventListener("click", hideContent)
        }
    }, [])

    return (
        <div className='relative' >
            <div className={`btn flex-center ${props.isSlim ? " h-5 " : " w-10 h-10"}`}
                ref={refBtnElem} onClick={showContentHandler}>{props.btnContent} </div>

            <div ref={refContentElem}
                className={`
                 ${props.isSlim ? (props.isLanguageFa ? "topbar-tools-content-slim" : "topbar-tools-content-slim-left") : ""}
            ${props.isLanguageFa ? "topbar-tools-content" : "topbar-tools-content-left"}
            ${!refShowBtn.current && "hidden"}`}>
                {props.dropdownContent}
            </div>

        </div>
    )
}


function ToolBtnContent(props) {
    return (
        <div className='cursor-pointer'>
            {props.isSlim ?
                (props.isDarkTheme ?
                    <svg className='w-4 h-4 text-gray-300'>
                        <use href={props.iconId}></use>
                    </svg> :
                    ((props.statusTopbar.includes("default")) ?
                        <svg className='w-4 h-4 text-gray-600'>
                            <use href={props.iconId}></use>
                        </svg> :
                        <svg className='w-4 h-4 text-gray-300'>
                            <use href={props.iconId}></use>
                        </svg>)) :

                (props.isDarkTheme ?
                    <svg className='w-5 h-5 text-gray-300'>
                        <use href={props.iconId}></use>
                    </svg> :
                    ((props.statusTopbar.includes("default")) ?
                        <svg className='w-5 h-5 text-gray-800'>
                            <use href={props.iconId}></use>
                        </svg> :
                        <svg className='w-5 h-5 text-gray-300'>
                            <use href={props.iconId}></use>
                        </svg>))



            }
        </div>
    )
}

function ToolBtnContentOfProfile(props) {
    console.log(props)

    return (
        <>
            {
                !props.isSlim ?
                    <div className="w-10 h-10 overflow-hidden rounded-full cursor-pointer">
                        <img className='w-full' src="src/assets/images/topbar-img.jpg" alt="" />
                    </div> :
                    <div className={`flex flex-center gap-x-1 text-xs cursor-pointer
                    ${props.isDarkTheme ?
                            'text-gray-300' :
                            ((props.statusTopbar.includes("default")) ?
                                'text-gray-700' :
                                'text-gray-300')}
                    `}>
                        Mortimer
                        <svg className='w-3 h-3'>
                            <use href='#chevron-down'></use>
                        </svg>
                    </div>
            }
        </>
    )
}


function ToolDropdownContent(props) {
    return ("Notificat")
}