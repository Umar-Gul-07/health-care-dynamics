import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const HospitalDashboardLayout = () => {
  return (
    <div className='dashboard-area company-dashboard pt-120 mb-120'>
        <div className='container'>
            <div className='row g-lg-4'>
                <Navbar />
                   <Outlet />
            </div>

        </div>
      
    </div>
  )
}

export default HospitalDashboardLayout
