import { useGetContacts } from '@/hooks/useGetContacts'
import RatingList from './Components/RatingList'

export const RatingPage = () => {
	const { data, isLoading } = useGetContacts()
	if (isLoading || !data) {
		return <p>Loading...</p>
	}
	return (
		<main className='w-full flex flex-col items-center justify-center gap-6'>
			<h1 className='text-4xl font-semibold'>Рейтинг</h1>
			<div className='w-12/12 sm:w-10/12 xl:w-8/12'>
				<RatingList contacts={data} />
			</div>
		</main>
	)
}
