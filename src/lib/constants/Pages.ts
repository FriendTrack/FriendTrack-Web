import { ROUTES } from './ROUTES'

const BASE_IMG_SRC = '/assets/drawerSVGs'

interface Page {
	path: string
	imgSrc: string
	title: string
}

export const PAGES: Page[] = [
	{
		path: ROUTES.FORM,
		imgSrc: `${BASE_IMG_SRC}/clipboard-edit.svg`,
		title: 'Заполнить форму',
	},
	{
		path: ROUTES.CREATED_FORM,
		imgSrc: `${BASE_IMG_SRC}/clipboard-list.svg`,
		title: 'Заполненные формы',
	},
	{
		path: ROUTES.RATING,
		imgSrc: `${BASE_IMG_SRC}/trophy.svg`,
		title: 'Рейтинг друзей',
	},
	{
		path: ROUTES.ANALYTIC,
		imgSrc: `${BASE_IMG_SRC}/bar-chart-3.svg`,
		title: 'Аналитика',
	},
]
