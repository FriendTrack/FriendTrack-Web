import { Button } from "@/components/ui/button";
import usePathname from "@/hooks/usePathname";
import { PAGES } from "@/lib/constants/Pages";
import { ROUTES } from "@/lib/constants/router";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AsideDivider from "./Components/Divider";
import NavItem from "./Components/NavItem";
import Logout from "/assets/drawerSVGs/logout.svg";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { page, setPage } = usePathname();

  const onNavLinkClick = (page: string) => {
    setIsOpen(false);
    setPage(page);
  };
  return (
    <main className="max-w-screen min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-3/12 xl:w-2/12 bg-[#27293b] p-3 flex justify-between items-center">
        <h1 className="text-2xl text-white font-semibold">Friends Tracker</h1>
        <Button onClick={() => setIsOpen(true)}>Открыть</Button>
      </div>
      <aside
        className={`w-full h-full fixed md:min-h-screen md:w-3/12 xl:w-2/12 flex flex-col text-gray-400  bg-[#27293b] p-3 mb-6 md:mb-0 ${
          !isOpen ? "hidden md:flex" : ""
        }`}
      >
        <div className="flex md:block justify-between items-center md:justify-center">
          <h2 className="text-center text-2xl text-white font-semibold">
            Friends Tracker
          </h2>
          <Button className="md:hidden" onClick={() => setIsOpen(false)}>
            Закрыть
          </Button>
        </div>

        <div className="w-11/12 self-center text-end mt-5 text-lg">name</div>
        <AsideDivider />
        <ul className="flex flex-col items-center text-sm mt-4 gap-3">
          {PAGES.map(({ path, imgSrc, title }) => (
            <NavItem
              current={page === path}
              onClick={() => onNavLinkClick(path)}
              to={path}
              imgSrc={imgSrc}
            >
              {title}
            </NavItem>
          ))}
        </ul>
        <div className="mt-auto">
          <AsideDivider />
          <ul className="mt-3">
            <NavItem to={ROUTES.LOGIN} imgSrc={Logout}>
              <span>Выйти</span>
            </NavItem>
          </ul>
        </div>
      </aside>

      <div className="md:w-9/12 xl:w-10/12 flex justify-center items-center">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
