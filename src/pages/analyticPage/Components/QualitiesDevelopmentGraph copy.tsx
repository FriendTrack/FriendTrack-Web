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
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Contact } from "@/lib/api/requests/contact";
import { Button } from '@/components/ui/button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { getQualitiesDev } from "@/lib/api/requests/qualitiesDevelopmentGraph";

import { useState } from 'react'

ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Legend);

interface QualitiesDevelopmentGraph {
    qualitiesDevelopment: QualitiesDevelopment;
    friends: Contact[];
}

const QualitiesDevelopmentGraph = ({ friends }: QualitiesDevelopmentGraph) => {
    const [selectedFriend, setSelectedFriend] = useState<Contact | null>();
    const [selectedDate, setSelectedDate] = useState<string>();
    const [open, setOpen] = useState(false);

    const [qualitiesDevelopment, setQualitiesDevelopment] = useState<QualitiesDevelopment>({
        empathy: [],
        communication: [],
        respect: [],
        pastime: [],
        trust: [],
        dates: []
    });

    const getQualitiesDevRequest = () => {
        getQualitiesDev(selectedFriend!.id, { periodType: selectedDate! })
        .then(response =>
            {
                qualitiesDevelopment.communication = [];
                qualitiesDevelopment.empathy = [];
                qualitiesDevelopment.trust = [];
                qualitiesDevelopment.pastime = [];
                qualitiesDevelopment.respect = [];
                qualitiesDevelopment.dates = [];
                for (let i = 0; i<response.data.length; i++)
                {
                    qualitiesDevelopment.empathy.push(response.data[i].empathyRating);
                    qualitiesDevelopment.communication.push(response.data[i].communicationRating);
                    qualitiesDevelopment.trust.push(response.data[i].trustRating);
                    qualitiesDevelopment.pastime.push(response.data[i].timeRating);
                    qualitiesDevelopment.respect.push(response.data[i].respectRating);
                    qualitiesDevelopment.dates.push(response.data[i].lastInteractionDate);
                }
                setQualitiesDevelopment(qualitiesDevelopment);
            });
    }

    return (
        <div>
            <div className="flex justify-between">
                <div className="w-1/2 p-4">
                    <Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant='outline'
								role='combobox'
								aria-expanded={open}
								className='w-full mt-6 border-0 border-b-2 rounded-none items-center justify-start pl-1 pr-1 '>
								{selectedFriend ? (
									<>
										<Avatar className=' border scale-75 border-gray-400 items-center justify-center mr-2'>
											<AvatarImage src={selectedFriend.link} />
											<AvatarFallback>{selectedFriend.name[0]}</AvatarFallback>
										</Avatar>
										{
											friends.find(
												friend => friend.name === selectedFriend.name
											)?.name
										}
									</>
								) : (
									'Выберите друга...'
								)}
								<ChevronsUpDown className='ml-auto h-5 w-5 ' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-full'>
							<Command>
								<CommandInput placeholder='Поиск друга' />
								<CommandList>
									<CommandEmpty>
									</CommandEmpty>
									<CommandGroup>
										<ScrollArea className='h-[150px]'>
											{friends.length &&
												friends.map(friend => (
													<CommandItem
														key={friend.id}
														value={friend.name}
														onSelect={() => {
															setSelectedFriend(friend);
															setOpen(false);
                                                            getQualitiesDevRequest();
														}}>
														<Avatar className='items-center scale-75 border border-gray-400 justify-center me-1'>
															<AvatarImage src={friend.link} />
															<AvatarFallback>{friend.name[0]}</AvatarFallback>
														</Avatar>
														{friend.name}
														<Check
															className={cn(
																'ms-auto h-5 w-5 mr-1',
																selectedFriend?.name === friend.name
																	? 'opacity-100'
																	: 'opacity-0'
															)}
														/>
													</CommandItem>
												))}
										</ScrollArea>
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
                </div>
                <div className="w-1/2 p-4">
                    <Label>Выберите период</Label>
                    <Select onChange={(selectedValue) => {setSelectedDate(selectedValue.target.value); getQualitiesDevRequest()}} options={[
                        { value: "WEEK", label: "За последнюю неделю" },
                        { value: "MONTH", label: "За последний месяц"},
                        { value: "HALF_YEAR", label: "За последние полгода"},
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