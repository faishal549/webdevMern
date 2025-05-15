import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Services } from "./pages/Services"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { AppLayout } from "./Layout/AppLayout"
import { Logout } from "./pages/Logout"
import { AdminLayout } from "./Layout/AdminLayout"
import { AdminContact } from "./pages/AdminContact"

import { AdminUser } from "./pages/AdminUser"
import { AdminUpdate } from "./pages/AdminUpdate"


export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/Logout',
          element: <Logout />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },

      ]
    },
    // here i am doing nesting 
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          path: 'user',
          element: <AdminUser />

        },
        {
          path: 'user/:id/edit',
          element: <AdminUpdate />

        },
        {
          path: 'contact',
          element: <AdminContact />

        },


      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}