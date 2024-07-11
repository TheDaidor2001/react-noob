import { Outlet } from "react-router-dom"


import './loginLayout.css'
import { Footer, Header } from "../components/components"

export const LoginLayout = (): JSX.Element => {
    return (
        <>
            <Header isLogged={false} />
            <Outlet />
            <Footer />
        </>

    )
}