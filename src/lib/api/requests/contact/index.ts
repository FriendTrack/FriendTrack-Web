import $api from '../../instance'

export type ContactId = string

export interface Contact {
	name: string
	details: string
	link: string
	birthDate: string
	id: string
	userId: ContactId
}

export interface getContactsResponse {
	contactDtoList: Contact[]
	page: number
	size: number
	totalPages: number
}

export interface PostContactCreateBody {
	name: string
	details: string
	link: string
	birthDate: string
}

export const getContactById = (id: ContactId) => {
	return $api.get<Contact>(`contact/${id}`)
}

export const getContacts = () => {
	return $api.get<getContactsResponse>('contact')
}

export const postContact = (body: PostContactCreateBody) => {
	return $api.post<Contact>(`contact`, body)
}
