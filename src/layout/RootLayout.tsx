import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

// export interface RootLayoutProps { }
export const RootLayout = (): JSX.Element => {

    return (
        <div className="min-h-screen max-w-screen m-0">
            <Header />
            <main className="h-screen">
                    <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout