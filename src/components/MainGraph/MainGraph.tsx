import { Bar } from 'react-chartjs-2';
import { useDistricts } from '../../utils/hooks/useDistricts';
import { type District } from '../../types/types';
// import Indicator from "../Indicator/Indicator";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);


const MainGraph = (): JSX.Element => {
  const response = useDistricts().data;
  // const [districtCode, setDistrictCode] = useState<number>(0)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Renta media anual (€) y densidad de población',
      },
    },
  };

  const labels: string[] = [];
  const avgIncomes: number[] = [];
  const densityPopulation: number[] = [];

  response?.forEach((district: District) => {
    labels.push(district.district_name);
    avgIncomes.push(district.avg_income );
    densityPopulation.push(district.density_population);
    // setDistrictCode(district.district_code)
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Ingresos Promedio',
        data: avgIncomes,
        backgroundColor: '#F68067',
        hoverBackgroundColor: '#66CC8A',
        borderRadius: 6,
      },
      {
        label: 'Densidad de Población',
        data: densityPopulation,
        backgroundColor: '#66CC8A',
        hoverBackgroundColor: '#F68067',
        borderRadius: 6,
      },
    ],
  };
  return (
    <section className='flex flex-col border-2 border-black pt-2 max-h-96 justify-center items-center  rounded-md'>
      <Bar data={data} options={options} />
      {/* <Indicator districtCode={districtCode} /> */}
    </section>
  );
};

export default MainGraph;
