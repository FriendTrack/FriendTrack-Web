import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ROUTES } from '@/lib/constants/router'
import { Label } from '@radix-ui/react-label'
import React, { FormEvent, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { NavLink, useNavigate } from 'react-router-dom'

const LoginForm: React.FC<{ className?: string }> = ({ className }) => {
	const navigate = useNavigate()
	const [token, setToken] = useState<string | null>(null)
	const onLoginClick = (e: FormEvent) => {
		e.preventDefault()
		if (token === null) return
		navigate('/')
	}
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>Вход</CardTitle>
			</CardHeader>
			<CardContent>
				<form id='login_form' onSubmit={e => onLoginClick(e)}>
					<Label htmlFor='email'>Email</Label>
					<Input type='email' placeholder='email' id='email' />
					<Label htmlFor='password' className='block mt-3'>
						Пароль
					</Label>
					<Input type='password' placeholder='пароль' id='password' />
				</form>
				<ReCAPTCHA
					onChange={token => setToken(token)}
					className='mt-3'
					sitekey='6LdCOv4pAAAAANL1-hNs7D7d5pzjz2xNjbR2QbNj'
				/>
			</CardContent>
			<CardFooter className='flex-col  gap-3 justify-between md:flex-row'>
				<Button form='login_form' className='w-full md:w-auto'>
					Войти
				</Button>
				<div className='block text-sm opacity-50 hover:opacity-90 transition-opacity'>
					<NavLink to={ROUTES.REGISTRATION}>Зарегистрироваться</NavLink>
				</div>
			</CardFooter>
		</Card>
	)
}

export default LoginForm
