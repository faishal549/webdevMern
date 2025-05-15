import { NavLink } from "react-router-dom"
import { useAuth } from "../Store/Auth"
import { LOGO } from "../utils/constant"
import { useState } from "react"
import { TfiLayoutMenuV } from "react-icons/tfi"
export const Header = () => {
    const { isLoggedIn } = useAuth()
    const [isMenu, setIsMenu] = useState(false)
    return (



        <div className="md:grid grid-cols-12 bg-cyan-600">
            <div className="col-span-4 flex">
                <img src={LOGO} alt="logo" className="w-15 h-15 rounded-full my-2 mx-2 shadow-2xl" />
                <p className="text-white font-bold space-x-1 my-auto px-1">WebDev</p>
            </div>
            <div className="col-span-8">
                <div className="absolute right-1 top-6 md:hidden">
                    <button className=" text-white border border-white cursor-pointer text-2xl md:hidden " onClick={() => setIsMenu(!isMenu)}><TfiLayoutMenuV /></button>

                </div>
                {isMenu ? <ul className="relative top-0 left-0">
                    <li className="px-2 py-2 bg-gray-900  text-center text-white font-bold cursor-pointer">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    {isLoggedIn && <li className="px-2 py-2 bg-gray-900 text-center text-white font-bold cursor-pointer">
                        <NavLink to="/services">
                            Courses
                        </NavLink>
                    </li>}
                    <li className="px-2 py-2 bg-gray-900  text-center text-white font-bold cursor-pointer">
                        <NavLink to="/contact">
                            Contact-Us
                        </NavLink>
                    </li>
                    {
                        isLoggedIn ? (

                            <li className="px-2 py-2 bg-gray-900  text-center text-white font-bold cursor-pointer">
                                <NavLink to="/Logout">
                                    Logout
                                </NavLink>
                            </li>) :

                            <li className="px-2 py-2 bg-gray-900  text-center text-white font-bold cursor-pointer">
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </li>
                    }
                </ul> : ""
                }

                <ul className="hidden md:flex justify-center gap-10 mx-7 mt-6">
                    <li className="text-white font-semibold text-xl hover:underline underline-offset-2 ">
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>


                    {/* <li>
                    <NavLink to="/about">
                     About
                    </NavLink>
                </li> */}
                    {isLoggedIn && <li className="text-white font-semibold text-xl hover:underline underline-offset-2 ">
                        <NavLink to="/services">
                            Courses
                        </NavLink>
                    </li>}

                    <li className="text-white font-semibold text-xl hover:underline underline-offset-2 ">
                        <NavLink to="/contact">
                            Contact-Us
                        </NavLink>
                    </li>


                    {
                        isLoggedIn ? (
                            <li className="text-white font-semibold text-xl hover:underline underline-offset-2 ">
                                <NavLink to="/Logout">
                                    Logout
                                </NavLink>
                            </li>
                        ) : (<>
                            <li className="text-white font-semibold text-xl hover:underline underline-offset-2 ">
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </li>

                            {/* <li className="text-white font-semibold text-xl hover:underline underline-offset-2 ">
                                <NavLink to="/register">
                                    Sign Up
                                </NavLink>
                            </li> */}
                        </>)
                    }


                </ul>
            </div>
        </div>
    )
}