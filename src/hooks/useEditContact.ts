import { PutContactEdit, putEditContactById } from '@/lib/api/requests/contact'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useEditContact = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient()

	const { mutate, isPending, isError } = useMutation({
		mutationFn: (data: PutContactEdit) => putEditContactById(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['contacts'] })
			if (onSuccessCallback) onSuccessCallback()
		},
	})
	return { mutate, isPending, isError }
}
