import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import { CreateTripPage } from "../pages/CreateTripPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/createTrip"} element={<CreateTripPage />} />
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/users/:id"} element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
