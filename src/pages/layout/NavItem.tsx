import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  imgSrc?: string;
  current?: boolean;
  onClick?: () => void;
}
const NavItem = ({
  to,
  children,
  className,
  imgSrc,
  current,
  onClick,
}: NavItemProps) => {
  return (
    <li
      className={`w-full p-3 rounded-md cursor-pointer hover:bg-[#0f1126] hover:text-white transition-colors ${
        current ? "bg-[#0f1126] text-white" : ""
      }`}
    >
      <NavLink
        to={to}
        onClick={onClick}
        className={`flex items-center justify-items-end gap-3   ${className} `}
      >
        <img src={imgSrc} width={"36px"} alt="..." />
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
