import React, { useContext } from 'react'
import EcommerceDashboard from './EcommerceDashboard/EcommerceDashboard'
import CustomizeContext from '../../context/costomizeContext'
import EcommerceLatestReviews from './EcommerceLatestReviews/EcommerceLatestReviews'
import TopRegions from './EcommerceTopRegions/TopRegions'
import EcommerceEarning from './EcommerceErnings/EcommerceEarning'


export default function Ecommerce() {
  const { language } = useContext(CustomizeContext)
  const isLnaguageFa = language === "fa"

  return (
    <div className={isLnaguageFa ? 'font-Dana' : ''}>

      <section className='border-b border-solid border-gray-400 dark:border-slate-600'>
        <EcommerceDashboard />
      </section>

      <section>
        <EcommerceLatestReviews />
      </section>

      <section>
        <TopRegions />
      </section>

      <section>
        <EcommerceEarning />
      </section>

    </div>
  )
}
