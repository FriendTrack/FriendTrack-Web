import { ContactId, deleteContactById } from '@/lib/api/requests/contact'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteContact = (onSuccessCallback?: () => void) => {
	const queryClient = useQueryClient()
	const { mutate, isPending, isError } = useMutation({
		mutationFn: (id: ContactId) => deleteContactById(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['contacts'] })
			queryClient.invalidateQueries({ queryKey: ['rating'] })
			queryClient.invalidateQueries({ queryKey: ['averageRating'] })
			if (onSuccessCallback) onSuccessCallback()
		},
	})

	return { mutate, isPending, isError }
}
