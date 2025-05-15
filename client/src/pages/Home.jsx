import { MdOutlineComputer } from "react-icons/md"
import FlexCard from "./FlexCard"
import { Link } from "react-router-dom"
import { useAuth } from "../Store/Auth"


export const Home = () => {
    const { userInfo } = useAuth()
    const { isLoggedIn } = useAuth()

    return (
        <>
            {isLoggedIn ? <h1 className="my-8 mx-4 text-2xl font-bold  text-cyan-200">Welcome {userInfo?.username}. </h1> : ""}

            <div className="w-full md:w-1/2 mx-auto py-20">

                <div>
                    <h2 className="text-4xl md:text-6xl font-bold text-center text-orange-300">Learn. Code. Succeed.</h2>
                    <h2 className="text-xl md:text-4xl font-bold text-orange-300 text-center underline underline-offset-4">Start Your Journey Today</h2>
                    <p className="text-orange-400 text-center my-6">Take the leap into the world of coding with our comprehensive courses.
                        Learn from top industry mentors and gain practical experience through real-world projects.
                        Whether it's frontend, backend, or full-stack development, we’ve got you covered.</p>
                    {isLoggedIn ?
                        <Link to="/services">  <button className="ml-25 md:ml-55 font-semibold px-16 py-2 text-white bg-cyan-600 mx-70 rounded-2xl cursor-pointer mt-5 hover:bg-cyan-400"> Explore Courses </button></Link> :
                        <Link to="/register">  <button className="ml-40 md:ml-65 text-center px-4 py-2 text-white bg-cyan-600 mx-70 rounded-full cursor-pointer mt-5 hover:bg-cyan-400"> Get Started</button></Link>
                    }
                </div>
            </div>

            <FlexCard />

        </>
    )
}                    