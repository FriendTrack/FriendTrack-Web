import { Button } from '@/components/ui/button'
import { useConfirmReloadPage } from '@/hooks/useConfirmReloadPage'
import { useGetContacts } from '@/hooks/useGetContacts'
import { usePostForm } from '@/hooks/usePostForm'
import { useSwiperForm } from '@/hooks/useSwiper'
import { ContactInteraction, PostFormBody } from '@/lib/api/requests/forms'
import { cn } from '@/lib/utils'
import { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Form } from './Form'

interface FormPageContext extends PostFormBody {
	addForm: (data: ContactInteraction) => void
	clear: () => void
}
export const FormPageContext = createContext<FormPageContext>({
	date: '',
	contactInteractions: [],
	interactionCount: 0,
	addForm: (data: ContactInteraction) => {},
	clear: () => {},
})

export const FormPage = () => {
	useConfirmReloadPage()
	const { formsCount, setFormsCount, slidesOnPreview, swiperRef } = useSwiperForm({ slidesOnPreview: 3 })
	const { data, isLoading } = useGetContacts()
	const { mutate, isPending } = usePostForm()
	const { contactInteractions, date, interactionCount, clear } = useContext(FormPageContext)
	const navigate = useNavigate()

	if (isLoading || !data) return <p>Loading...</p>
	return (
		<Swiper
			modules={[Pagination, Mousewheel]}
			mousewheel
			slidesPerView={slidesOnPreview}
			pagination={{ clickable: true }}
			preventClicks={false}
			preventClicksPropagation={false}
			onSwiper={swiper => {
				swiperRef.current = swiper
			}}
			className={cn('h-full w-full relative', formsCount > slidesOnPreview && 'cursor-grab')}>
			{Array.from({ length: formsCount }).map((_, index) => (
				<SwiperSlide className='ps-[20px] px-[20px] pt-6' key={index}>
					<Form friends={data} onSave={() => setFormsCount(formsCount + 1)} />
				</SwiperSlide>
			))}
			{contactInteractions.length !== 0 && (
				<Button
					className='absolute right-10 bottom-10 bg-green-600 z-50'
					onClick={e => {
						e.stopPropagation()
						mutate({
							contactInteractions: contactInteractions,
							date: date,
							interactionCount: interactionCount,
						})
						clear()
						setFormsCount(1)
						navigate('/rating')
					}}>
					{isPending ? 'Отправка...' : 'Завершить анкетирование'}
				</Button>
			)}
		</Swiper>
	)
}
