import usePathname from "@/hooks/usePathname";
import { ROUTES } from "@/lib/constants/router";
import { Outlet } from "react-router-dom";
import NavItem from "./NavItem";
import Find from "/assets/drawerSVGs/compass.svg";
import Form from "/assets/drawerSVGs/form.svg";
import Logout from "/assets/drawerSVGs/logout.svg";
import Analysis from "/assets/drawerSVGs/trending-up.svg";
import Top from "/assets/drawerSVGs/trophy.svg";

const PAGES = [
  {
    path: ROUTES.FORM,
    imgSrc: Form,
    title: "Заполнить форму",
  },
  {
    path: ROUTES.RATING,
    imgSrc: Top,
    title: "Рейтинг друзей",
  },
  {
    path: ROUTES.ANALYTIC,
    imgSrc: Analysis,
    title: "Аналитика",
  },
  {
    path: ROUTES.FIND,
    imgSrc: Find,
    title: "Найти друзей",
  },
];
const Layout = () => {
  const { page, setPage } = usePathname();
  return (
    <main className="max-w-screen min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/12"></div>
      <aside className="w-full fixed min-h-screen lg:w-2/12 flex flex-col text-gray-400  bg-[#27293b] p-3">
        <h2 className="text-center text-2xl text-white font-semibold">
          Friends Tracker
        </h2>
        <div className="w-11/12 self-center text-end mt-5 text-lg">name</div>
        <div className="w-11/12 h-[2px] self-center bg-white mt-2"></div>
        <ul className="flex lg:flex-col items-center text-sm mt-4 gap-3">
          {PAGES.map(({ path, imgSrc, title }) => (
            <NavItem
              current={page === path}
              onClick={() => setPage(path)}
              to={path}
              imgSrc={imgSrc}
            >
              {title}
            </NavItem>
          ))}
        </ul>
        <div className="w-11/12 h-[2px] mt-auto self-center bg-white"></div>
        <ul className="mt-4">
          <NavItem to={ROUTES.LOGIN} imgSrc={Logout}>
            <span>Выйти</span>
          </NavItem>
        </ul>
      </aside>

      <div className="w-full flex justify-center items-center">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
