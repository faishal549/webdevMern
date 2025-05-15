import { useEffect, useState } from "react";
import { useAuth } from "../Store/Auth";

const defaultContactForm = {
    username: '',
    email: '',
    message: ''
}

export const Contact = () => {

    const [user, setUser] = useState(defaultContactForm)
    const [userData, setUserData] = useState(true)
    const { userInfo } = useAuth()
    const { isLoggedIn } = useAuth()

    // getting logged in user email and name default .

    if (userData && userInfo && isLoggedIn) {

        setUser({
            username: userInfo.username,
            email: userInfo.email,
            message: '',
        })


        setUserData(false)



    }





    const handleContact = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })

    }


    const handleContactSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),

            })
            // console.log(response) 

            if (response.ok) {
                setUser(defaultContactForm)
                const data = await response.json()
                console.log(data)
                alert("Msg sent Successfully ")
            }


        } catch (error) {
            console.log("msg is not sent")
        }

    }

    return (
        <>
            <section className="w-full md:w-3/4 mx-auto grid grid-cols-12 mt-4 ">
                <div className='absolute md:relative col-span-4 my-auto py-2 ml-4 md:ml-0'>
                    <p className="text-orange-400 px-4 py-2 bg-gray-800 rounded-full w-28 text-sm hover:cursor-pointer">Contact Us</p>
                    <h2 className="text-3xl font-bold text-orange-100">Lets Get In Touch</h2>
                    <p className="text-orange-50 text-xs">Or just react out mannually to <span className="text-blue-900 underline underline-offset-1">webdev@support.in</span></p>
                </div>


                <div className=" w-full md:w-3/4 col-span-8 mx-auto mt-30 md:mt-0 ml-4 md:ml-0">
                    <form onSubmit={handleContactSubmit} >
                        <input type="text"
                            className="w-[100%] bg-gray-950 px-3 py-3 my-4 rounded-xl text-white"
                            required
                            autoComplete="off"
                            value={user.username}
                            onChange={handleContact}
                            placeholder="Enter your name"
                            name="username"

                        />
                        <br />

                        <input type="email"

                            className="w-[100%] bg-gray-950 px-3 py-3 my-4 rounded-xl text-white"
                            required
                            autoComplete="off"
                            value={user.email}
                            onChange={handleContact}
                            placeholder="Enter your email address"
                            name="email"
                        />
                        <br />
                        <textarea
                            className="w-[100%] bg-gray-950 px-3 py-3 my-4 rounded-xl text-white"
                            rows="5"
                            type="text"
                            placeholder="Write your text.."
                            value={user.message}
                            onChange={handleContact}
                            required
                            autoComplete="off"
                            name="message"
                        />
                        <br />
                        <button type="submit" className="w-[100%] bg-cyan-600 px-3 py-1 my-4 mb-8 rounded-xl cursor-pointer hover:bg-cyan-400 text-white font-bold">Submit</button>
                    </form>

                </div>


            </section>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13997.394903140885!2d77.27499585!3d28.709122549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731751903244!5m2!1sen!2sin"
                    className="w-screen"
                    allowFullScreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}