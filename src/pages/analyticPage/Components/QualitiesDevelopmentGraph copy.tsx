import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { QualitiesDevelopment } from "../AnalyticPage";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Legend);

interface QualitiesDevelopmentGraph {
    qualitiesDevelopment: QualitiesDevelopment;
}

const QualitiesDevelopmentGraph = ({ qualitiesDevelopment }: QualitiesDevelopmentGraph) => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="w-1/2 p-4">
                    <Label>Выберите друга</Label>
                    <Select options={[
                    ]}></Select>
                </div>
                <div className="w-1/2 p-4">
                    <Label>Выберите период</Label>
                    <Select options={[
                        { value: "week", label: "За последнюю неделю" },
                        { value: "month", label: "За последний месяц"},
                        { value: "6month", label: "За последние полгода"},
                    ]}></Select>
                </div>
            </div>
            <Line
                data={{
                    datasets: [
                    {
                        label: 'Коммуникация',
                        data: qualitiesDevelopment.communication,
                        fill: false,
                        borderColor: 'red',
                        tension: 0.1,
                        pointRadius: 0,
                        backgroundColor: 'red',
                    },
                    {
                        label: "Уважение",
                        data: qualitiesDevelopment.respect,
                        fill: false,
                        borderColor: 'rgb(30, 144, 255)',
                        tension: 0.1,
                        pointRadius: 0,
                        backgroundColor: 'rgb(30, 144, 255)'
                    },
                    {
                        label: "Время",
                        data: qualitiesDevelopment.pastime,
                        fill: false,
                        borderColor: 'rgb(255, 215, 0)',
                        tension: 0.1,
                        pointRadius: 0,
                        backgroundColor: 'rgb(255, 215, 0)'
                    },
                    {
                        label: "Доверие",
                        data: qualitiesDevelopment.trust,
                        fill: false,
                        borderColor: 'green',
                        tension: 0.1,
                        pointRadius: 0,
                        backgroundColor: 'green'
                    },
                    {
                        label: "Эмпатия",
                        data: qualitiesDevelopment.empathy,
                        fill: false,
                        borderColor: 'rgb(72, 61, 139)',
                        tension: 0.1,
                        pointRadius: 0,
                        backgroundColor: 'rgb(72, 61, 139)'
                    }
                    ],
                    labels: qualitiesDevelopment.dates
                }}
                options={{
                    scales: {
                        y: {
                            min: 1,
                            max: 5,
                        }
                    }
                }}
                />
        </div>
    );
};
  
  export default QualitiesDevelopmentGraph;