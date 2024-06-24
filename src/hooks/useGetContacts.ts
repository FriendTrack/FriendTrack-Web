import { getContacts } from '@/lib/api/requests/contact'
import { useQuery } from '@tanstack/react-query'

export const useGetContacts = () => {
	const { data, isLoading, isFetching, error } = useQuery({
		queryKey: ['contacts'],
		queryFn: () => getContacts(),
		select(data) {
			return data.data.contactDtoList
		},
	})

	return { data, isLoading, isFetching, error }
}
