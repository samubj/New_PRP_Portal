import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CommonLoginScreen from './Components-Login/CommonLoginScreen'

const router = createBrowserRouter([
    {
        path: '/PRP_Portal/Login',
        element: <CommonLoginScreen />
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App