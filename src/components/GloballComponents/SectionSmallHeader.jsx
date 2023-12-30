import React, { useContext } from 'react'
import CustomizeContext from '../../context/costomizeContext'

export default function SectionSmallHeader({ title, subtitle }) {

  const { language } = useContext(CustomizeContext)
  const isLnaguageFa = language === "fa"

  return (
    <>
      {
        !isLnaguageFa ? <div className='space-y-2'>
          <div className="text-gray-800/95 dark:text-white text-xl lg:text-2xl font-bold">{title.en}</div>
          <div className="text-gray-600 dark:text-gray-300 text-sm lg:text-base ">{subtitle.en}</div>
        </div> :
          <div className='space-y-3'>
            <div className="text-gray-800/95 dark:text-white text-xl lg:text-2xl font-bold">{title.fa}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm lg:text-base ">{subtitle.fa}</div>
          </div>
      }
    </>

  )
}
