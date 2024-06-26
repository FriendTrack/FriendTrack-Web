import { PostFormBody, postForm } from '@/lib/api/requests/forms'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const usePostForm = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient()
	const { mutate, isPending, isError } = useMutation({
		mutationFn: (data: PostFormBody) => postForm(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['averageRating'] })
			queryClient.invalidateQueries({ queryKey: ['rating'] })
			queryClient.invalidateQueries({ queryKey: ['createdForm'] })
			if (onSuccessCallback) onSuccessCallback()
		},
	})

	return { mutate, isPending, isError }
}
