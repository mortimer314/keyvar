import React from 'react'
import NotificationHeader from './NotificationHeader'
import NotificationSection from './NotificationSection'

const notificationsData = [0,0,0,0]
const yesterdayNotifications = [0,0,0,0,0,0]
export default function Notifications() {
  return (
    <div className='notifications h-full'>
        <NotificationHeader/>
        <NotificationSection title={{en:"Today",fa:"امروز"}} notifications={notificationsData}/>
        <NotificationSection title={{en:"Yesterday",fa:"دیروز"}} notifications={yesterdayNotifications}/>

    </div>
  )
}
