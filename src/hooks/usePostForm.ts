import { PostFormBody, postForm } from '@/lib/api/requests/forms'
import { useMutation } from '@tanstack/react-query'

export const usePostForm = (onSuccessCallback?: () => void) => {
	const { mutate, isPending, isError } = useMutation({
		mutationFn: (data: PostFormBody) => postForm(data),
		onSuccess: () => {
			if (onSuccessCallback) onSuccessCallback()
		},
	})

	return { mutate, isPending, isError }
}
