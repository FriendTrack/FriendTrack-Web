import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Contact } from '@/lib/api/requests/contact'
import { BarChart3, CalendarDays } from 'lucide-react'
import { useState } from 'react'
import FriendAnalyticDialog from './FriendAnalyticDialog'
import ListElementAvatar from './ListElementAvatar'

interface RatingList {
	contacts: Contact[]
	className?: string
}

export const RatingList = ({ contacts, className }: RatingList) => {
	const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<FriendAnalyticDialog
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false)
				}}
				contact={selectedContact}
			/>
			<Table className={className}>
				<TableHeader>
					<TableRow>
						<TableHead>Имя</TableHead>
						<TableHead>Средний Рейтинг</TableHead>
						<TableHead className='text-right'>
							Последнее взаимодействие
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{contacts.length &&
						contacts.map(friend => (
							<TableRow
								key={friend.id}
								onClick={() => {
									setIsOpen(true)
									setSelectedContact(friend)
								}}>
								<TableCell>
									<div className='flex gap-4 items-center'>
										<ListElementAvatar name={friend.name} src={friend.link} />
										{friend.name}
									</div>
								</TableCell>
								<TableCell>
									<div className='flex gap-4'>
										<BarChart3 className='h-4 w-4 opacity-50' />
										{'avg'}
										<div className='flex gap-1'>
											{/* {friend.stats.avg - friend.stats.prev_avg > 0 ? (
											<div className='text-green-600 flex gap-2'>
												<TrendingUp className='h-4 w-4 opacity-70' />+
												{(friend.stats.avg - friend.stats.prev_avg).toFixed(1)}
											</div>
										) : (
											friend.stats.avg - friend.stats.prev_avg < 0 && (
												<div className='flex gap-2 text-red-600'>
													<TrendingDown className='h-4 w-4 opacity-70' />
													{(friend.stats.avg - friend.stats.prev_avg).toFixed(
														1
													)}
												</div>
											)
										)} */}
										</div>
									</div>
								</TableCell>

								<TableCell>
									<div className='flex justify-end gap-4'>
										<CalendarDays className='h-4 w-4 opacity-50' />
										{friend.birthDate}
									</div>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</>
	)
}
