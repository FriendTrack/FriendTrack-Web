import { TableCell, TableRow } from '@/components/ui/table'
import { Contact } from '@/lib/api/requests/contact'
import { BarChart3, CalendarDays } from 'lucide-react'
import ListElementAvatar from './ListElementAvatar'

interface ContactTableRowProps {
	contact: Contact
	onCLick: () => void
}

const ContactTableRow = ({ contact, onCLick }: ContactTableRowProps) => {
	return (
		<TableRow key={contact.id} onClick={onCLick}>
			<TableCell>
				<div className='flex gap-4 items-center'>
					<ListElementAvatar name={contact.name} src={contact.link} />
					{contact.name}
				</div>
			</TableCell>
			<TableCell>
				<div className='flex gap-4'>
					<BarChart3 className='h-4 w-4 opacity-50' />
					{'avg'}
				</div>
			</TableCell>

			<TableCell>
				<div className='flex justify-end gap-4'>
					<CalendarDays className='h-4 w-4 opacity-50' />
					{contact.birthDate}
				</div>
			</TableCell>
		</TableRow>
	)
}

export default ContactTableRow
