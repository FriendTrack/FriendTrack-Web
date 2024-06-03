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
    <li onClick={onClick} className={`w-full `}>
      <NavLink
        to={to}
        className={`flex cursor-pointer transition-colors hover:bg-[#0f1126] hover:text-white p-2 rounded-md items-center justify-items-end gap-3 ${
          current ? "bg-[#0f1126] text-white" : ""
        }   ${className} `}
      >
        <img src={imgSrc} width={"36px"} alt="..." />
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
