import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex font-sans bg-slate-800	gap-4 justify-between	shadow-md">
        <h1 className="text-3xl text-white font-medium p-3 bg-green-800	rounded">
          Dear Telangana
        </h1>
        <ul className="flex gap-3  text-white p-3">
          <li className="p-2  bg-green-800	rounded">Movies</li>
          <li className="p-2  bg-green-800	rounded">News</li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Header;
