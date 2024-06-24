import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Contact } from '@/lib/api/requests/contact'
import { AverageRating, Rating } from '@/lib/api/requests/rating'
import { useState } from 'react'
import FriendAnalyticDialog from './ContactItemDialog'
import ContactTableRow from './ContactTableRow'

interface RatingList {
	contacts: Contact[]
	rating: Rating[]
	avgRating: AverageRating[]
	className?: string
}

const RatingList = ({ contacts, rating, avgRating, className }: RatingList) => {
	const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			{selectedContact && (
				<FriendAnalyticDialog
					isOpen={isOpen}
					onClose={() => {
						setIsOpen(false)
					}}
					contact={selectedContact}
					rating={rating.find(r => r.contactId === selectedContact?.id)!}
				/>
			)}
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
					{contacts.length !== 0 &&
						contacts.map(contact => (
							<ContactTableRow
								key={contact.id}
								contact={contact}
								avgRating={avgRating.find(r => r.contactId === contact.id)!}
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

export default RatingList
