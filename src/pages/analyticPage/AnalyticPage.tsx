import { useGetContacts } from '@/hooks/useGetContacts'
import AnalyticWindow from './Components/AnalyticWindow'

export interface QualitiesDevelopment {
	empathy: number[]
	communication: number[]
	respect: number[]
	pastime: number[]
	trust: number[]
	dates: string[]
}

export interface ContactsCount {
	positive: number[]
	negative: number[]
	dates: string[]
}

const qualitiesDevelopment: QualitiesDevelopment = {
	empathy: [2, 4, 3, 4, 5],
	communication: [1, 2, 5, 3, 3],
	respect: [1, 2, 3, 3, 5],
	pastime: [1, 4, 1, 4, 4],
	trust: [1, 1, 1, 3, 4],
	dates: ['22.06', '23.06', '24.06', '25.06', '26.06'],
}

const contactsCount: ContactsCount = {
	positive: [1, 2, 4, 7, 13, 18, 20, 21, 21],
	negative: [1, 2, 3, 3, 5, 4, 3, 3, 2],
	dates: ['22.06', '23.06', '24.06', '25.06', '26.06', '27.06', '28.06', '29.06', '30.06'],
}

export const AnalyticPage = () => {
	const { data, isLoading } = useGetContacts()

	if (isLoading || !data) return <p>Loading...</p>
	return (
		<main className='w-full flex flex-col items-center justify-center gap-6'>
			<h1 className='text-4xl font-semibold'>Аналитика</h1>
			<div className='w-12/12 sm:w-10/12 xl:w-8/12'>
				<AnalyticWindow contactsCount={contactsCount} qualitiesDevelopment={qualitiesDevelopment} friends={data} />
			</div>
		</main>
	)
}
