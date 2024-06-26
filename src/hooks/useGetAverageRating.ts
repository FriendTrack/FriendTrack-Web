import { getAverageRating } from '@/lib/api/requests/rating'
import { useQuery } from '@tanstack/react-query'

export const useGetAverageRating = () => {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ['averageRating'],
		queryFn: () => getAverageRating(),
		select: data => data.data.content,
	})

	return { data, isLoading, error, isFetching }
}
