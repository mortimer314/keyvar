import React, { useContext } from 'react'
import BreadcrumbsWrapper from './BreadCrumbsWrapper'
import CustomizeContext from '../../context/costomizeContext'
import SectionHeader from "../GloballComponents/SectionHeader"

const breadcrumbsData = [{ id: 1, href: "/keyvar", title: "Pages" }, { id: 1, href: "#", title: "Notifications" }]
const faBreadcrumbsData = [{ id: 1, href: "/keyvar", title: "صفحه اصلی" }, { id: 1, href: "#", title: "اطلاعیه ها" }]

function NotificationHeader() {

    const { language } = useContext(CustomizeContext)
    const isLanguageFa = language === "fa"

    return (
        <div className='px-6 lg:px-10 py-6 space-y-1'>
            <BreadcrumbsWrapper breadcrumbsData={isLanguageFa ? faBreadcrumbsData : breadcrumbsData} />
            <SectionHeader title={{ en: "Notifications", fa: "اطلاعیه ها" }} subtitle={false} />
        </div>
    )
}

export default NotificationHeader
