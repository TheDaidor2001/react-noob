import { Outlet } from "react-router-dom"


import './mainLayouts.css'
import { Footer, Header } from "../components/components"

export const MainLayout = (): JSX.Element => {
    return (
        <>
            <Header isLogged />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>

    )
}

