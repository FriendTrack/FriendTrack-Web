import { ROUTES } from "@/lib/constants/router";
import FormPage from "@/pages/formPage/FormPage";
import Layout from "@/pages/layout/Layout";
import LoginPage from "@/pages/loginPage/LoginPage";
import RegistrationPage from "@/pages/registrationPage/RegistrationPage";
import RatingPage from "@/pages/ratingPage/RatingPage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<>root</>} />

        <Route path={ROUTES.FORM} element={<FormPage />} />
        <Route path={ROUTES.RATING} element={<RatingPage />} />
        <Route path={ROUTES.ANALYTIC} element={<>analytic</>} />
        <Route path={ROUTES.FIND} element={<>find</>} />
      </Route>
      <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    </>
  )
);

export default router;
