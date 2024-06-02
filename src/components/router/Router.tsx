import { ROUTES } from "@/lib/constants/router";
import Layout from "@/pages/layout/Layout";
import LoginPage from "@/pages/loginPage/LoginPage";
import RegistrationPage from "@/pages/registrationPage/RegistrationPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout>ROOT</Layout>,
  },
  {
    path: ROUTES.REGISTRATION,
    element: <Layout children={<RegistrationPage />} />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Layout children={<LoginPage />} />,
  },
]);
