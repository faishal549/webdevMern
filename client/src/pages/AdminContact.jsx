import { useEffect, useState } from "react"
import { useAuth } from "../Store/Auth";

export const AdminContact = () => {

    const { authorizationUserLoginToken } = useAuth()
    const { API } = useAuth()
    const URL = `${API}/api/admin/contacts`
    const [contactMail, setContactMail] = useState([])

    const getContactMessage = async () => {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                Authorization: authorizationUserLoginToken,
            }
        })
        if (response.ok) {
            const data = await response.json()

            setContactMail(data)

        }
    }

    // delete contact message
    const handleDeleteMessage = async (id) => {

        try {
            const response = await fetch(`${URL}/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationUserLoginToken,
                }
            })

            if (response.ok) {
                getContactMessage()
            }

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        getContactMessage()
    }, [handleDeleteMessage])

    // delete contact message


    return (
        <>
            <div className="bg-gray-600 py-10">



                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

                    {contactMail && contactMail.map((curElem) => {
                        const { username, email, message } = curElem;
                        return (

                            <div className="bg-black opacity-80 rounded-xl" key={curElem._id}>

                                <div className="">

                                    <h1 className="text-white font-semibold px-5 py-1 text-xl">Username: {username}</h1>
                                    <h1 className="text-white font-semibold px-5 py-1">Email: {email}</h1>

                                    <h2 className="text-white font-semibold px-5 py-1">Message: {message}</h2>

                                    <button type="submit" className="ml-10 my-5 px-3 py-1 text-white bg-blue-900 rounded-l cursor-pointer" onClick={() => handleDeleteMessage(curElem._id)}>Delete</button>


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