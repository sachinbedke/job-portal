import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import Test from './pages/Test'
// import PublicNavbar from './public/components/PublicNavbar'
// import Dashboard from './admin/pages/Dashboard'
// import Login from './pages/Login'
// import { GoogleOAuthProvider } from '@react-oauth/google'
// import EmployerDashboard from './employer/page/EmployerDashboard'
// import { CandidateProtected, EmployerProtected } from './share/Protected'
// import AddJob from './employer/page/AddJob'
// import Applications from './employer/page/Applications'
// import ActiveEmployer from './employer/page/ActiveEmployer'
// import EmployerLayout from './employer/page/EmployerLayout'
// import Details from './public/components/Details'
// import Profile from './condidate/pages/Profile'
// import { Toaster } from 'sonner'
// import CandidateNavbar from './condidate/component/CandidateNavbar'
// import History from './condidate/component/History'
import { MAIN_ROUTE } from './lib/Routes'

const App = () => {
  return MAIN_ROUTE
  // return <Profile />
  return <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Toaster richColors position='top-center' />
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path='/' element={<><PublicNavbar /> <Outlet />  </>}>
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path='/admin' element={<> <Outlet />  </>}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path='/user' element={<> <CandidateProtected compo={<CandidateNavbar />} />  </>}>
          <Route index element={<Profile />} />
          <Route path='history' element={<History />} />
        </Route>
        <Route path='/employer' element={<> <EmployerProtected compo={<EmployerLayout />} />  </>}>
          <Route index element={<EmployerDashboard />} />
          <Route path='add-job' element={<ActiveEmployer compo={<AddJob />} />} />
          <Route path='view-applications' element={<ActiveEmployer compo={<Applications />} />} />
        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter >
  </GoogleOAuthProvider>
}

export default App