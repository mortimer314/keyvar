import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import CustomizeContext from '../../../context/costomizeContext'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import TopbarSearchWrapper from './TopbarSearchWrapper';
// import "./Topbar.css"

export default function TopbarTools(props) {
    return (
        <div className={`topbar-tools__content flex items-center  ${props.isSlim ? "gap-x-2 sm:gap-x-3" : "sm:gap-x-1"}`}>
            <ThemeBtn {...props} />
            {
                props.isSlim &&
                <Tool {...props} isSearchBtn={true} btnContent={<ToolBtnContent {...props} iconId={"#magnifying-glass"} />} />
            }
            <Tool {...props} dropdownContent={<ToolDropdownContent {...props} />} btnContent={<ToolBtnContent {...props} iconId={"#bell"} />} />
            <Tool {...props} dropdownContent={<ToolDropdownContentSocialMedia {...props} />} btnContent={<ToolBtnContent {...props} iconId={"#menu-grid"} />} />
            <Tool {...props} dropdownContent={<ToolDropdownContentProfile {...props} />} btnContent={<ToolBtnContentOfProfile  {...props} />} />




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
                    <div onClick={() => changeTheme("light")} className="cursor-pointer w-11 sm:w-15 flex-center gap-x-1.5  px-2 transition-all  rounded-full text-blue-200 bg-blue-900/80 hover:bg-blue-700 hover:text-blue-50">
                        <div className="w-5 h-5 hidden sm:flex-center">
                            <svg className='w-3 h-3'>
                                <use href='#moon'></use>
                            </svg>
                        </div>
                        <span className='text-xs mb-0.5'>{language === "fa" ? "تیره" : "Dark"}</span>
                    </div>
                    :
                    <div onClick={() => changeTheme("dark")} className="cursor-pointer w-11 sm:w-15 flex-center  gap-x-1.5  px-2 transition-all  rounded-full text-[#e5780b] bg-[#e5780b2e] hover:bg-[#e5780b] hover:text-[#f5f5f4]">
                        <div className="w-5 h-5 hidden sm:flex-center">
                            <svg className='w-3 h-3 '>
                                <use href='#sun'></use>
                            </svg>
                        </div>
                        <span className='text-xs mb-0.5 '>{language === "fa" ? "روشن" : "Light"}</span>
                    </div>
                )
            }
            {
                !props.isSlim && (theme === "dark" ?
                    <div onClick={() => changeTheme("light")} className="cursor-pointer flex-center transition-all  rounded-full text-blue-200 bg-blue-900/80 hover:bg-blue-700 hover:text-blue-50">
                        <div className="w-7 h-7 md:w-9 md:h-9  flex-center">
                            <svg className='w-4 h-4 md:w-5 md:h-5'>
                                <use href='#moon'></use>
                            </svg>
                        </div>
                    </div> :
                    <div onClick={() => changeTheme("dark")} className="cursor-pointer flex-center   transition-all  rounded-full text-[#e5780b] bg-[#e5780b4d] hover:bg-[#e5780b] hover:text-[#f5f5f4]">
                        <div className="w-7 h-7 md:w-9 md:h-9  flex-center">
                            <svg className='w-4 h-4 md:w-5 md:h-5'>
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
    const [isShowSearchContent, setIsShowSearchContent] = useState(false)

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

        if (refContentElem.current && !refContentElem.current.contains(event.target) && !refBtnElem.current.contains(event.target)) {
            closeContentHandler()
        }
    }, [])

    const showSearchContentHandler = useCallback(() => {
        setIsShowSearchContent(prevS => !prevS)
    }, [])

    useEffect(() => {
        window.addEventListener("click", hideContent)
        return () => {
            window.removeEventListener("click", hideContent)
        }
    }, [])

    return (
        <div className='relative' >
            {
                !props.isSearchBtn &&
                <>
                    <div className={`btn flex-center ${props.isSlim ? " h-5 " : " w-10 md:w-12 h-10 md:h-12"}`}
                        ref={refBtnElem} onClick={showContentHandler}>{props.btnContent} </div>

                    <div ref={refContentElem}
                        className={`
                            ${props.isSlim ? (props.isLanguageFa ? "topbar-tools-content-slim" : "topbar-tools-content-slim-left") : ""}
                            ${props.isLanguageFa ? "topbar-tools-content" : "topbar-tools-content-left"}
                            ${!refShowBtn.current && "hidden"}`}>
                        {props.dropdownContent}
                    </div>

                </>

            }
            {
                props.isSearchBtn &&
                <>
                    <div className={`btn flex-center ${props.isSlim ? " h-5 " : " w-10 h-10"}`}
                        ref={refBtnElem} onClick={showSearchContentHandler}>{props.btnContent} </div>
                    {
                        <TopbarSearchWrapper {...props} showSearchContentHandler={showSearchContentHandler} isShowSearchContent={isShowSearchContent}></TopbarSearchWrapper>
                    }
                </>
            }

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
                    <svg className='w-5 h-5 md:w-6 md:h-6 text-gray-300'>
                        <use href={props.iconId}></use>
                    </svg> :
                    ((props.statusTopbar.includes("default")) ?
                        <svg className='w-5 h-5 md:w-6 md:h-6 text-gray-800'>
                            <use href={props.iconId}></use>
                        </svg> :
                        <svg className='w-5 h-5 md:w-6 md:h-6 text-gray-300'>
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
                    <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full cursor-pointer">
                        <img className='w-full' src="./keyvar/src/assets/images/topbar-img.jpg" alt="" />
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
    return (
        <>
            <div className="h-40 w-40 ">
                e
            </div>
        </>
    )
}

function ToolDropdownContentProfile(props) {
    return (
        <>
            <div className="profile-card w-[290px] h-[475px] flex flex-col ">
                <div className="pt-6 pb-4 ">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-center m-auto border border-solid border-gray-300 dark:border-gray-500">
                        <img className='w-full h-full' src="./keyvar/src/assets/images/topbar-img.jpg" alt="" />
                    </div>
                    <h6 className="profile-card__name text-center text-xs font-medium pt-2 pb-1 dark:text-gray-200">Mortimer</h6>
                </div>
                <div className="flex-center pb-4 px-4">
                    {/* input style is in components */}
                    <input type="text" className='profile-card__input' placeholder={props.isLanguageFa ? "به روزرسانی وضعیت ..." : "Update your status"} />
                </div>

                <ul className='profile-card__list flex flex-col h-40 overflow-y-auto   pb-2 '>
                    <ProfileCardItem title={props.isLanguageFa ? "پروفایل" : "Profile"} svgId="#user" />
                    <ProfileCardItem title={props.isLanguageFa ? "داشبورد" : "Dashboard"} svgId="#circle-chart" />
                    <ProfileCardItem title={props.isLanguageFa ? " سابقه فعالیت " : "Post & Activity"} svgId="#lock-closed" />
                    <ProfileCardItem title={props.isLanguageFa ? " مرکز کمک" : "Setting & Privacy"} svgId="#setting-8-teeth" />
                    <ProfileCardItem title={props.isLanguageFa ? " سوالات پر تکرار" : "Help Center"} svgId="#question-mark-circle" />
                    <ProfileCardItem title={props.isLanguageFa ? "زبان" : "Lanuage"} svgId="#language-icon" />


                </ul>
                <div className="py-3 border-y border-gray-300 dark:border-slate-500 border-solid">
                    <ProfileCardItem title={props.isLanguageFa ? "زبان" : "Lanuage"} svgId="#language-icon" />

                </div>

                <div className="profile-card__add-account flex-center px-4 pt-4 ">
                    <a href="#" className="profile-card__exit-btn 
                    flex-center gap-x-2 w-full h-[38px] rounded-lg border 
                    border-solid border-gray-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-900
                    transition-all duration-300 font-MorabbaMedium 
                    text-sm text-gray-800 dark:text-slate-300 
                     hover:bg-gray-200 hover:dark:bg-slate-900/50
                      hover:dark:text-slate-200
                    ">
                        <svg className='w-4 h-4'>
                            <use href='#sign-out'></use>
                        </svg>
                        {props.isLanguageFa ? "خروج از سیستم" : "Sign out"}

                    </a>
                </div>
                <div className=" text-[10px] tracking-wide dark:text-slate-400 flex-center py-2 gap-x-2">

                    {!props.isLanguageFa ?
                        <>
                            <li className="list-none marker:m-5">
                                <a href="#" className=" textd hover:underline">Privacy policy</a>
                            </li>
                            <li className="">
                                <a href="#" className="-ms-1.5 hover:underline">Terms</a>
                            </li>
                            <li className="">
                                <a href="#" className="-ms-1.5 hover:underline">Cookies</a>
                            </li>
                        </> :
                        <>
                            <li className="list-none marker:m-5">
                                <a href="#" className=" textd hover:underline">حریم خصوصی</a>
                            </li>
                            <li className="">
                                <a href="#" className="-ms-1.5 hover:underline">قوانین</a>
                            </li>
                            <li className="">
                                <a href="#" className="-ms-1.5 hover:underline">کوکی ها</a>
                            </li>
                        </>}
                </div>
            </div>
        </>
    )
}

function ProfileCardItem({ title, svgId }) {
    return (
        <li className="profile-card__item list-none">

            <a href="#" className="profile-card__link flex items-center gap-x-2 h-8 px-4 transition-all duration-300
            font-Morabba text-sm text-gray-900 dark:text-slate-200 hover:bg-slate-200/60 hover:dark:bg-slate-700/90 hover:dark:text-slate-50">
                <svg className='w-4.5 h-4.5'>
                    <use href={svgId}></use>
                </svg>
                {title}
            </a>
        </li>
    )
}

function ToolDropdownContentSocialMedia(){
    return(
        <div className="w-[245px] h-[320px] overflow-auto  px-4 pt-4 ">
            <div className="socials-grid-cotent">
            <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/figma.png"  alt="" />
                        <p className=''>Figma</p>
                    </a>
                </div>
                
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/twitter.png"  alt="" />
                        <p className=''>Twitter</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/gitlab.png"  alt="" />
                        <p className=''>Gitlab</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/trello.png"  alt="" />
                        <p className=''>Trello</p>
                    </a>
                </div>
                
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/spotify.png"  alt="" />
                        <p className=''>Spotify</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/behance.png" className=' ' alt="" />
                        <p className=''>Behance</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/slack.png"  alt="" />
                        <p className=''>Slack</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/pinterest.png"  alt="" />
                        <p className=''>Pinterest</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/ln.png"  alt="" />
                        <p className=''>in</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/google-photos.png"  alt="" />
                        <p className=''>Photos</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/google-maps.png"  alt="" />
                        <p className=''>Maps</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/google-drive.png"  alt="" />
                        <p className=''>Drive</p>
                    </a>
                </div>
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/google-cloud.png"  alt="" />
                        <p className=''>Cloud</p>
                    </a>
                </div>
                
                
                <div className="">
                    <a href="#" className="">
                    <img src="./keyvar/src/assets/images/social/bitbucket.png"  alt="" />
                        <p className=''>Bitbucket</p>
                    </a>
                </div>
               
            </div>
        </div>
    )
}