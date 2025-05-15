import { createContext, useContext, useEffect, useState } from "react";

export const CreateAuth = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [userInfo, setUserInfo] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [service, setService] = useState([])
  const authorizationUserLoginToken = `Bearer ${token}`

  const API = import.meta.env.VITE_APP_LOCAL_PATH


  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken)
  }
  // logged in and loggedout 
  const isLoggedIn = !!token;  // true


  const LogoutUser = () => {
    setToken("")
    return localStorage.removeItem('token')
  }


  //Authorization getting currently  logged in user data
  const userAuthentication = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${API}/api/auth/user`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationUserLoginToken,
          },
        })
      // console.log('user vala ' ,response)
      if (response.ok) {
        const data = await response.json();

        setUserInfo(data.userData)
        setIsLoading(false)
      } else {
        console.log("fetching error user data is not getting")
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }

  }

  // user service data using get method 
  const userService = async () => {
    try {
      const response = await fetch(`${API}/api/user/service`, {
        method: "GET",
        headers: {
          Authorization: authorizationUserLoginToken,
        },
      })

      if (response.ok) {
        const data = await response.json();
        // console.log('service data ',data.response)
        setService(data.response)
      }

    } catch (error) {
      console.log('not getting response')
    }

  }
  useEffect(() => {
    userService();
    userAuthentication();

  }, [isLoggedIn])
  return (
    <CreateAuth.Provider value={{
      storeTokenInLS,
      LogoutUser,
      isLoggedIn,
      userInfo,
      service,
      authorizationUserLoginToken,
      isLoading,
      API
    }}>
      {props.children}
    </CreateAuth.Provider>
  )
}

export const useAuth = () => {
  return useContext(CreateAuth)
}

