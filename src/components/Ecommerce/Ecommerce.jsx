import React, { useContext } from 'react'
import EcommerceDashboard from './EcommerceDashboard/EcommerceDashboard'
import CustomizeContext from '../../context/costomizeContext'

export default function Ecommerce() {
  const { language } = useContext(CustomizeContext)
  const isLnaguageFa = language === "fa"

  return (
    <div className={isLnaguageFa ? 'font-Dana' : ''}>
      <section>
        <EcommerceDashboard />
      </section>
    </div>
  )
}
