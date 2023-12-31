import React from 'react'
import SectionHeader from '../../GloballComponents/SectionHeader'
import EcommerceWidget from './EcommerceWidget'
import ChartOfTotalSells from './ChartOfTotalSells'
import SectionSmallHeader from '../../GloballComponents/SectionSmallHeader'
import ChartBoxWraper from './ChartBoxWraper'
import ChartBoxHeader from './ChartBoxHeader'
import ChartTotalOrdersInLastWeek from './ChartTotalOrdersInLastWeek'
import ChartNewCustomersInLastWeek from './ChartNewCustomersInLastWeek'
import CharPercenttPaying from './CharPercenttPaying'
import ChartTopCoupons from './ChartTopCoupons'

export default function EcommerceDashboard() {
  return (
    <div className=' grid grid-cols-1 2xl:grid-cols-2 gap-4 bg-slate-100 dark:bg-slate-950 p-6 lg:p-8'>
      <div className="main-details ">

        <div className="ecommerce-header space-y-8 2xl:space-y-14 pb-4 border-b border-solid border-gray-300 dark:border-slate-600">
          <div className="header-wrapper">
            <SectionHeader title={{ fa: 'داشبورد تجارت الکترونیک', en: "Ecommerce Dashboard" }} subtitle={{ fa: 'این چیزی است که در حال حاضر در کسب و کار شما می گذرد.', en: "Here’s what’s going on at your business right now" }} />
          </div>

          <div className="widgets-wrapper">
            <EcommerceWidget newOrders='57' orders='5' products='15' />
          </div>

        </div>

        <div className="total-sells pt-8">
          <div className="total-sells-header flex justify-between">
            <div className="total-sells-header-title">
              <SectionSmallHeader title={{ fa: "مجموع فروش", en: "Total sells" }} subtitle={{ fa: 'پرداخت در تمام کانال ها دریافت شد.', en: "Payment received across all channels" }} />
            </div>
            <div className="chart-area-selection-wrapper">
              <select className='profile-card__input w-56  bg-white dark:bg-slate-900 ' name="" id="">
                <option value="1">Mar 1-31 ,2023</option>
                <option value="2">April 1-30 ,2023</option>
                <option value="3">May 1-30 ,2023</option>
              </select>
            </div>
          </div>
          <div className="total-sells-chart-wrapper flex-center">
            <ChartOfTotalSells />
          </div>
        </div>
      </div>
      <div className="chart-boxes grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <ChartBoxWraper>
          <ChartBoxHeader title={{fa:"همه سفارش ها",en:"Total orders"}} subtitle={{fa:"هفته اخیر",en:"Last 7 days"}} tolerancs={-6.8} mainValue={16247}/>
          <ChartTotalOrdersInLastWeek/>
        </ChartBoxWraper>
       
        <ChartBoxWraper>
          <ChartBoxHeader title={{fa:"مشتریان جدید",en:"New customers"}} subtitle={{fa:"هفته اخیر",en:"Last 7 days"}} tolerancs={+26.5} mainValue={356}/>
          <ChartNewCustomersInLastWeek/>
        </ChartBoxWraper>
       
        <ChartBoxWraper>
          <ChartBoxHeader title={{fa:"تخفیف های برتر",en:"Top coupons"}} subtitle={{fa:"هفته اخیر",en:"Last 7 days"}}  />
          <ChartTopCoupons/>
        </ChartBoxWraper>
       
        <ChartBoxWraper>
          <ChartBoxHeader title={{fa:'پرداخت در مقابل عدم پرداخت',en:"Paying vs non paying"}} subtitle={{fa:"هفته اخیر",en:"Last 7 days"}} />
          {/* <CharPercenttPaying/> */}
          <ChartTotalOrdersInLastWeek/>

        </ChartBoxWraper>
       
      </div>
    </div>
  )
}
