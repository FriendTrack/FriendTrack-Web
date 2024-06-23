import {
	Contact,
	ContactId,
	PostContactCreateBody,
	PutContactEdit,
	deleteContactById,
	putEditContactById,
} from '@/lib/api/requests/contact'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import { Input } from './input'
import { Textarea } from './textarea'

interface EditDialogCardProps {
	contact: Contact
	onCloseDialog?: () => void
}

const EditDialogCard = ({ contact, onCloseDialog }: EditDialogCardProps) => {
	const queryClient = useQueryClient()
	const { mutate: editContact, isPending: isEditing } = useMutation({
		mutationFn: (data: PutContactEdit) => putEditContactById(data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['contacts'],
			})
			if (onCloseDialog) onCloseDialog()
		},
	})
	const { mutate: deleteContact, isPending: IsDeleting } = useMutation({
		mutationFn: (id: ContactId) => deleteContactById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['contacts'],
			})
			if (onCloseDialog) onCloseDialog()
		},
	})
	const { register, watch, setValue, handleSubmit } =
		useForm<PostContactCreateBody>({
			defaultValues: { ...contact },
		})
	const onSubmit: SubmitHandler<PostContactCreateBody> = data => {
		editContact({
			id: contact.id,
			body: data,
		})
	}

	const handleFileChange = (e: any) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setValue('link', reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div>
			<form
				id='edit_contact_form'
				className='flex flex-col gap-3'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex gap-3 items-center'>
					<Avatar className='flex items-center justify-center w-[100px] h-[100px] '>
						<AvatarImage src={watch('link')} />
						<AvatarFallback>{watch('name')[0]}</AvatarFallback>
					</Avatar>
					<div>
						<Input
							id='link'
							type='file'
							accept='image/*'
							onChange={e => handleFileChange(e)}
						/>
					</div>
					{watch('link') && (
						<Button
							form='@'
							variant={'secondary'}
							className='text-xs p-1'
							onClick={() => setValue('link', '')}>
							Очистить
						</Button>
					)}
				</div>
				<Input placeholder='Имя' {...register('name', { required: true })} />
				<Textarea placeholder='Описание' {...register('details')} />
				<Input
					type='date'
					placeholder='День рождения'
					{...register('birthDate', { required: true })}
				/>
				<Button disabled={isEditing} form='edit_contact_form'>
					{isEditing ? 'Изменение...' : 'Изменить'}
				</Button>
				<Button
					variant={'destructive'}
					disabled={IsDeleting}
					form='@'
					onClick={() => deleteContact(contact.id)}>
					{IsDeleting ? 'Удаление...' : 'Удалить'}
				</Button>
			</form>
		</div>
	)
}

export default EditDialogCard
