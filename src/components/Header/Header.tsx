import { useNavigate } from "react-router-dom"
import ed4all_logo from "../../assets/ed4all_logo.svg"
const Header = (): JSX.Element => {
    const navigate = useNavigate()
    const handelLogoClick = (): void => {
        navigate("/")
    } 
    return (
        <header className=" h-16 p-1 flex align-items-center justify-around md:justify-between bg-emerald-300">
            <picture className="place-items-start  ps-2 max-h-14 flex-none" onClick={handelLogoClick}>
                <img className="place-items-start ps-2 max-h-14" src={ed4all_logo}></img >
            </picture>
            <div className="flex-grow hidden justify-center items-center md:flex">
                <h1 className=" flex text-3xl place-content-center font-serif">ED4ALL</h1>
            </div>
        </header>
    )
}

export default Header