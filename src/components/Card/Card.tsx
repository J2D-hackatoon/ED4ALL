
import exampleMap from "../../assets/mapsImg/exampleMap.jpeg"
const Card = () => {
    return (
        <div className="card w-56 h-96 bg-base-100 shadow-xl">
            <figure><img src={exampleMap} alt="nombre distrito" /></figure>
            <div className="card-body ">
                <h2 className="card-title">Distrito: Example</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">More info</button>
                </div>
            </div>
        </div>
    )
}

export default Card