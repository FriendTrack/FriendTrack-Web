import { getRating } from '@/lib/api/requests/rating'
import { useQuery } from '@tanstack/react-query'

export const useGetRating = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['rating'],
		queryFn: () => getRating(),
		select: data => data.data.content,
	})

	return { data, isLoading, error }
}
