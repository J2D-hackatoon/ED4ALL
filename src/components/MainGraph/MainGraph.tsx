import { Bar } from 'react-chartjs-2';
import { useDistricts } from '../../utils/hooks/useDistricts';

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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Renta media anual (€)',
      },
    },
  };

  const labels = [];
  const avgIncomes = [];

  response?.forEach(district => {
    labels.push(district.district_name);
    avgIncomes.push(district.avg_income);
  });

  const data = {
    labels,
    datasets: [
      {
        data: avgIncomes,
        backgroundColor: '#F68067',
        hoverBackgroundColor: '#66CC8A',
        borderRadius: 6,
      },
    ],
  };
  return (
    <section className='flex flex-col border-2 border-black pt-2 max-h-96 justify-center items-center  rounded-md'>
      <Bar data={data} options={options} />
    </section>
  );
};

export default MainGraph;
