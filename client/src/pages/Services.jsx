import { GrLanguage } from "react-icons/gr";
import { useAuth } from "../Store/Auth"
export const Services = () => {
    const userApi = useAuth();


    return (
        <>
            <div className="">

                <h1 className="text-2xl px-5 py-2 text-cyan-500 font-bold">WebDev</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 py-10 ">

                    {userApi.service.map((curElem) => {
                        const { imgURL, name, description, rating, language } = curElem;
                        return (
                            <div className="px-2 py-4 border-t-gray-600 border border-black rounded-xl shadow-2xl" key={name}>
                                <div className="">
                                    <img src={imgURL} alt="course"
                                        className="w-[15rem] md:w-[20rem] h-[10rem] md:h-[15rem] mx-auto rounded-xl" />
                                </div>
                                <div className="px-2 py-4">
                                    <p className="font-bold py-1 text-white text-2xl">{name}</p>
                                    <p className="font-semibold py-1 text-white">{description}</p>
                                    <h1 className="py-1 text-white">Rating:{rating}</h1>
                                    <div className="flex justify-between mt-5">
                                        <p className="font-bold text-white"><span><GrLanguage /></span>{language}</p>
                                        <button className="px-4 py-1 bg-blue-900 rounded-full text-white font-semibold cursor-pointer">view-more</button>
                                    </div>
                                </div>

                            </div>


                        )
                    })
                    }
                </div>
            </div>

        </>
    )
}