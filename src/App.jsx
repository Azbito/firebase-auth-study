import AppRoutes from "./routes/Routes"
import { AuthGoogleContext, AuthGoogleProvider } from "./contexts/authGoogle"
import React, { useContext } from 'react'
import './global.scss'
import { Navbar } from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"

export const App = () => {
  const { isSigned } = useContext(AuthGoogleContext)

 return (
  <BrowserRouter>
   <AuthGoogleProvider>
    <AuthGoogleContext.Consumer>
    {({isSigned}) => (
      <>
        {isSigned && <Navbar />}
        <AppRoutes />
      </>
    )}
    </AuthGoogleContext.Consumer>
   </AuthGoogleProvider>
  </BrowserRouter>
 )
}