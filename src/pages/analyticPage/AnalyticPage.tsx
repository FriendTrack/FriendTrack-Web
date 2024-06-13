import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement);

const AnalyticPage = () => {
  const data = {
    labels: ["Коммуникация", "Уважение", "Доверие", "Времяпрепровождение", "Эмпатия"],
    datasets: [
      {
        label: "Student A",
        data: [2, 3, 5, 5, 4],
        backgroundColor: "blue",
      }
    ],
  };
  return (
    <Radar data={data} />
  );
};

  
  export default AnalyticPage;