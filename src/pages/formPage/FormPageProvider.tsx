import { ContactInteraction } from '@/lib/api/requests/forms'
import { ReactNode, useState } from 'react'
import { FormPageContext } from './FormPage'

interface FormPageProviderProps {
	children: ReactNode
}

const FormPageProvider = ({ children }: FormPageProviderProps) => {
	const [contactInteractions, setContactInteractions] = useState<ContactInteraction[]>([])
	const [date, _] = useState<string>(new Date().toISOString().split('T')[0])
	const [interactionCount, setInteractionCount] = useState<number>(0)
	const addForm = (data: ContactInteraction) => {
		setContactInteractions(prevInteractions => [...prevInteractions, data])
		setInteractionCount(prevCount => prevCount + 1)
	}
	const clear = () => {
		setContactInteractions([])
		setInteractionCount(0)
	}
	return (
		<FormPageContext.Provider value={{ date, contactInteractions, interactionCount, addForm, clear }}>
			{children}
		</FormPageContext.Provider>
	)
}

export default FormPageProvider
