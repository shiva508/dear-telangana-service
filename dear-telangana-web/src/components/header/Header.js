import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex font-sans bg-slate-800	gap-4 justify-between	shadow-md sticky top-0">
        <h1 className="text-3xl text-white font-medium p-3 bg-green-800	rounded">
          <NavLink to="/">Dear Comrade</NavLink>
        </h1>
        <ul className="flex gap-3  text-white p-3">
          <li className="p-2  bg-green-800	rounded">
            <NavLink to="/video">Movies</NavLink>
          </li>
          <li className="p-2  bg-green-800	rounded">
            <NavLink to="/news">News</NavLink>
          </li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Header;
