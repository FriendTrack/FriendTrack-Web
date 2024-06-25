import { getCreatedForm } from '@/lib/api/requests/forms'
import { useQuery } from '@tanstack/react-query'

export const useGetCreatedForm = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['createdForm'],
		queryFn: () => getCreatedForm(),
		select: data => data.data.reverse(),
	})

	return { isLoading, data }
}
