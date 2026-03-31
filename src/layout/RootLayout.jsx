import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import BoafoWidgetInitializer from '../../app/components/BoafoWidgetInitializer'

const RootLayout = () => {
    return (
        <div className="min-h-screen">
          <BoafoWidgetInitializer />
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
    )
}

export default RootLayout