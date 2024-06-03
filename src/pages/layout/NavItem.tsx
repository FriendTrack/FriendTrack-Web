import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  imgSrc?: string;
}
const NavItem = ({ to, children, className, imgSrc }: NavItemProps) => {
  return (
    <li className="w-full p-3 rounded-md cursor-pointer hover:bg-[#0f1126] hover:text-white transition-colors">
      <NavLink
        to={to}
        className={`flex items-center justify-items-end gap-3  ${className} `}
      >
        <img src={imgSrc} width={"36px"} alt="..." />
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
