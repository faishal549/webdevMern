import { useEffect, useState } from "react";
import { useAuth } from "../Store/Auth";
import { Link } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin3Line } from "react-icons/ri";
export const AdminUser = () => {
    const [userData, setUserData] = useState()
    const { authorizationUserLoginToken } = useAuth();
    const { API } = useAuth()
    const URL = `${API}/api/admin/users`
    const getAllUserData = async () => {
        try {
            const response = await fetch(URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationUserLoginToken,
                },
            })

            const data = await response.json();

            setUserData(data)
        } catch (error) {
            console.log("Data not found in UI ")
        }
    }

    const handleUserDelete = async (id) => {
        try {
            const response = await fetch(`${URL}/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationUserLoginToken,
                },
            })
            const data = await response.json()


            if (response.ok) {
                getAllUserData()
            }

        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        getAllUserData()
    }, [handleUserDelete])
    return (
        <>
            <section className="">
                <div className="flex justify-around  bg-gray-500">
                    <h1 className="text-center text-xs md:text-xl font-bold text-white py-1">Registered User Details</h1>
                    <span className="text-orange-500 text-xs md:text-xl font-bold py-1 "> Total User Count :({userData?.length}) </span>
                </div>
                <div className="">

                    <table className="w-full bg-gray-600 border border-black ">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData && userData.map((curElem) => {
                                    return <tr className="border border-b-black" key={curElem.email}>
                                        <td className="text-center text-white capitalize">{curElem.username}</td>
                                        <td className="text-center text-white capitalize">{curElem.email}</td>
                                        <td className="text-center text-white capitalize">{curElem.phone}</td>
                                        <td className="text-center text-white capitalize"><Link to={`/admin/user/${curElem._id}/edit`}> <FaUserEdit /></Link></td>

                                        <td><button className=" text-white ml-0" onClick={() => handleUserDelete(curElem._id)}><span className=""><RiDeleteBin3Line /></span></button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </section>
        </>
    )
}