import { ROUTES } from "@/lib/constants/router";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row">
      <aside className="w-full mb-5 lg:mb-0  lg:w-2/12 border border-solid border-slate-300 rounded-e-md">
        <ul className="flex gap-3 lg:flex-col items-center text-xl">
          <li>
            <NavLink to={ROUTES.LOGIN} className={""}>
              Войти
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.REGISTRATION} className={""}>
              Зарегистрироваться
            </NavLink>
          </li>
        </ul>
      </aside>
      {children}
    </main>
  );
};

export default Layout;
