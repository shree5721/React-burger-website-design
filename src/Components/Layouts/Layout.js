import React from 'react'
import Header from "../../Components/Layouts/Header"
import Footer from "../../Components/Layouts/Footer"


function Layout({children}) {
  return (
    <>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout