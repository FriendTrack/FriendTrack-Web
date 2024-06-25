import $api from '../../instance'

export interface getRatingResponse {
	page: number,
	size: number,
	totalPages: number,
	content: [
		{
			contactId: string,
			interactionCount: number,
			questionAnswerCount: number,
			timeRating: number,
			communicationRating: number,
			respectRating: number,
			trustRating: number,
			empathyRating: number,
			calculationType: string
		}
	]
}

export interface GetRatingQueryParams {
	toDate: string
}

export const getRating = (queryParams: GetRatingQueryParams) => {
	return $api.get<getRatingResponse>(
		'rating?fieldType=ALL&calculationType=FORMS',
		{
			params: queryParams,
		}
	)
}

