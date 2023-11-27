import { Link } from "react-router-dom"

const HomePage = (): JSX.Element => {
    return (
        <>
            <div>HomePage</div>
            <Link to="/districts">Ir a districts</Link>
        </>
    )
}

export default HomePage