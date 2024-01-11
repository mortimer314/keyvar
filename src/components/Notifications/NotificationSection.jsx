import React, { useContext } from 'react'
import NotificationItem from './NotificationItem'
import CustomizeContext from '../../context/costomizeContext'

function NotificationSection({ title, notifications }) {

    const { language } = useContext(CustomizeContext)
    const isLanguageFa = language === "fa"

    return (
        <div className='mb-12'>
            <div className="px-6 pb-3 lg:px-10 font-bold text-gray-800 dark:text-gray-100 mt-4">{isLanguageFa ? title.fa : title.en}</div>
            <div className="min-h-fit   grid grid-cols-1 content-start
                     divide-solid  divide-y divide-gray-300 border-y border-solid border-gray-300 dark:border-slate-600
                    [&>*:hover]:dark:bg-slate-700/90 [&>*:hover]:bg-slate-300  [&>*]:transition-all
                    dark:divide-slate-600">
                {notifications.map((item, index) => <NotificationItem key={index} />)}
            </div>
        </div>
    )
}

export default NotificationSection
