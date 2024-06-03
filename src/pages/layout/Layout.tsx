import usePathname from "@/hooks/usePathname";
import { ROUTES } from "@/lib/constants/router";
import React, { ReactNode } from "react";
import NavItem from "./NavItem";
import Find from "/assets/drawerSVGs/compass.svg";
import Form from "/assets/drawerSVGs/form.svg";
import Logout from "/assets/drawerSVGs/logout.svg";
import Analysis from "/assets/drawerSVGs/trending-up.svg";
import Top from "/assets/drawerSVGs/trophy.svg";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { page, setPage } = usePathname();
  return (
    <main className="max-w-screen min-h-screen flex flex-col lg:flex-row">
      <aside className="w-full min-h-screen lg:w-2/12 flex flex-col text-gray-400  bg-[#27293b] p-3">
        <h2 className="text-center text-2xl text-white font-semibold">
          Friends Tracker
        </h2>
        <div className="w-11/12 self-center text-end mt-5 text-lg">name</div>
        <div className="w-11/12 h-[2px] self-center bg-white mt-2"></div>
        <ul className="flex lg:flex-col items-center text-sm mt-4 gap-3">
          <NavItem
            current={page === ROUTES.FORM}
            onClick={() => setPage(ROUTES.FORM)}
            to={ROUTES.FORM}
            imgSrc={Form}
          >
            <span>Заполнить форму</span>
          </NavItem>
          <NavItem
            current={page === ROUTES.RATING}
            onClick={() => setPage(ROUTES.RATING)}
            to={ROUTES.RATING}
            imgSrc={Top}
          >
            <span>Рейтинг друзей</span>
          </NavItem>
          <NavItem
            current={page === ROUTES.ANALYTIC}
            onClick={() => setPage(ROUTES.ANALYTIC)}
            to={ROUTES.ANALYTIC}
            imgSrc={Analysis}
          >
            <span>Аналитика</span>
          </NavItem>
          <NavItem
            current={page === ROUTES.FIND}
            onClick={() => setPage(ROUTES.FIND)}
            to={ROUTES.FIND}
            imgSrc={Find}
          >
            <span>Найти друзей</span>
          </NavItem>
        </ul>
        <div className="w-11/12 h-[2px] mt-auto self-center bg-white"></div>
        <ul className="mt-4">
          <NavItem to={ROUTES.LOGIN} imgSrc={Logout}>
            <span>Выйти</span>
          </NavItem>
        </ul>
      </aside>

      <div className="w-full flex justify-center items-center">{children}</div>
    </main>
  );
};

export default Layout;
