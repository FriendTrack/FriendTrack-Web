import { PostContactCreateBody, postContact } from '@/lib/api/requests/contact'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateContact = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient()
	const { mutate, isPending, isError } = useMutation({
		mutationFn: (data: PostContactCreateBody) => postContact(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['contacts'] })
			queryClient.invalidateQueries({ queryKey: ['rating'] })
			queryClient.invalidateQueries({ queryKey: ['averageRating'] })
			if (onSuccessCallback) onSuccessCallback()
		},
	})
	return { mutate, isPending, isError }
}
