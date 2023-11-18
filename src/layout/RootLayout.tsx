import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Aside } from "../components/Aside/Aside"

// export interface RootLayoutProps { }
export const RootLayout = (): JSX.Element => {

    return (
        <div className="min-h-screen max-w-screen m-0">
            <Header />
            <div className="flex p-2 gap-2 ">
                <Aside />
                <main className=" ">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout