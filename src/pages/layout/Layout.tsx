import { ROUTES } from "@/lib/constants/router";
import React, { ReactNode } from "react";
import NavItem from "./NavItem";
import Find from "/assets/drawerSVGs/compass.svg";
import Form from "/assets/drawerSVGs/form.svg";
import Logout from "/assets/drawerSVGs/logout.svg";
import Analysis from "/assets/drawerSVGs/trending-up.svg";
import Top from "/assets/drawerSVGs/trophy.svg";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row">
      <aside className="w-full h-full lg:w-2/12 flex fixed flex-col text-gray-400  bg-[#27293b] p-3">
        <h2 className="text-center text-2xl text-white font-semibold">
          Friends Tracker
        </h2>
        <div className="w-11/12 self-center text-end mt-5 text-lg">name</div>
        <div className="w-11/12 h-[2px] self-center bg-white mt-2"></div>
        <ul className="flex lg:flex-col items-center text-sm mt-4">
          <NavItem to={ROUTES.FORM} imgSrc={Form}>
            <span>Заполнить форму</span>
          </NavItem>
          <NavItem to={ROUTES.FORM} imgSrc={Top}>
            <span>Мой рейтинг друзей</span>
          </NavItem>
          <NavItem to={ROUTES.FORM} imgSrc={Analysis}>
            <span>Аналитика</span>
          </NavItem>
          <NavItem to={ROUTES.FORM} imgSrc={Find}>
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
      {children}
    </main>
  );
};

export default Layout;
