import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Aside } from "../components/Aside/Aside"

export interface RootLayoutProps { }
export const RootLayout: React.FC<RootLayoutProps> = () => {

    return (
        <div className="min-h-screen">
            <Header />
            <div className="flex">
                <Aside />
                <main className=" flex-grow ">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout