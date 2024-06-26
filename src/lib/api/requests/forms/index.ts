import $api from '../../instance'

export interface ContactInteraction {
	contactId: string
	respect: number
	time: number
	trust: number
	empathy: number
	communication: number
}

export interface PostFormBody {
	date: string
	interactionCount: number
	contactInteractions: ContactInteraction[]
}

export const postForm = (body: PostFormBody) => {
	return $api.post('form', body)
}

export const getCreatedForm = () => {
	return $api.get<PostFormBody[]>('form', {
		params: {
			size: 10000,
		},
	})
}
