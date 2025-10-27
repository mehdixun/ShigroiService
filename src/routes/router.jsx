import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },            // "/" → Home page
      { path: "services", element: <Services /> },  // "/services" → all services
      { path: "services/:id", element: <ServiceDetail /> }, // "/services/1" → single service
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
