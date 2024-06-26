import { RegistrationForm } from './registrationForm/RegistrationForm'

export const RegistrationPage = () => {
	return (
		<main className='w-screen h-screen flex flex-col items-center justify-center gap-6'>
			<h1 className='text-4xl font-semibold'>Friends Tracker</h1>
			<div className='w-10/12 sm:w-8/12 md:w-5/12 xl:w-3/12'>
				<RegistrationForm />
			</div>
		</main>
	)
}
