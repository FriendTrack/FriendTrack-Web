import EditDialogCard from '@/components/ui/EditContactCard'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Contact } from '@/lib/api/requests/contact'
import { Rating } from '@/lib/api/requests/rating'
import { Chart, RadialLinearScale } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import ListElementAvatar from './ListElementAvatar'

Chart.register(RadialLinearScale)

interface FriendAnalyticDialogProps {
	isOpen: boolean
	onClose: () => void
	contact: Contact
	rating: Rating
}

const ContactItemDialog = ({
	isOpen,
	onClose,
	contact,
	rating,
}: FriendAnalyticDialogProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='p-1'>
				<Tabs defaultValue='statistic' className='border-0 shadow-none'>
					<TabsList className='gap-3 '>
						<TabsTrigger value='statistic'>Статистика</TabsTrigger>
						<TabsTrigger value='edit'>Редактирование</TabsTrigger>
					</TabsList>
					<TabsContent value='statistic' className='border-0'>
						<DialogHeader className='flex items-end gap-3 flex-row'>
							<ListElementAvatar
								name={contact?.name[0] || ''}
								src={contact?.link || ''}
							/>
							<div>
								<DialogTitle className='text-lg font-semibold'>
									{contact?.name}
								</DialogTitle>
							</div>
						</DialogHeader>
						<div className='flex gap-6 flex-wrap'>
							<Radar
								data={{
									labels: [
										'Коммуникация',
										'Уважение',
										'Доверие',
										'Времяпрепровождение',
										'Эмпатия',
									],
									datasets: [
										{
											data: [
												rating?.communicationRating,
												rating?.respectRating,
												rating?.trustRating,
												rating?.timeRating,
												rating?.empathyRating,
											],
											backgroundColor: 'blue',
										},
									],
								}}
								options={{
									scales: {
										r: {
											ticks: {
												display: true,
												stepSize: 1,
											},
											min: 0,
											max: 5,
										},
									},
									plugins: {
										legend: {
											display: false,
										},
									},
								}}
							/>
						</div>
					</TabsContent>
					<TabsContent value='edit' className='border-0'>
						<EditDialogCard contact={contact!} onCloseDialog={onClose} />
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}

export default ContactItemDialog
