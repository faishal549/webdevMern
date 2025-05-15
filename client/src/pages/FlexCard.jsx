import { AiOutlineSafetyCertificate } from "react-icons/ai"
import { GrUserExpert } from "react-icons/gr"
import { IoBulbOutline } from "react-icons/io5"
import { MdOutlineAssignment, MdOutlineComputer } from "react-icons/md"
import { SiYoutubemusic } from "react-icons/si"


const FlexCard = () => {
    return (
        <>
            <div className="w-full md:w-2/3 mx-auto grid grid-cols-2 md:grid-cols-3">

                <div className="ml-2 md:ml-0 w-44 md:w-56 border border-amber-400 px-5 py-10 rounded-2xl my-5">
                    <p className="text-white text-2xl"><MdOutlineComputer /></p>
                    <h1 className="text-orange-400 font-bold">Learn On Demand</h1>
                    <p className="text-white">Learn at your own pace, from anywhere in the world.</p>
                </div>

                <div className="ml-2 md:ml-0 w-44 md:w-56 border border-amber-400 px-5 py-10 rounded-2xl my-5">
                    <p className="text-white text-2xl"><GrUserExpert /></p>
                    <h1 className="text-orange-400 font-bold">Expert Guidance</h1>
                    <p className="text-white">Learn everything from the best in the industry experts</p>
                </div>

                <div className="ml-2 md:ml-0 w-44 md:w-56 border border-amber-400 px-5 py-10 rounded-2xl my-5">
                    <p className="text-white text-2xl"><AiOutlineSafetyCertificate /></p>
                    <h1 className="text-orange-400 font-bold">Certificate On completion</h1>
                    <p className="text-white">After completing the course, you'll receive a certificate.</p>
                </div>




                <div className="ml-2 md:ml-0 w-44 md:w-56 border border-amber-400 px-5 py-10 rounded-2xl my-5">
                    <p className="text-white text-2xl"><IoBulbOutline /></p>
                    <h1 className="text-orange-400 font-bold">Project Based Learning</h1>
                    <p className="text-white">Learn everything from scratch by building super-cool projects.</p>
                </div>

                <div className="ml-2 md:ml-0 w-44 md:w-56 border border-amber-400 px-5 py-10 rounded-2xl my-5">
                    <p className="text-white text-2xl"><SiYoutubemusic /></p>
                    <h1 className="text-orange-400 font-bold">In Depth High Quality Videos</h1>
                    <p className="text-white">Get access to all the high quality videos at your finger tips.</p>
                </div>

                <div className="ml-2 md:ml-0 w-44 md:w-56 border border-amber-400 px-5 py-10 rounded-2xl my-5">
                    <p className="text-white text-2xl"><MdOutlineAssignment /></p>
                    <h1 className="text-orange-400 font-bold">Assignments</h1>
                    <p className="text-white">Solve a lot of assignments, and yourself a better developer.</p>
                </div>

            </div>

        </>
    )
}

export default FlexCard