import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  RadialLinearScale,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement);

const AnalyticPage = () => {
  const data = {
    labels: [
      "Коммуникация",
      "Уважение",
      "Доверие",
      "Времяпрепровождение",
      "Эмпатия",
    ],
    datasets: [
      {
        label: "Student A",
        data: [2, 3, 5, 5, 4],
        backgroundColor: "blue",
      },
    ],
  };
  return (
    <div>
      <Radar
        className="md:w-[450px] md:h-[450px] 2xl:w-[600px] 2xl:h-[600px]"
        data={data}
      />
    </div>
  );
};

export default AnalyticPage;
