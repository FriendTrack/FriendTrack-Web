import { useGetAverageRating } from '@/hooks/useGetAverageRating'
import { useGetContacts } from '@/hooks/useGetContacts'
import { useGetRating } from '@/hooks/useGetRating'
import RatingList from './Components/RatingList'

export const RatingPage = () => {
	const { data: contacts, isLoading: isLoadingContacts } = useGetContacts()
	const { data: rating, isLoading: isLoadingRating } = useGetRating()
	const { data: avgRating, isLoading: isLoadingAvgRating } = useGetAverageRating()

	if (isLoadingContacts || isLoadingRating || isLoadingAvgRating) {
		return <p>Loading...</p>
	}

	return (
		<main className='w-full flex flex-col items-center justify-center gap-6'>
			<h1 className='text-4xl font-semibold'>Ваши друзья</h1>
			<div className='w-12/12 sm:w-10/12 xl:w-8/12'>
				{contacts && rating && avgRating && <RatingList contacts={contacts} rating={rating} avgRating={avgRating} />}
			</div>
		</main>
	)
}
