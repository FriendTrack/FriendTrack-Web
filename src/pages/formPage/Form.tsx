import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Check, ChevronsUpDown } from 'lucide-react'

import { NewContactDialog } from '@/components/ui/NewContactDialog'
import { Contact } from '@/lib/api/requests/contact'
import { useState } from 'react'

interface Question {
	question: string
}

const ANSWER_VARIANTS = [
	{
		value: '1',
		label: 'Да',
	},
	{
		value: '2',
		label: 'Скорее да',
	},
	{
		value: '3',
		label: 'Нет',
	},
	{
		value: '4',
		label: 'Скорее нет',
	},
	{
		value: '5',
		label: 'Затрудняюсь ответить',
	},
]

const QUESTIONS: Question[] = [
	{ question: 'Делились ли вы своими чувствами с этим человеком сегодня?' },
	{ question: 'Чувствовали ли вы себя понятым этим человеком сегодня?' },
	{ question: 'Чувствовали ли вы поддержку от этого человека?' },
	{ question: 'Этот человек делился своими чувствами с вами сегодня?' },
	{ question: 'Этот человек был внимателен к вашим потребностям сегодня?' },
]

interface FormProps {
	onSave: () => void
	friends: Contact[]
}
export const Form = ({ onSave, friends }: FormProps) => {
	const [openQuestions, setOpenQuestions] = useState(0)
	const [isSaved, setIsSaved] = useState(false)
	const [dialogIsOpen, setDialogIsOpen] = useState(false)
	const [open, setOpen] = useState(false)
	const [selectedFriend, setSelectedFriend] = useState<Contact | null>()
	const [searchTerm, setSearchTerm] = useState('')
	console.log(selectedFriend)
	return (
		<>
			<NewContactDialog
				open={dialogIsOpen}
				onCLose={() => setDialogIsOpen(false)}
			/>
			<Card className='flex flex-col w-full justify-items-center'>
				<CardContent className='w-full'>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant='outline'
								role='combobox'
								aria-expanded={open}
								className='w-full mt-3 border-0 border-b-2 rounded-none items-center justify-start pl-1 pr-1 '>
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
										<Button onClick={() => setDialogIsOpen(true)}>
											Добавить контакт
										</Button>
									</CommandEmpty>
									<CommandGroup>
										<ScrollArea className='h-[150px]'>
											{friends.length &&
												friends.map(friend => (
													<CommandItem
														key={friend.id}
														value={friend.name}
														onSelect={() => {
															setSelectedFriend(friend)
															setOpen(false)
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

					{QUESTIONS.slice(0, openQuestions).map((question, index) => (
						<div className='mt-3' key={index}>
							<Label className='text-1xl'>{question.question}</Label>
							<Select options={ANSWER_VARIANTS} />
						</div>
					))}
				</CardContent>
				<CardFooter>
					<Button
						className='bg-blue-600'
						onClick={() => setOpenQuestions(openQuestions + 1)}
						disabled={openQuestions === QUESTIONS.length}>
						{openQuestions === QUESTIONS.length
							? 'Вопросы закончились'
							: 'Добавить вопрос'}
					</Button>
					{openQuestions > 0 && (
						<Button
							className='ms-auto bg-green-600'
							disabled={isSaved}
							onClick={() => {
								setIsSaved(true)
								onSave()
							}}>
							Сохранить
						</Button>
					)}
				</CardFooter>
			</Card>
		</>
	)
}
