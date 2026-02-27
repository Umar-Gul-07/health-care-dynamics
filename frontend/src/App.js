import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import './App.css';
import Home from "./Pages/Home";
import FindJob from "./Pages/FindJob";
import JobList from "./Pages/JobList";
import JobDetails from "./Pages/JobDetails";
import UserProfile from "./Pages/user/UserProfile";
import UserDashboard from "./Pages/user/UserDashboard";
import AppliedJobs from "./Pages/user/AppliedJobs";
import BookMarks from "./Pages/user/BookMarks";
import DashboardLayout from "./Pages/user/DashboardLayout";
import UserSetting from "./Pages/user/UserSetting";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Blogs from "./Pages/Blogs";
import BlogsDetail from "./Pages/BlogsDetail";
import Contact from "./Pages/Contact";
import HospitalDashboard from "./Pages/hospital/HospitalDashboard";
import HospitalDashboardLayout from "./Pages/hospital/HospitalDashboardLayout";
import HospitalProfile from "./Pages/hospital/HospitalProfile";
import HospitalSetting from "./Pages/hospital/HospitalSetting";
import PostJob from "./Pages/hospital/PostJob";
import AdminJobsList from "./Pages/admin/AdminJobsList";
import HospitalListing from "./Pages/admin/HospitalListing";
import HospitalDetail from "./Pages/admin/HospitalDetail";
import Subscriptions from "./Pages/admin/Subscriptions";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import AdminLayout from "./Pages/admin/AdminLayout";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home /></Base>} />
          <Route path='/find-job' element={<Base><FindJob /></Base>} />
          <Route path='/job-listing' element={<Base><JobList /></Base>} />
          <Route path='/job-details' element={<Base><JobDetails /></Base>} />
          <Route path='/login' element={<Base><Login/></Base>} />
          <Route path='/register' element={<Base><Registration/></Base>} />
          <Route path='/blog' element={<Base><Blogs/></Base>} />
          <Route path='/blog-details' element={<Base><BlogsDetail/></Base>} />
          <Route path='/contact' element={<Base><Contact/></Base>} />
          <Route path='/post-job' element={<Base><PostJob/></Base>} />

          {/* User Routes */}
          <Route element={<Base><DashboardLayout /></Base>}>
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/user-profile' element={<UserProfile />} />
            <Route path='/applied-jobs' element={<AppliedJobs />} />
            <Route path='/bookmark' element={<BookMarks />} />
            <Route path='/user-setting' element={<UserSetting />} />
          </Route>


          {/* Hospital Routes */}
         <Route element={<Base><HospitalDashboardLayout/></Base>}>
            <Route path='/hospital-dashboard' element={<HospitalDashboard />} />
            <Route path='/hospital-profile' element={<HospitalProfile />} />
            <Route path='/hospital-jobs' element={<JobList />} />
             <Route path='/hospital-setting' element={<HospitalSetting />} />
          </Route>


           {/* User Routes */}
           <Route element={<AdminLayout />}> 
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/Jobs' element={<AdminJobsList />} />
            <Route path='/hospital-listing' element={<HospitalListing />} />
            <Route path='/hospital-detail' element={<HospitalDetail />} />
            <Route path='/subscriptions' element={<Subscriptions />} />
          </Route>





          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
