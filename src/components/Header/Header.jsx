import React from 'react'
import Topbar from './Topbar'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className='header fixed top-0 right-0 left-0'>
            <Topbar/>
            <Navbar/>
        </div>
    )
}
