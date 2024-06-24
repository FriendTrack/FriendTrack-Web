import { ROUTES } from '@/lib/constants/ROUTES'
import { AnalyticPage } from '@/pages/analyticPage/AnalyticPage'
import { FormPage } from '@/pages/formPage/FormPage'
import FormPageProvider from '@/pages/formPage/FormPageProvider'
import { Layout } from '@/pages/layout/Layout'
import { LoginPage } from '@/pages/loginPage/LoginPage'
import { RatingPage } from '@/pages/ratingPage/RatingPage'
import { RegistrationPage } from '@/pages/registrationPage/RegistrationPage'

import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Layout />}>
				<Route index element={<>root</>} />

				<Route
					path={ROUTES.FORM}
					element={
						<FormPageProvider>
							<FormPage />
						</FormPageProvider>
					}
				/>
				<Route path={ROUTES.RATING} element={<RatingPage />} />
				<Route path={ROUTES.ANALYTIC} element={<AnalyticPage />} />
				{/* <Route path={ROUTES.FIND} element={<>find</>} /> */}
			</Route>
			<Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />
			<Route path='*' element={<Navigate to={ROUTES.RATING} replace />} />
		</>
	)
)

export default router
