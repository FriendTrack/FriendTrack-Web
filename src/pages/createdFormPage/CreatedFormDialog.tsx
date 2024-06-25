import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Contact } from '@/lib/api/requests/contact'
import { ContactInteraction } from '@/lib/api/requests/forms'
import { cn } from '@/lib/utils'
import { DialogTitle } from '@radix-ui/react-dialog'
import ListElementAvatar from '../ratingPage/Components/ListElementAvatar'

interface CreatedFormDialogProps {
	open: boolean
	onOpenChange: () => void
	interactions: ContactInteraction[]
	contacts: Contact[]
}
interface StatSpanProps {
	statName: string
	stat: number
}
const StatSpan = ({ statName, stat }: StatSpanProps) => {
	return (
		<div className=' flex gap-1'>
			<span className='font-semibold'>{statName}</span>
			<span className={cn('text-green-500 font-semibold', stat < 2 && 'text-red-500', stat === 3 && 'text-amber-600')}>
				{stat}
			</span>
		</div>
	)
}
const CreatedFormDialog = ({ onOpenChange, open, interactions, contacts }: CreatedFormDialogProps) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogTitle className='hidden'></DialogTitle>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Имя</TableHead>
							<TableHead>Результаты</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{interactions.map(inter => {
							const contact = contacts.find(c => c.id === inter.contactId)
							if (!contact) return

							return (
								<TableRow key={inter.contactId}>
									<TableCell className='flex gap-3 items-center'>
										<ListElementAvatar name={contact.name[0]} src={contact.link} />
										<span className='font-semibold'>{contact.name}</span>
									</TableCell>
									<TableCell>
										<div className='flex gap-3'>
											<StatSpan statName={'К:'} stat={inter.communication} />
											<StatSpan statName={'Э:'} stat={inter.empathy} />
											<StatSpan statName={'У:'} stat={inter.respect} />
											<StatSpan statName={'В:'} stat={inter.time} />
											<StatSpan statName={'Д:'} stat={inter.trust} />
										</div>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</DialogContent>
		</Dialog>
	)
}

export default CreatedFormDialog
