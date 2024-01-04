import React from 'react'
import SectionSmallHeader from '../../GloballComponents/SectionSmallHeader'
import ChartActualEarnings from "./ChartActualEarnings"
import ChartReturningCustomerRate from './ChartReturningCustomerRate'

export default function EcommerceEarning() {
  return (
    <div className="grid grid-cols-1 gap-y-8 xl:grid-cols-2 p-6 xl:p-8">
      <div className="">
        <SectionSmallHeader title={{ en: "Projection vs actual", fa: "واقعی و غیر واقعی" }} subtitle={{ en: "Actual earnings vs projected earnings", fa: "سود واقعی در مقابل سود پیش بینی شده" }} />

        <div className="">
          <ChartActualEarnings />
        </div>
      </div>
      <div className="">
        <SectionSmallHeader title={{ en: "Returning customer rate", fa: "نرخ مشتری برگشتی" }} subtitle={{ en: "Rate of customers returning to your shop over time", fa: "نرخ بازگشت مشتریان به فروشگاه شما در طول زمان" }} />

        <div className="">
          <ChartReturningCustomerRate />
        </div>
      </div>
    </div>
  )
}
