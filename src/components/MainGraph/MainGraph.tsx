import { Bar } from 'react-chartjs-2';
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

  const labels = [
    'Ciutat Vella',
    "L'Eixample",
    'Sants-Montjuic',
    'Les Corts',
    'Sarria-Sant Gervasi',
    'Gracia',
    'Horta-Guinardo',
    'Nou Barris',
    'Sant Andreu',
    'Sant Marti',
  ];

  const avgIncomes = [
    35538.6927347462, 63053.0156919716, 44208.8437911097, 84402.2268057785,
    99781.2133405675, 56619.4895918367, 47735.0346407686, 37181.6429039105,
    45410.3399723948, 51688.8777801599,
  ];

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
      <Bar data={data} options={options}  />
    </section>
  );
};

export default MainGraph;
