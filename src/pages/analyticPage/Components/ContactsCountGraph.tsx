import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
} from "chart.js";
import { Line } from 'react-chartjs-2';
import { ContactsCount } from "../AnalyticPage";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement);

interface ContactsCountGraph {
    contactsCount: ContactsCount;
}

const ContactsCountGraph = ({ contactsCount }: ContactsCountGraph) => {
    return (
        <div>
            <div className="p-4">
                <Label>Выберите период</Label>
                <Select options={[
                    { value: "week", label: "За последнюю неделю" },
                    { value: "month", label: "За последний месяц"},
                    { value: "6month", label: "За последние полгода"},
                ]}></Select>
            </div>
            <Line
                data={{
                    datasets: [
                    {
                        label: "С положительным рейтингом",
                        data: contactsCount.positive,
                        fill: false,
                        borderColor: 'green',
                        tension: 0.1,
                        pointRadius: 0,
                        backgroundColor: 'green',
                    },
                    {
                        label: "С отрицательным рейтингом",
                        data: contactsCount.negative,
                        fill: false,
                        borderColor: 'red',
                        tension: 0.1,
                        pointRadius: 0,
                        backgroundColor: 'red',
                    },
                    ],
                    labels: contactsCount.dates
                }}
                options={{
                    scales: {
                    y: {
                        min: 0,
                    }
                    }
                }}
                />
            </div>
    );
};
  
  export default ContactsCountGraph;