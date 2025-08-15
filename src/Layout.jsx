import { Navbar } from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/'}
      <main>
        <Outlet />
      </main>
    </>
  );
}
