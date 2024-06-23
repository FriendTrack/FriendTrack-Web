import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Contact } from '@/lib/api/requests/contact'
import { useState } from 'react'
import ContactTableRow from './ContactTableRow'
import FriendAnalyticDialog from './FriendAnalyticDialog'

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
						contacts.map(contact => (
							<ContactTableRow
								key={contact.id}
								contact={contact}
								onCLick={() => {
									setSelectedContact(contact)
									setIsOpen(true)
								}}
							/>
						))}
				</TableBody>
			</Table>
		</>
	)
}
