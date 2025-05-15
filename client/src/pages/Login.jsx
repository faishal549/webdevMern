import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../Store/Auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const storeLsLogin = useAuth();
    const { API } = useAuth()
    const URL = `${API}/api/auth/login`
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            //console.log(response)

            if (response.ok) {
                const res_data = await response.json();
                storeLsLogin.storeTokenInLS(res_data.token)
                toast.success('login successful!')
                setUser({ email: '', password: '' })
                navigate('/')
            } else {
                toast.error("invalid credentials")
                // console.log('invalid details')
            }

        } catch (error) {
            console.log(error)

        }




    }
    return (
        <>
            <div className="w-full md:w-3/4 mx-auto grid grid-cols-12 my-10">
                <div className='col-span-4 '>
                    <img src="/images/login.png" alt="picture" width="400" height="400" />
                </div>
                <div className="col-span-8 ">
                    <div className="w-3/4 mx-auto"> <h1 className="text-center text-white text-2xl font-bold underline underline-offset-2">Login </h1> </div>
                    <div className="w-3/4 mx-auto">
                        <form onSubmit={handleSubmit}>


                            <input type="text"
                                placeholder="Email"
                                required
                                id="emailInput"
                                value={user.email}
                                autoComplete="off"
                                onChange={handleInput}
                                name="email"
                                className="w-[100%] bg-gray-300 px-3 py-3 my-4 rounded-xl"
                            />
                            <br />

                            <input type="password"
                                placeholder="Password"
                                required
                                id="passwordInput"
                                value={user.password}
                                autoComplete="off"
                                onChange={handleInput}
                                name="password"
                                className="w-[100%] bg-gray-300 px-3 py-3 my-4 rounded-xl"
                            />
                            <br />
                            <button type="submit" className="w-[100%] bg-cyan-600 px-3 py-4 my-4 mb-8 rounded-xl cursor-pointer hover:bg-cyan-400">Sign-in</button>
                            <Link to="/register">  <p className=" text-center font-semibold text-white underline underline-offset-1 cursor-pointer text-sm hover:text-xs">Don't have a account ? Sign-up</p></Link>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}