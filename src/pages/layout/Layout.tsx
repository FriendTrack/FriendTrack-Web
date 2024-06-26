import { Button } from '@/components/ui/button'
import usePathname from '@/hooks/usePathname'
import { PostLogoutBody, postLogout } from '@/lib/api/requests'
import { PAGES } from '@/lib/constants/Pages'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AsideDivider from './Components/AsideDivider'
import NavItem from './Components/NavItem'
import Logout from '/assets/drawerSVGs/logout.svg'

export const Layout = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { page, setPage } = usePathname()
	const { mutate } = useMutation({
		mutationFn: (data: PostLogoutBody) => postLogout(data),
	})

	const onNavLinkClick = (page: string) => {
		setIsOpen(false)
		setPage(page)
	}
	return (
		<main className='max-w-screen min-h-screen flex flex-col md:flex-row'>
			<div className='w-full  md:w-3/12 xl:w-2/12 bg-[#27293b] p-3 flex justify-between items-center'>
				<h1 className='text-2xl text-white font-semibold'>Friends Tracker</h1>
				<Button className='bg-gray-600' onClick={() => setIsOpen(true)}>
					Открыть
				</Button>
			</div>
			<aside
				className={`w-full h-full z-50 fixed md:min-h-screen md:w-3/12 xl:w-2/12 flex flex-col text-gray-400  bg-[#27293b] p-3 ${
					!isOpen && 'hidden md:flex'
				}`}>
				<div className='flex md:block justify-between items-center md:justify-center'>
					<h2 className='text-center text-2xl text-white font-semibold'>Friends Tracker</h2>
					<Button className='bg-gray-600 md:hidden' onClick={() => setIsOpen(false)}>
						Закрыть
					</Button>
				</div>

				<div className='w-11/12 self-center text-end mt-5 text-lg'>{}</div>
				<AsideDivider />
				<ul className='flex flex-col items-center text-sm mt-4 gap-3'>
					{PAGES.map((item, index) => (
						<NavItem
							key={index}
							current={page === item.path}
							onClick={() => onNavLinkClick(item.path)}
							to={item.path}
							imgSrc={item.imgSrc}>
							{item.title}
						</NavItem>
					))}
				</ul>
				<div className='mt-auto'>
					<AsideDivider />
					<ul className='mt-3'>
						<NavItem
							imgSrc={Logout}
							to={'/login'}
							onClick={() => {
								if (localStorage.getItem('userId')) {
									mutate({
										userId: localStorage.getItem('userId')!,
									})
								}
								localStorage.removeItem('accessToken')
								localStorage.removeItem('userId')
							}}>
							<span>Выйти</span>
						</NavItem>
					</ul>
				</div>
			</aside>

			<div className='md:w-9/12 xl:w-10/12 flex justify-center items-center'>
				<Outlet />
			</div>
		</main>
	)
}
