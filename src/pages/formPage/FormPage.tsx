import { useConfirmReloadPage } from '@/hooks/useConfirmReloadPage'
import { useGetContacts } from '@/hooks/useGetContacts'
import { usePostForm } from '@/hooks/usePostForm'
import { useSwiperForm } from '@/hooks/useSwiper'
import { cn } from '@/lib/utils'
import 'swiper/css'
import 'swiper/css/pagination'
import { Mousewheel, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Form } from './Form'

export const FormPage = () => {
	useConfirmReloadPage()
	const { formsCount, setFormsCount, slidesOnPreview, swiperRef } =
		useSwiperForm({ slidesOnPreview: 3 })
	const { data, isLoading } = useGetContacts()
	const { mutate } = usePostForm()

	if (isLoading || !data) return <p>Loading...</p>
	return (
		<>
			<Swiper
				modules={[Pagination, Mousewheel]}
				mousewheel
				slidesPerView={slidesOnPreview}
				pagination={{ clickable: true }}
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				className={cn(
					'h-full w-full',
					formsCount > slidesOnPreview && 'cursor-grab'
				)}>
				{Array.from({ length: formsCount }).map((_, index) => (
					<SwiperSlide className='ps-[20px] px-[20px] pt-6' key={index}>
						<Form friends={data} onSave={() => setFormsCount(formsCount + 1)} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
