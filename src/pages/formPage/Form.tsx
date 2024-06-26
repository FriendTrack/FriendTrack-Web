import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Check, ChevronsUpDown } from 'lucide-react'

import { NewContactDialog } from '@/components/ui/NewContactDialog'
import { useGetQuestionsContact } from '@/hooks/useGetQuestionsContact'
import { Contact } from '@/lib/api/requests/contact'
import { useContext, useState } from 'react'
import { FormPageContext } from './FormPage'
import Slider from './components/Slider'

interface FormProps {
	onSave: () => void
	friends: Contact[]
}
export const Form = ({ onSave, friends }: FormProps) => {
	const { contactInteractions, addForm } = useContext(FormPageContext)
	const [openQuestions, setOpenQuestions] = useState(0)
	const [isSaved, setIsSaved] = useState(false)
	const [dialogIsOpen, setDialogIsOpen] = useState(false)
	const [open, setOpen] = useState(false)
	const [selectedFriend, setSelectedFriend] = useState<Contact | null>()
	const [c, setC] = useState(3)
	const [e, setE] = useState(3)
	const [r, setR] = useState(3)
	const [t, setT] = useState(3)
	const [tr, setTr] = useState(3)
	const { data: questions, isLoading } = useGetQuestionsContact(selectedFriend?.id)
	return (
		<>
			{dialogIsOpen && <NewContactDialog open={dialogIsOpen} onCLose={() => setDialogIsOpen(false)} />}
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
										{friends.find(friend => friend.name === selectedFriend.name)?.name}
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
										{isSaved ? (
											<>Форма заблокирована</>
										) : (
											<Button
												onClick={() => {
													setDialogIsOpen(true)
												}}>
												Добавить контакт
											</Button>
										)}
									</CommandEmpty>
									<CommandGroup>
										<ScrollArea className='h-[150px]'>
											{friends.length !== 0 &&
												friends
													.filter(friend => !contactInteractions.some(ci => ci.contactId === friend.id))
													.map(friend => (
														<CommandItem
															key={friend.id}
															value={friend.name}
															onSelect={() => {
																if (isSaved) return
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
																	selectedFriend?.name === friend.name ? 'opacity-100' : 'opacity-0'
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
					{isLoading && <p className='text-1xl'>Загрузка...</p>}
					{questions &&
						questions.map((question, index) => (
							<div className='mt-4' key={index}>
								<Label className='text-md'>{question.question}</Label>
								<Slider
									value={index === 0 ? c : index === 1 ? e : index === 2 ? r : index === 3 ? t : index === 4 ? tr : 0}
									className='w-full mt-1'
									onChange={value => {
										if (index === 0) setC(Number(value.target.value))
										if (index === 1) setE(Number(value.target.value))
										if (index === 2) setR(Number(value.target.value))
										if (index === 3) setT(Number(value.target.value))
										if (index === 4) setTr(Number(value.target.value))
									}}
								/>
							</div>
						))}
				</CardContent>
				<CardFooter>
					{selectedFriend?.id && (
						<Button
							className='ms-auto bg-green-600'
							disabled={isSaved}
							onClick={() => {
								setIsSaved(true)
								onSave()
								addForm({
									contactId: selectedFriend?.id,
									communication: c,
									empathy: e,
									respect: r,
									time: t,
									trust: tr,
								})
							}}>
							Сохранить
						</Button>
					)}
				</CardFooter>
			</Card>
		</>
	)
}
