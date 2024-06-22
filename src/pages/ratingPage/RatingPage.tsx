import { useGetFriends } from '@/hooks/useGetFriends'
import RatingList from './Components/RatingList'

export interface Friend {
	id: number
	date: string
	name: string
	avatar: string
	stats: {
		empathy: number
		communication: number
		respect: number
		pastime: number
		trust: number
		avg: number
		prev_avg: number
	}
}

const RatingPage = () => {
	const { data, isLoading } = useGetFriends()

	if (isLoading || !data) {
		return <p>Loading...</p>
	}
	return (
		<main className='w-full flex flex-col items-center justify-center gap-6'>
			<h1 className='text-4xl font-semibold'>Рейтинг</h1>
			<div className='w-12/12 sm:w-10/12 xl:w-8/12'>
				<RatingList friends={data} />
			</div>
		</main>
	)
}

export default RatingPage
