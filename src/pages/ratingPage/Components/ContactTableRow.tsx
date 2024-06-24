import { TableCell, TableRow } from '@/components/ui/table'
import { Contact } from '@/lib/api/requests/contact'
import { AverageRating } from '@/lib/api/requests/rating'
import { BarChart3, CalendarDays, TrendingDown, TrendingUp } from 'lucide-react'
import ListElementAvatar from './ListElementAvatar'

interface ContactTableRowProps {
	contact: Contact
	onCLick: () => void
	avgRating: AverageRating
}

const ContactTableRow = ({ contact, avgRating, onCLick }: ContactTableRowProps) => {
	return (
		<TableRow key={contact.id} onClick={onCLick}>
			<TableCell>
				<div className='flex gap-4 items-center'>
					<ListElementAvatar name={contact.name} src={contact.link} />
					{contact.name}
				</div>
			</TableCell>
			<TableCell>
				<div className='flex items-center gap-3'>
					<BarChart3 className='h-4 w-4 opacity-50' />
					<span>{avgRating.averageRating.toFixed(2)}</span>
					{avgRating.averageRating > avgRating.oldAverageRating && (
						<div className='flex gap-2 items-center text-green-500 '>
							<TrendingUp className=' h-5 w-5 opacity-70' />
							<span>+{(avgRating.averageRating - avgRating.oldAverageRating).toFixed(2)}</span>
						</div>
					)}
					{avgRating.averageRating < avgRating.oldAverageRating && (
						<div className='flex gap-2 items-center text-red-500 '>
							<TrendingDown className=' h-5 w-5 opacity-70' />
							<span>{(avgRating.averageRating - avgRating.oldAverageRating).toFixed(2)}</span>
						</div>
					)}
				</div>
			</TableCell>

			<TableCell>
				<div className='flex justify-end gap-4'>
					<CalendarDays className='h-4 w-4 opacity-50' />
					{avgRating.lastInteractionDate}
				</div>
			</TableCell>
		</TableRow>
	)
}

export default ContactTableRow
