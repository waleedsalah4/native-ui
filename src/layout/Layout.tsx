import GlassyNavbar from "@/components/navbars/GlassyNavbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <GlassyNavbar />
      <Outlet />
    </main>
  );
}

export default Layout;
