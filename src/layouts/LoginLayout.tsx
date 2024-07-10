import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

import './loginLayout.css'

export const LoginLayout = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}