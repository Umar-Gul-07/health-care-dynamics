import React from 'react'
import AdminNav from './AdminNav'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
     <div className='dashboard-area company-dashboard pt-120 mb-120'>
        <div className='container'>
            <div className='row g-lg-4'>
                <AdminNav />
                   <Outlet />
            </div>

        </div>
      
    </div>
  )
}

export default AdminLayout
