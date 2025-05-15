import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../Store/Auth"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    })
    const params = useParams()

    const { authorizationUserLoginToken } = useAuth()
    const { API } = useAuth()
    const URL = `${API}/api/admin/users`

    const getSingleUser = async () => {
        try {
            const response = await fetch(`${URL}/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationUserLoginToken,
                },
            })

            const userInfo = await response.json()
            setData(userInfo)


        } catch (error) {
            console.log(error)

        }
    }


    useEffect(() => {
        getSingleUser()
    }, [])

    const handleUpdate = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value })
    }
    // Update the data from admin panel
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${URL}/update/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",               // here i am sending data as well update
                    Authorization: authorizationUserLoginToken,
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {

                toast.success("Details Updated")
            } else {
                toast.error("Details not Updated")
            }
        } catch (error) {
            console.log(error)


        }

    }
    return (
        <>
            <section className="grid grid-rows-12 md:grid-cols-12 bg-gray-900 h-dvh">
                <div className='row-span-2 md:col-span-2'>
                    <h2 className="text-center mt-20 text-white font-bold">Update User.</h2>
                </div>


                <div className="row-span-10 md:col-span-10 py-10">
                    <form onSubmit={handleSubmit} className=" py-10 px-5">
                        <input type="text"
                            className="bg-gray-500 px-4 py-2 rounded-lg"
                            required
                            autoComplete="off"
                            value={data.username}
                            onChange={handleUpdate}
                            placeholder="Enter your name"
                            name="username" />


                        <input type="email"
                            className="bg-gray-500 px-4 py-2 rounded-lg w-62 ml-6"
                            required
                            autoComplete="off"
                            value={data.email}
                            onChange={handleUpdate}
                            placeholder="email"
                            name="email" />


                        <input type="Number"
                            className="bg-gray-500 px-4 py-2 rounded-lg ml-6"
                            required
                            autoComplete="off"
                            value={data.phone}
                            onChange={handleUpdate}
                            placeholder="phone"
                            name="phone" />


                        <button type="submit" className="ml-12 px-4 py-2 bg-blue-700 text-white rounded-lg cursor-pointer hover:bg-blue-500">Update</button>
                    </form>
                </div>

            </section>
        </>
    )
}