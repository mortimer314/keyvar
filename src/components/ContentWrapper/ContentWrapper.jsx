
import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'



export default function ContentWrapper({ children }) {


    return ReactDOM.createPortal(
        <div>
            {children}
        </div>,
        document.getElementById("content-parent")

    )
}
