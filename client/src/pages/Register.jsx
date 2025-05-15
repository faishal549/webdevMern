import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../Store/Auth"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    })
    const navigate = useNavigate()

    const storeLs = useAuth();
    const { API } = useAuth()
    const URL = `${API}/api/auth/register`

    const handleInput = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json()
            //console.log(res_data)



            if (response.ok) {
                storeLs.storeTokenInLS(res_data.token)
                setUser({ username: '', email: '', phone: '', password: '' })
                toast.success("Registration successful !")
                navigate("/")
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }

        } catch (error) {
            console.log(error)

        }

    }

    return (
        <>

            <div className='w-full md:w-1/2 mx-auto'>

                <div className="">
                    <div>
                        <h1 className="text-center text-white text-2xl font-bold underline underline-offset-2">Sign-Up</h1>
                    </div>
                    <div className="w-3/4 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <input type="text"
                                placeholder="Username"
                                required
                                id="userInput"
                                value={user.username}
                                onChange={handleInput}
                                autoComplete="off"
                                name="username"
                                className="w-[100%] bg-gray-300 px-3 py-3 my-4 rounded-xl"
                            />
                            <br />

                            <input type="text"
                                placeholder="Email"
                                required
                                id="emailInput"
                                value={user.email}
                                onChange={handleInput}
                                autoComplete="off"
                                name="email"
                                className="w-[100%] bg-gray-300 px-3 py-3 my-4 rounded-xl"
                            />
                            <br />
                            <input type="number"
                                placeholder="Contact"
                                required
                                id="phoneInput"
                                onChange={handleInput}
                                value={user.phone}
                                autoComplete="off"
                                name="phone"
                                className="w-[100%] bg-gray-300 px-3 py-3 my-4 rounded-xl" />
                            <br />
                            <input type="password"
                                placeholder="Password"
                                required
                                id="passwordInput"
                                value={user.password}
                                onChange={handleInput}
                                autoComplete="off"
                                name="password"
                                className="w-[100%] bg-gray-300 px-3 py-3 my-4 rounded-xl"
                            />
                            <br />
                            <button type="submit" className="w-[100%] bg-cyan-600 px-3 py-4 my-4 mb-8 rounded-xl cursor-pointer hover:bg-cyan-400">Register Now</button>
                            <Link to="/login">  <p className=" text-center font-semibold text-white underline underline-offset-1 cursor-pointer text-sm hover:text-xs my-4">Already have a account ? Sign-In</p></Link>

                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}