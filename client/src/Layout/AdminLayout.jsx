import { Navigate, NavLink, Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

import { useAuth } from "../Store/Auth"

export const AdminLayout = () => {
    const { userInfo, isLoading } = useAuth()
    if (isLoading) {
        return <h1 className="text-center text-6xl text-orange-800">Loading...</h1>
    }
    if (!userInfo.isAdmin) {
        return <Navigate to="/" />
    }
    return (

        <>

            <Header />
            <header>
                <div className="">
                    <nav className="w-full bg-blue-950">
                        <h1 className="text-white font-bold text-2xl underline underline-offset-2 text-center">Admin-Dashboard</h1>
                        <ul className="flex px-10 py-5 gap-10">
                            <li className="text-white font-bold text-xl hover:underline underline-offset-2"><NavLink to="user">Users</NavLink></li>
                            <li className="text-white font-bold text-xl hover:underline underline-offset-2"><NavLink to="contact">Contacts</NavLink></li>

                        </ul>
                    </nav>

                </div>
            </header>
            <Outlet />
            <Footer />

        </>
    )
}