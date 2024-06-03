import { ROUTES } from "@/lib/constants/router";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";
import Find from "/assets/drawerSVGs/compass.svg";
import Form from "/assets/drawerSVGs/form.svg";
import Analysis from "/assets/drawerSVGs/trending-up.svg";
import Top from "/assets/drawerSVGs/trophy.svg";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  var isAuthenticated = false;

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row">
      <aside
        className="w-full mb-5 lg:mb-0 text-gray-400  lg:w-2/12 xl:w-1/12 border border-solid border-slate-300 rounded-e-md"
        style={{ backgroundColor: "rgb(5, 30, 40)" }}
      >
        <ul className="flex h-full lg:flex-col items-center justify-evenly text-xl">
          {isAuthenticated ? (
            <>
              <li>
                <NavLink to={/*</li>ROUTES.LOGOUT*/ ""}>Выйти</NavLink>
              </li>

              <li>
                <NavLink
                  to={ROUTES.FORM}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <img src={Form} />
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.FORM}>
                  <img src={Top} />
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.FORM}>
                  <img src={Analysis} />
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.FORM}>
                  <img src={Find} />
                </NavLink>
              </li>
            </>
          ) : (
            <div>
              <li>
                <NavLink to={ROUTES.LOGIN}>Вход</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.REGISTRATION}>Регистрация</NavLink>
              </li>
            </div>
          )}
        </ul>
      </aside>
      {children}
    </main>
  );
};

export default Layout;
