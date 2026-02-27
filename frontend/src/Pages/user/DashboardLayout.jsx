import React from 'react';
import { Outlet } from 'react-router-dom';
import UserSidebar from './UserSidebar';

const DashboardLayout = () => {
    return (
        <div className="dashboard-area pt-120 mb-120">
            <div className="container">
                <div className="row g-lg-4 gy-5 mb-90">
                    <UserSidebar />
                    <div className="col-lg-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
