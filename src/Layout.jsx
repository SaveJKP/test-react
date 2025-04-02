import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col p-10">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
