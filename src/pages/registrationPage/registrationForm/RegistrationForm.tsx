import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PostRegistrationBody, postRegistration } from '@/lib/api/requests'
import { ROUTES } from '@/lib/constants/ROUTES'
import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SubmitHandler, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

export const RegistrationForm: React.FC<{ className?: string }> = ({
	className,
}) => {
	const navigate = useNavigate()
	const [token, setToken] = useState<string | null>(null)
	const { register, handleSubmit } = useForm<PostRegistrationBody>()
	const { mutate, isPending, isError } = useMutation({
		mutationFn: (data: PostRegistrationBody) => {
			return postRegistration(data)
		},
		onSuccess(data) {
			localStorage.setItem('accessToken', data.data.accessToken)
			localStorage.setItem('userId', data.data.userId)
			navigate('/')
		},
	})

	const onSubmit: SubmitHandler<PostRegistrationBody> = data => {
		if (token === null) return
		console.log(data)
		mutate(data)
	}

	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Регистрация</CardTitle>
			</CardHeader>
			<CardContent>
				<form id='register_form' onSubmit={handleSubmit(onSubmit)}>
					<Label htmlFor='email'>Email</Label>
					<Input
						{...register('email')}
						type='email'
						placeholder='email'
						id='email'
					/>
					<Label htmlFor='username' className='block mt-3'>
						Имя пользователя
					</Label>
					<Input
						{...register('username')}
						type='username'
						placeholder='Имя пользователя'
						id='username'
					/>
					<Label htmlFor='login' className='block mt-3'>
						Логин
					</Label>
					<Input
						{...register('login')}
						type='login'
						placeholder='Логин'
						id='login'
					/>
					<Label htmlFor='password' className='block mt-3'>
						Пароль
					</Label>
					<Input
						{...register('password')}
						type='password'
						placeholder='пароль'
						id='password'
					/>
				</form>
				<div>
					<ReCAPTCHA
						onChange={token => setToken(token)}
						className='mt-3'
						sitekey='6LdCOv4pAAAAANL1-hNs7D7d5pzjz2xNjbR2QbNj'
					/>
					{isError && <div className='text-red-500 text-sm'>Ошибка</div>}
				</div>
			</CardContent>
			<CardFooter className='h-full flex-col  gap-3 justify-between md:flex-row'>
				<Button
					disabled={isPending}
					form='register_form'
					className='w-full md:w-auto'>
					{isPending ? 'Регистрация...' : 'Зарегистрироваться'}
				</Button>
				<div className='block text-sm opacity-50 hover:opacity-90 transition-opacity'>
					<NavLink to={ROUTES.LOGIN}>Войти</NavLink>
				</div>
			</CardFooter>
		</Card>
	)
}
