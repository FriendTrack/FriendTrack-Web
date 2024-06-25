import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useGetContacts } from '@/hooks'
import { useGetCreatedForm } from '@/hooks/useGetCreatedForm'
import { PostFormBody } from '@/lib/api/requests/forms'
import { useState } from 'react'
import CreatedFormDialog from './CreatedFormDialog'

const CreatedFormPage = () => {
	const { data: contacts, isLoading: isLoadingC } = useGetContacts()
	const { data: createdForm, isLoading: isLoadingCF } = useGetCreatedForm()
	const [dialogIsOpen, setDialogIsOpen] = useState(false)
	const [selectedForm, setSelectedForm] = useState<PostFormBody>()

	if (isLoadingC || isLoadingCF || !contacts || !createdForm) {
		return <div className='w-full h-full flex items-center justify-center'>Loading...</div>
	}

	return (
		<section className='w-full h-full flex flex-col items-center justify-center'>
			<h2 className='text-4xl font-semibold'>Ваши заполненные формы</h2>
			{dialogIsOpen && (
				<CreatedFormDialog
					open={dialogIsOpen}
					onOpenChange={() => setDialogIsOpen(false)}
					interactions={selectedForm?.contactInteractions || []}
					contacts={contacts}
				/>
			)}
			<div className='w-7/12 mt-6'>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Количество форм</TableHead>
							<TableHead className='text-right'>Дата</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className='w-full'>
						{createdForm.map(form => (
							<TableRow
								className='w-full'
								onClick={() => {
									setSelectedForm(form)
									setDialogIsOpen(true)
								}}>
								<TableCell>{form.interactionCount}</TableCell>
								<TableCell className='text-right'>{form.date}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</section>
	)
}

export default CreatedFormPage
