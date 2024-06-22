import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { BarChart3, CalendarDays, TrendingDown, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { Friend } from '../RatingPage'
import FriendAnalyticDialog from './FriendAnalyticDialog'
import ListElementAvatar from './ListElementAvatar'

interface Pagination {
	current: string
	count: string
	size: string
}

interface RatingList {
	friends: Friend[]
	pagination?: Pagination
	className?: string
}

const RatingList = ({ friends, className }: RatingList) => {
	const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null)
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<FriendAnalyticDialog
				isOpen={isOpen}
				onClose={() => {
					setIsOpen(false)
				}}
				friend={selectedFriend}
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
					{friends.map(friend => (
						<TableRow
							key={friend.id}
							onClick={() => {
								setIsOpen(true)
								setSelectedFriend(friend)
							}}>
							<TableCell>
								<div className='flex gap-4 items-center'>
									<ListElementAvatar name={friend.name} src={friend.avatar} />
									{friend.name}
								</div>
							</TableCell>
							<TableCell>
								<div className='flex gap-4'>
									<BarChart3 className='h-4 w-4 opacity-50' />
									{friend.stats.avg.toFixed(1)}
									<div className='flex gap-1'>
										{friend.stats.avg - friend.stats.prev_avg > 0 ? (
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
										)}
									</div>
								</div>
							</TableCell>

							<TableCell>
								<div className='flex justify-end gap-4'>
									<CalendarDays className='h-4 w-4 opacity-50' />
									{friend.date}
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}

export default RatingList
