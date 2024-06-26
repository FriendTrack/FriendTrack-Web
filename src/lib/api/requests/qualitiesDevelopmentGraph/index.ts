import $api from '../../instance'

export type ContactId = string

export interface getQualitiesDevResponse {
	contactId: string,
	interactionCount: number,
	questionAnswerCount: number,
	averageRating: number,
	timeRating: number,
	communicationRating: number,
	respectRating: number,
	trustRating: number,
	empathyRating: number,
	lastInteractionDate: string,
	title: string,
	description: string
}


export interface getQualitiesDevQueryParams {
	periodType: string
}

export const getQualitiesDev = (id: ContactId, params?: getQualitiesDevQueryParams) => {
	return $api.get<getQualitiesDevResponse[]>(`rating/graph/contact/${id}?periodType=${params?.periodType}`)
}

