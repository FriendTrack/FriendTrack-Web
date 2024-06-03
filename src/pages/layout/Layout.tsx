import { ROUTES } from "@/lib/constants/router";
import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import useAuth from '/src/Auth';
import Form from '/public/assets/drawerSVGs/form.svg';
import Top from '/public/assets/drawerSVGs/trophy.svg';
import Find from '/public/assets/drawerSVGs/compass.svg';
import Analysis from '/public/assets/drawerSVGs/trending-up.svg';
import "./Layout.css"

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  var isAuthenticated = true;
  // const { isAuthenticated } = useAuth();

  return (
    <main className="w-screen h-screen flex flex-col lg:flex-row">
      <aside className="w-full mb-5 lg:mb-0  lg:w-3/12 xl:w-2/12 border border-solid border-slate-300 rounded-e-md" style={{backgroundColor:"rgb(5, 30, 40)"}}>
        <ul className="flex gap-3 lg:flex-col items-center text-xl">
          { isAuthenticated ?
            (<>
              <li>
                <NavLink to={/*</li>ROUTES.LOGOUT*/""}>Выйти</NavLink>
              </li>
              <div style={{marginTop:"30px", marginBottom:"30px", width:"100%", height:"5px", backgroundColor:"gray"}}></div>
              <li><NavLink to={ROUTES.FORM} className={({isActive}) => isActive ? "active": "" }><img src={Form} style={{height:"100px", width:"100px", marginTop:"50px", color:"inherit"}} /></NavLink></li>
              <li><NavLink to={ROUTES.FORM}><img src={Top} style={{height:"100px", width:"100px", marginTop:"70px"}} /></NavLink></li>
              <li><NavLink to={ROUTES.FORM}><img src={Analysis} style={{height:"100px", width:"100px", marginTop:"70px"}} /></NavLink></li>
              <li><NavLink to={ROUTES.FORM}><img src={Find} style={{height:"100px", width:"100px", marginTop:"70px"}} /></NavLink></li>
             </>
            ) 
              : 
            (
              <>
              <li>
                <NavLink to={ROUTES.LOGIN}>Войти</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.REGISTRATION}>Зарегистрироваться</NavLink>
              </li>
              <div style={{marginTop:"30px", marginBottom:"30px", width:"100%", height:"5px", backgroundColor:"gray"}}></div>
              </>
            )
          }
        </ul>
      </aside>
      {children}
    </main>
  );
};

export default Layout;
