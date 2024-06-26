import { getRating } from '@/lib/api/requests/rating'
import { useQuery } from '@tanstack/react-query'

export const useGetRating = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['rating'],
		queryFn: () =>
			getRating({
				size: 10000,
				calculationType: 'FORMS',
			}),
		select: data => data.data.content,
	})

	return { data, isLoading, error }
}
