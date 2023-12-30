import React from 'react'

export default function MainContentFooter() {
  return (
    <div className="main-content-footer flex items-center justify-center sm:justify-between px-6 md:px-10 py-5 
        font-medium text-gray-600 dark:text-slate-400 flex-wrap gap-x-3 ltr-dir
        border-t border-solid dark:border-slate-600 border-gray-400">
          <div className="flex flex-wrap gap-x-2 justify-center ">
            <div className="text-center">
              Thank you from Phoenix and Themewagon | 2023 ©
            
            <a target='_blank' className='text-blue-500 hover:text-blue-700 hover:underline' href="https://themewagon.com/">
              Themewagon
            </a></div>
          </div>
          <div className="version">
            v.1.0.0
          </div>
        </div>
  )
}
