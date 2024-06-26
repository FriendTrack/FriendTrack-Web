import $api from '../../instance'
import { ContactId } from '../contact'

export type QuestionType = 'COMMUNICATION' | 'TRUST' | 'TIME' | 'RESPECT' | 'EMPATHY'
export interface Question {
	id: string
	question: string
	fieldType: QuestionType
}

export const getQuestionsContactById = (id: ContactId | undefined) => {
	return $api.get<Question[]>(`questions/contact/${id}`)
}
