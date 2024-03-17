import { Button } from "@/components/ui/button"
import { lazy, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'sonner'




const Home = lazy(() => import("./../pages/Home"))



const Login = lazy(() => import("./../pages/Login"))
const Test = lazy(() => import("./../pages/Test"))
const Details = lazy(() => import("./../public/components/Details"))



const Dashboard = lazy(() => import("./../admin/pages/Dashboard"))

const EmployerDashboard = lazy(() => import("./../employer/page/EmployerDashboard"))
const AddJob = lazy(() => import("./../employer/page/AddJob"))
const Applications = lazy(() => import("./../employer/page/Applications"))


const Profile = lazy(() => import("./../condidate/pages/Profile"))
const Hisotry = lazy(() => import("./../condidate/component/History"))

const CaondidateNavbar = lazy(() => import("./../condidate/component/CandidateNavbar"))
const EmployerLayout = lazy(() => import("./../employer/page/EmployerLayout"))
const PublicNavbar = lazy(() => import("./../public/components/PublicNavbar"))

// const { CandidateProtected, EmployerProtected } = lazy(() => import("./../share/Protected"))
const EmployerProtected = lazy(() => import("./../share/EmployerProtected"))
const CandidateProtected = lazy(() => import("./../share/CandidateProtected"))
const AdminProtected = lazy(() => import("./../share/AdminProtected"))



const Error = ({ error, resetErrorBoundary }) => {
    return <>
        <p className="text-red-500">{error.message}</p>
        <Button onClick={resetErrorBoundary}>Retry</Button>

    </>
}
const Loading = () => <h1>Loading..................</h1>

export const USER_ROUTES = [
    { path: "index", element: <Profile />, label: "profile" },
    { path: "history", element: <Hisotry />, label: "history" },
]


export const EMPLOYER_ROUTES = [

    { path: "index", element: <EmployerDashboard />, label: "dashboard" },
    { path: "add-job", element: <AddJob />, label: "Add Job" },
    { path: "view-applications", element: <Applications />, label: "applications" },
]


export const ADMIN_ROUTES = [

    { path: "index", element: <Dashboard />, label: "Dashboard" },
]


export const PUBLIC_ROUTES = [
    { path: "index", element: <Home />, label: "home" },
    { path: "test", element: <Test />, label: "test" },
    { path: "details/:id", element: <Details />, label: "details" },
]

export const MAIN_ROUTE = <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Toaster richColors position='top-center' />
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<><PublicNavbar /><Outlet /></>}>
                {
                    PUBLIC_ROUTES.map(item => item.path === "index"
                        ? <Route index element={<ErrorBoundary FallbackComponent={Error}>
                            <Suspense fallback={<Loading />}>
                                {item.element}
                            </Suspense>
                        </ErrorBoundary>} />
                        : <Route path={item.path} element={<ErrorBoundary FallbackComponent={Error}>
                            <Suspense fallback={<Loading />}>
                                {item.element}
                            </Suspense>
                        </ErrorBoundary>} />)
                }
            </Route>
            <Route path="/user" element={<><CandidateProtected compo={<CaondidateNavbar />} /></>}>
                {
                    USER_ROUTES.map(item => item.path === "index"
                        ? <Route index element={<ErrorBoundary FallbackComponent={Error}>
                            <Suspense fallback={<Loading />}>
                                {item.element}
                            </Suspense>
                        </ErrorBoundary>} />
                        : <Route path={item.path} element={<ErrorBoundary FallbackComponent={Error}>
                            <Suspense fallback={<Loading />}>
                                {item.element}
                            </Suspense>
                        </ErrorBoundary>} />)
                }
            </Route>
            <Route path="/admin" element={<><Outlet /> </>}>
                {
                    ADMIN_ROUTES.map(item => item.path === "index"
                        ? <Route index element={<ErrorBoundary FallbackComponent={Error}>
                            <Suspense fallback={<Loading />}>
                                {item.element}
                            </Suspense>
                        </ErrorBoundary>} />
                        : <Route path={item.path} element={<ErrorBoundary FallbackComponent={Error}>
                            <Suspense fallback={<Loading />}>
                                {item.element}
                            </Suspense>
                        </ErrorBoundary>} />)
                }
            </Route>
            <Route path="/employer" element={<><EmployerProtected compo={<EmployerLayout />} /></>}>
                {
                    EMPLOYER_ROUTES.map(item => item.path === "index"
                        ? <Route index element={<ErrorBoundary FallbackComponent={Error}>
                            <Suspense fallback={<Loading />}>
                                {item.element}
                            </Suspense>
                        </ErrorBoundary>} />
                        : <Route path={item.path} element={<ErrorBoundary FallbackComponent={Error}>
                            <Suspense fallback={<Loading />}>
                                {item.element}
                            </Suspense>
                        </ErrorBoundary>} />)
                }
            </Route>
            <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>

    </BrowserRouter>


</GoogleOAuthProvider>