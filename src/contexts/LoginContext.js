import React, { createContext, useState } from 'react'

const LoginContext = createContext({
  logindetail: {},
  isloading: false,
  CheckLogin: userpass => {},
  setIsLoging: () => {}
})
export { LoginContext }
export default function LoginContextProvider({ children }) {
  const [logindetails, setLogindeatils] = useState({
    status: 0,
    token: '',
    type: ''
  })
  const [isloading, setIsLoging] = useState(false)

  async function CheckLogin(userpass) {
    setIsLoging(true)

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('Accept', 'application/json')
    await fetch('http://127.0.0.1:8000/api/v1/login/', {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        username: userpass.username,
        password: userpass.password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        setLogindeatils({
          status: responseJson.status,
          token: responseJson.token,
          type: responseJson.type
        })
        localStorage.setItem('status', responseJson.status)
        localStorage.setItem('token', responseJson.token)
        localStorage.setItem('type', responseJson.type)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <LoginContext.Provider
      value={{
        logindetails: logindetails,
        isloading: isloading,
        CheckLogin: CheckLogin
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
