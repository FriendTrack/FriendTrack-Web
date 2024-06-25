import { useEffect, useRef, useState } from 'react'
import { SwiperClass } from 'swiper/react'

interface useSwiperProps {
	slidesOnPreview: number
}

export const useSwiperForm = ({ slidesOnPreview }: useSwiperProps) => {
	const swiperRef = useRef<SwiperClass | null>(null)
	const [formsCount, setFormsCount] = useState(1)
	useEffect(() => {
		if (formsCount > slidesOnPreview) {
			swiperRef.current?.slideTo(formsCount)
		}
	}, [formsCount])

	return { swiperRef, formsCount, setFormsCount, slidesOnPreview }
}
