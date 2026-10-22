
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CommonLoginScreen from './Components-Login/CommonLoginScreen'
import ForgotPassword from './Components-Login/ForgotPassword'
import PlacementReset from './Components-Login/PlacementReset'
import ResetPassword from './Components-Login/ResetPassword'
import SuccessfulPage from './Components-Login/SuccessfulPage'
import WelcomeRegistrationScreen from './Components-Registration/WelcomeRegistrationScreen'

const router = createBrowserRouter([
    {
        path: '/PRP_Portal/Login',
        element: <CommonLoginScreen />
    },
    {
        path: '/PRP_Portal/ForgotPassword',
        element: <ForgotPassword />
    },
    {
        path: '/PRP_Portal/ResetLink',
        element: <PlacementReset />
    },
    {
        path: '/PRP_Portal/ResetPassword',
        element: <ResetPassword />
    },
    {
        path: '/PRP_Portal/SuccessfulPage',
        element: <SuccessfulPage />
    },
    {
        path: '/PRP_Portal/WelcomeRegistration',
        element: <WelcomeRegistrationScreen />
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
