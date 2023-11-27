import { Aside } from "../../components/Aside/Aside";
import MainGraph from "../../components/MainGraph/MainGraph";
import { Slider } from '../../components/Slider/Slider';

const DistrictPage = (): JSX.Element => {
    return (
        <div className="flex p-2 gap-2  justify-center md:justify-around">
            <Aside />
            <section className=" w-96 md:w-2/3 max-h space-y-4">
                <MainGraph />
                <Slider />
            </section>
        </div>
    )
}

export default DistrictPage