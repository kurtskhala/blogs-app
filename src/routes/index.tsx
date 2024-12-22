import { Navigate, Route, Routes } from "react-router-dom";
import { BLOGS_ROUTES } from "./blogs";
import { AUTH_ROUTES } from "./auth";
import Layout from "@/components/layout/layout";
import Home from "@/pages/home/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/ka" />} />
      <Route path=":lang">
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {...BLOGS_ROUTES}
          {...AUTH_ROUTES}
        </Route>
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};
export default AppRoutes;
