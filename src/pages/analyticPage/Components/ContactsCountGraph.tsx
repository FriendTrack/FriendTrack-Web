import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import {
    CategoryScale,
    Chart as ChartJS,
    LineElement,
    LinearScale,
    PointElement
} from "chart.js"
import { subDays, subMonths } from 'date-fns'
import { useEffect, useState } from "react"
import { Line } from 'react-chartjs-2'
import { ContactsCount } from "../AnalyticPage"

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement);

interface ContactsCountGraph {
    contactsCount: ContactsCount;
}

const ContactsCountGraph  = () => {
    const [contactsCount, setContactsCount] = useState<ContactsCount>({
        positive: [],
        negative: [],
        dates: []
    });
    let k = 0;
    const positive: number[] = [0, 0, 0, 0, 0, 0, 0];
    const negative: number[] = [0, 0, 0, 0, 0, 0, 0];
    let dates: string[] = [];

    async function fetchData(queryParams: any) {
        const response = await fetch("http://89.111.155.61:9001/api/v1/rating?fieldType=ALL&size=1000&calculationType=FORMS&toDate=" + queryParams.toDate, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
            }
          });
        if (response.ok) {
            const json = await response.json();
            let positiveCount = 0, negativeCount = 0;
            for (let i = 0; i < json.content.length; i++) {
                if ((json.content[i].communicationRating + 
                    json.content[i].trustRating + 
                    json.content[i].timeRating + 
                    json.content[i].respectRating +
                    json.content[i].empathyRating) / 5 > 3
                ){
                    positiveCount += 1;
                }
                else{
                    negativeCount += 1;
                }
            }
            positive[k] = positiveCount;
            console.log(positive);
            negative[k] = negativeCount;
            k++;
            setContactsCount({positive: positive, negative: negative, dates: dates});
        }
    }

    const onChange = (selectedValue: string) => {

        if (selectedValue === "week")
        {
            dates = [];
            const date = subDays(new Date(), 7);
            const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
            const queryParams = { toDate: formattedDate };
            dates.push(formattedDate.slice(0, 5));
            fetchData(queryParams)
            .then(() => {
                const date = subDays(new Date(), 6);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 5);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 4);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 3);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 2);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 1);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = new Date();
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            
        }
        else if (selectedValue === "month")
        {
            dates = [];
            const date = subDays(new Date(), 28);
            const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
            const queryParams = { toDate: formattedDate };
            dates.push(formattedDate.slice(0, 5));
            fetchData(queryParams)
            .then(() => {
                const date = subDays(new Date(), 24);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 20);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 16);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 12);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 8);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = subDays(new Date(), 4);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            .then(() => {
                const date = new Date();
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                return fetchData(queryParams);
            })
            
        }
        else if (selectedValue === "6month")
            {
                dates = [];
                const date = subMonths(new Date(), 6);
                const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                const queryParams = { toDate: formattedDate };
                dates.push(formattedDate.slice(0, 5));
                fetchData(queryParams)
                .then(() => {
                    const date = subMonths(new Date(), 5);
                    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                    const queryParams = { toDate: formattedDate };
                    dates.push(formattedDate.slice(0, 5));
                    return fetchData(queryParams);
                })
                .then(() => {
                    const date = subMonths(new Date(), 4);
                    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                    const queryParams = { toDate: formattedDate };
                    dates.push(formattedDate.slice(0, 5));
                    return fetchData(queryParams);
                })
                .then(() => {
                    const date = subMonths(new Date(), 3);
                    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                    const queryParams = { toDate: formattedDate };
                    dates.push(formattedDate.slice(0, 5));
                    return fetchData(queryParams);
                })
                .then(() => {
                    const date = subMonths(new Date(), 2);
                    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                    const queryParams = { toDate: formattedDate };
                    dates.push(formattedDate.slice(0, 5));
                    return fetchData(queryParams);
                })
                .then(() => {
                    const date = subMonths(new Date(), 1);
                    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                    const queryParams = { toDate: formattedDate };
                    dates.push(formattedDate.slice(0, 5));
                    return fetchData(queryParams);
                })
                .then(() => {
                    const date = new Date();
                    const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth()+1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")}`;
                    const queryParams = { toDate: formattedDate };
                    dates.push(formattedDate.slice(0, 5));
                    return fetchData(queryParams);
                })
                
            }
    };

    useEffect(() => {
        loadData(); // Вызов метода загрузки данных после загрузки компонента
      }, []);
    
      const loadData = () => {
        onChange("week");
      };
    
    return (
        <div>
            <div className="p-4">
                <Label>Выберите период</Label>
                <Select options={[
                    { value: "week", label: "За последнюю неделю" },
                    { value: "month", label: "За последний месяц"},
                    { value: "6month", label: "За последние полгода"},
                ]}
                onChange={(selectedValue) => onChange(selectedValue.target.value)} />
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