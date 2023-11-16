import logo from "/src/assets/ed-4-all-logo.svg"
const Header = () => {
    return (
        <header className="min-w-screen h-16 p-1 flex align-items-center justify-around md:justify-between bg-emerald-300">
            <picture className="place-items-start  ps-2 max-h-14 flex-none">
                <img className="place-items-start ps-2 max-h-14" src={logo}></img >
            </picture>
            <div className="flex-grow hidden justify-center items-center md:flex">
                <h1 className=" flex text-3xl place-content-center font-serif">ED4ALL</h1>
            </div>
        </header>
    )
}

export default Header