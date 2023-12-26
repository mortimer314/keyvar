import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavbarItemContent(props) {


  let isNormalType = props.type === "normal"

  return (

    <div className=''>
      {isNormalType ?
        <div className={`grid text-sm w-[200px] grid-cols-1 gap-2 `}>

          {
            props.id === 1 && <>
              {props.menus[0].subMenus.map((subMenu, index) => {
                if (index) {
                  return <NavLink key={index} to={subMenu.href} className='flex justify-between items-center px-4 py-1.5  transition-all text-gray-700 dark:text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-900/80'>
                    <div className="flex items-center gap-x-2">
                      <svg className='w-4 h-4'>
                        <use href={subMenu.icon}></use>
                      </svg>
                      {subMenu.title}
                    </div>


                  </NavLink>
                }
              })}
            </>
          }
          {
            props.id !== 1 && <>
              {props.menus.map((menu, index) =>

                <div key={index} className="group/item relative ">

                  <NavLink to={menu.href} className='flex justify-between items-center px-4 py-1.5  transition-all text-gray-700 dark:text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-900/80'>
                    <div className="flex items-center gap-x-2">
                      <svg className='w-4 h-4'>
                        <use href={menu.icon}></use>
                      </svg>
                      {menu.title}
                    </div>
                    {(menu.subMenus.length !== 1) &&
                      (props.isLanguageFa ?
                        <svg className='w-2.5 h-2.5 '>
                          <use href="#chevron-left-icon"></use>
                        </svg> :
                        <svg className='w-2.5 h-2.5 '>
                          <use href="#chevron-right-icon"></use>
                        </svg>)
                    }

                  </NavLink>
                  {
                    (menu.subMenus.length !== 1) &&

                    <div className="absolute opacity-0 invisible pointer-events-none py-2 w-[200px]  bg-white rounded-md border border-solid border-slate-300 dark:border-slate-500 dark:bg-slate-800
                                     group-hover/item:opacity-100 group-hover/item:visible group-hover/item:pointer-events-auto top-0 start-full">
                      {
                        menu.subMenus.map((subMenu, indexInner) => {
                          if (indexInner) {
                            return (
                              <div key={indexInner} className="group/item2 relative ">

                                <NavLink to={subMenu.href} className='flex items-center justify-between px-4 py-1.5 gap-x-2 transition-all text-gray-700 dark:text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-900/80'>
                                  {subMenu.title}
                                  {(subMenu.subSubMenus.length !== 0) &&
                                    (props.isLanguageFa ?
                                      <svg className='w-2.5 h-2.5 '>
                                        <use href="#chevron-left-icon"></use>
                                      </svg> :
                                      <svg className='w-2.5 h-2.5 '>
                                        <use href="#chevron-right-icon"></use>
                                      </svg>)
                                  }
                                </NavLink>

                                {
                                  (subMenu.subSubMenus.length !== 0) &&
                                  <div className="absolute w-[200px] py-2 opacity-0 invisible pointer-events-none  bg-white rounded-md border border-solid border-slate-300 dark:border-slate-500 dark:bg-slate-800 
     group-hover/item2:opacity-100 group-hover/item2:visible group-hover/item2:pointer-events-auto top-0 start-full">
                                    {
                                      subMenu.subSubMenus.map((subSubMenu ,index) =>
                                        <NavLink key={index} to={subSubMenu.href} className='flex items-center px-4 py-1.5 gap-x-2 transition-all text-gray-700 dark:text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-900/80'>
                                          {subSubMenu.title}
                                        </NavLink>
                                      )
                                    }


                                  </div>
                                }

                              </div>
                            )
                          }
                        })
                      }



                    </div>



                  }

                </div>
              )}
            </>
          }

        </div>

        : <div className={`text-start text-sm  gap-2 w-[552px] max-h-[60vh] overflow-y-auto`}>
          <div className=" flex flex-col flex-wrap max-h-[130vh] bg-bottom bg-no-repeat bg-[url('https://mortimer314.github.io/files/src/assets/images/logo1-bg.png')] dark:bg-[url('https://mortimer314.github.io/files/src/assets/images/logo2-bg.png')]">
            {
              props.id !== 1 && <>
                {props.menus.map((menu, index) =>
                  <div key={index} className="w-1/3">
                    <div className="">
                      <div className='flex justify-between items-center cursor-pointer px-4 py-1.5  transition-all text-gray-700 dark:text-slate-400 '>
                        <div className="flex items-center gap-x-2">
                          <svg className='w-4 h-4'>
                            <use href={menu.icon}></use>
                          </svg>
                          {menu.title}
                        </div>
                      </div>

                    </div>

                    {menu.subMenus.length !== 0 && menu.subMenus.map((subMenu,ind) =>
                      <NavLink key={ind} to={subMenu.href} className=' block px-6 py-1.5 mx-4 whitespace-nowrap  transition-all rounded-md text-gray-700 dark:text-slate-400 hover:bg-slate-200 hover:dark:bg-slate-900/80'>
                        {subMenu.title}
                      </NavLink>
                    )}
                  </div>
                )}
              </>
            }
          </div>

        </div>
      }
    </div>

  )
}
