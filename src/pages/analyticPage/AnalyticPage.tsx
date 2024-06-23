import AnalyticWindow from './Components/AnalyticWindow'
import { Contact } from '@/lib/api/requests/contact'

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

const friends: Contact[] = [
	{
		name: "asldfkj",
		details: "asldfkj",
		link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftrikky.ru%2Fkrasivye-kartinki-880042.html&psig=AOvVaw30GITpDKLzWxCkILtl0bag&ust=1719220729924000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODa9biy8YYDFQAAAAAdAAAAABAE",
		birthDate: "asldfkj",
		id: "1",
		userId: "asldfkj",
	},
	{
		name: "arsen",
		details: "asldfkj",
		link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.pinterest.com%2Fekaterinamec%2F%25D0%25BA%25D1%2580%25D0%25B0%25D1%2581%25D0%25B8%25D0%25B2%25D1%258B%25D0%25B5-%25D0%25B4%25D0%25B5%25D1%2582%25D1%2581%25D0%25BA%25D0%25B8%25D0%25B5-%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25B8%25D0%25BD%25D0%25BA%25D0%25B8%2F&psig=AOvVaw30GITpDKLzWxCkILtl0bag&ust=1719220729924000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODa9biy8YYDFQAAAAAdAAAAABAJ",
		birthDate: "asldfkj",
		id: "1",
		userId: "asldfkj",
	},
]

const contactsCount: ContactsCount = {
	positive: [1, 2, 4, 7, 13, 18, 20, 21, 21],
	negative: [1, 2, 3, 3, 5, 4, 3, 3, 2],
	dates: [
		'22.06',
		'23.06',
		'24.06',
		'25.06',
		'26.06',
		'27.06',
		'28.06',
		'29.06',
		'30.06',
	],
}

export const AnalyticPage = () => {
	return (
		<main className='w-full flex flex-col items-center justify-center gap-6'>
			<h1 className='text-4xl font-semibold'>Аналитика</h1>
			<div className='w-12/12 sm:w-10/12 xl:w-8/12'>
				<AnalyticWindow
					contactsCount={contactsCount}
					qualitiesDevelopment={qualitiesDevelopment}
					friends={friends}
				/>
			</div>
		</main>
	)
}
