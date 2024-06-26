import $api from '../../instance'

export interface Pagination {
	page: number
	size: number
	totalPages: number
}

type CalculationType = 'FORMS' | 'QUESTIONS' | 'ALL'

export interface Rating {
	contactId: string
	interactionCount: number
	questionAnswerCount: number
	timeRating: number
	communicationRating: number
	respectRating: number
	trustRating: number
	empathyRating: number
	calculationType: CalculationType
}

export interface AverageRating {
	contactId: string
	averageRating: number
	oldAverageRating: number
	lastInteractionDate: string
	ratingIncreased: boolean
}

export interface PaginationParams {
	page?: number
	size?: number
}
export interface GetRatingQueryParams extends PaginationParams {
	fromDate?: number
	toDate?: number
	fieldType?: 'ALL' | 'TIME' | 'EMPATHY' | 'TRUST' | 'COMMUNICATION' | 'RESPECT'
	calculationType?: CalculationType
}

export interface GetRatingResponse extends Pagination {
	content: Rating[]
}

export interface GetAverageRatingResponse extends Pagination {
	content: AverageRating[]
}

export const getRating = (params?: GetRatingQueryParams) => {
	return $api.get<GetRatingResponse>('rating', {
		params: params,
	})
}

export const getAverageRating = (params?: PaginationParams) => {
	return $api.get<GetAverageRatingResponse>('rating/average', {
		params: params,
	})
}
