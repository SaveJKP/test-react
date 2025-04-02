import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import HomeAdmin from "./pages/HomeAdmin";
import HomeUser from "./pages/HomeUser";
import Owner from "./pages/Owner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "admin-home", element: <HomeAdmin /> },
      { path: "user-home", element: <HomeUser /> },
      { path: "owner", element:<Owner />},
    ],
  },
]);

export default router;
