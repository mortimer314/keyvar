import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import CustomizeContext from '../../../context/costomizeContext'

export default function EcommerceWidget({ newOrders = '57', orders = '5', products = '15' }) {

  const { language ,theme} = useContext(CustomizeContext)
  const isLnaguageFa = language === "fa"
  const isDark = theme === "dark"

  return (
    <>
      {!isLnaguageFa ? 
      <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center gap-6 ">

        <div className="flex items-center gap-x-4">
          <div className="">
            {isDark ?
              <img src="https://mortimer314.github.io/files/src/assets/images/dark-w-1.png" alt="" /> :
              <img src="https://mortimer314.github.io/files/src/assets/images/w-1.png" alt="" />
            }
          </div>
          <div className="">
            <div className='text-gray-700 dark:text-white font-bold text-lg flex gap-x-2'>
              <span>{newOrders}</span>
              <span>new orders</span>
            </div>
            <div className='text-gray-600 dark:text-gray-300 text-sm'>Awating processing</div>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="">
            {isDark ?
              <img src="https://mortimer314.github.io/files/src/assets/images/dark-w-2.png" alt="" /> :
              <img src="https://mortimer314.github.io/files/src/assets/images/w-2.png" alt="" />
            }
          </div>
          <div className="">
            <div className='text-gray-700 dark:text-white font-bold text-lg flex gap-x-2'>
              <span>{orders}</span>
              <span> orders</span>
            </div>
            <div className='text-gray-600 dark:text-gray-300 text-sm'>On hold</div>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="">
            {isDark ?
              <img src="https://mortimer314.github.io/files/src/assets/images/dark-w-3.png" alt="" /> :
              <img src="https://mortimer314.github.io/files/src/assets/images/w-3.png" alt="" />
            }
          </div>
          <div className="">
            <div className='text-gray-700 dark:text-white font-bold text-lg flex gap-x-2'>
              <span>{products}</span>
              <span>products</span>
            </div>
            <div className='text-gray-600 dark:text-gray-300 text-sm'>Out of stock</div>
          </div>
        </div>
      </div> : 
      <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center gap-6 font-Dana">

      <div className="flex items-center gap-x-4">
        <div className="">
          {isDark ?
            <img src="https://mortimer314.github.io/files/src/assets/images/dark-w-1.png" alt="" /> :
            <img src="https://mortimer314.github.io/files/src/assets/images/w-1.png" alt="" />
          }
        </div>
        <div className="">
          <div className='text-gray-700 dark:text-white font-bold text-lg flex gap-x-2'>
            <span>{newOrders}</span>
            <span>سفارش جدید</span>
          </div>
          <div className='text-gray-600 dark:text-gray-300 text-sm'>در حال پردازش</div>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <div className="">
          {isDark ?
            <img src="https://mortimer314.github.io/files/src/assets/images/dark-w-2.png" alt="" /> :
            <img src="https://mortimer314.github.io/files/src/assets/images/w-2.png" alt="" />
          }
        </div>
        <div className="">
          <div className='text-gray-700 dark:text-white font-bold text-lg flex gap-x-2'>
            <span>{orders}</span>
            <span> سفارش </span>
          </div>
          <div className='text-gray-600 dark:text-gray-300 text-sm'>معلق شده</div>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <div className="">
          {isDark ?
            <img src="https://mortimer314.github.io/files/src/assets/images/dark-w-3.png" alt="" /> :
            <img src="https://mortimer314.github.io/files/src/assets/images/w-3.png" alt="" />
          }
        </div>
        <div className="">
          <div className='text-gray-700 dark:text-white font-bold text-lg flex gap-x-2'>
            <span>{products}</span>
            <span>محصول</span>
          </div>
          <div className='text-gray-600 dark:text-gray-300 text-sm'>تمام شده</div>
        </div>
      </div>
    </div>}
    </>
  )
}
