import { ContactId } from '@/lib/api/requests/contact'
import { getQuestionsContactById } from '@/lib/api/requests/questions'
import { useQuery } from '@tanstack/react-query'

export const useGetQuestionsContact = (id: ContactId | undefined) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['questionContact', id],
		queryFn: () => getQuestionsContactById(id),
		select: data => data.data,
		enabled: !!id,
		refetchOnWindowFocus: false,
	})
	return { data, isLoading, isError }
}
