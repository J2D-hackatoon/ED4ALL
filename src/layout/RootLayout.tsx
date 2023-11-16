import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Aside } from "../components/Aside/Aside"

export interface RootLayoutProps { }
export const RootLayout: React.FC<RootLayoutProps> = () => {

    return (
        <div className="max-h-screen">
            <Header />
            <>
                <Aside />
                <main className=" flex  min-w-screen">
                    <Outlet />
                </main>
            </>
            <Footer />
        </div>
    )
}

export default RootLayout