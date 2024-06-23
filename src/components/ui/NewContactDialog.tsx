import { PostContactCreateBody, postContact } from '@/lib/api/requests/contact'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from './dialog'
import { Input } from './input'
import { Textarea } from './textarea'

interface NewContactDialogProps {
	open: boolean
	onCLose: () => void
}

export const NewContactDialog = ({ onCLose, open }: NewContactDialogProps) => {
	const queryClient = useQueryClient()
	const { register, setValue, watch, reset, handleSubmit } =
		useForm<PostContactCreateBody>()
	const { mutate, isPending } = useMutation({
		mutationFn: (data: PostContactCreateBody) => postContact(data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['contacts'],
			})
			reset()
			onCLose()
		},
	})

	const handleFileChange = (e: any) => {
		const file = e.target.files?.[0]
		console.log(file)
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setValue('link', reader.result as string)
			}
			reader.readAsDataURL(file)
		}
	}

	const onSubmit: SubmitHandler<PostContactCreateBody> = data => {
		mutate(data)
	}
	return (
		<Dialog
			open={open}
			onOpenChange={() => {
				reset()
				onCLose()
			}}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Добавление контакта</DialogTitle>
				</DialogHeader>
				<div>
					<form
						id='new_contact_form'
						className='flex flex-col gap-3'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='flex gap-3 items-center'>
							<Avatar className='flex items-center justify-center w-[100px] h-[100px] '>
								<AvatarImage src={watch('link')} />
								<AvatarFallback>Фото</AvatarFallback>
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
						<Input
							placeholder='Имя'
							{...register('name', { required: true })}
						/>
						<Textarea placeholder='Описание' {...register('details')} />
						<Input
							type='date'
							placeholder='День рождения'
							{...register('birthDate', { required: true })}
						/>
					</form>
				</div>
				<DialogFooter>
					<Button disabled={isPending} form='new_contact_form'>
						{isPending ? 'Добавление...' : 'Добавить'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
