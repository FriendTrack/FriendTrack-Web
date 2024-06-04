import { ROUTES } from "./router";

const BASE_IMG_SRC = "/assets/drawerSVGs";

export const PAGES = [
  {
    path: ROUTES.FORM,
    imgSrc: `${BASE_IMG_SRC}/form.svg`,
    title: "Заполнить форму",
  },
  {
    path: ROUTES.RATING,
    imgSrc: `${BASE_IMG_SRC}/trophy.svg`,
    title: "Рейтинг друзей",
  },
  {
    path: ROUTES.ANALYTIC,
    imgSrc: `${BASE_IMG_SRC}/trending-up.svg`,
    title: "Аналитика",
  },
  {
    path: ROUTES.FIND,
    imgSrc: `${BASE_IMG_SRC}/compass.svg`,
    title: "Найти друзей",
  },
];
