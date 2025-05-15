import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout = () => {
    return (

        <>
            <div className="bg-gray-900">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}