import { ROUTES } from "@/lib/constants/router";
import LoginPage from "@/pages/loginPage/LoginPage";
import RegistrationPage from "@/pages/registrationPage/RegistrationPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: ROUTES.REGISTRATION,
    element: <RegistrationPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
]);
