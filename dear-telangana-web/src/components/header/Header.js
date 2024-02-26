import { NavLink, Outlet } from "react-router-dom";
import classess from "./Header.module.css";
const Header = () => {
  return (
    <div className={classess.outerContainer}>
      <div className={classess.maincontainer}>
        <div className={classess.mainHeader}>
          <NavLink to="/">Dear Comrade</NavLink>
        </div>

        <ul className={classess.rightNav}>
          <li className={classess.rightNavLink}>
            <NavLink to="/video">Movies</NavLink>
          </li>
          <li className={classess.rightNavLink}>
            <NavLink to="/news">News</NavLink>
          </li>
        </ul>
      </div>
      <main className={classess.contentContainer}>
        <Outlet />
      </main>
    </div>
  );
};
export default Header;
