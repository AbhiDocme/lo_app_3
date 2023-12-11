import React, { Suspense } from "react";
import Homepage from "./Homepage";
import Loginpage from "./Auth/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Navigation/SideBar";
import { Box } from "@mui/material";
import Payrollpage from "./Navigation/SideBarNav/Payrollpage";
import Timepage from "./Navigation/SideBarNav/Timepage";
import Recruitmentpage from "./Navigation/SideBarNav/Recruitmentpage";
import Performancepage from "./Navigation/SideBarNav/Performancepage";
import Helppage from "./Navigation/SideBarNav/Helppage";
import Cardcomp from "./HomeContent/Card";
import Appearance from "./Settings/SettingsType/Appearance";
import DesignationPage from "./Settings/SettingsType/Designation/DesignationPage";
import CompanyList from "./Settings/SettingsType/CompanyPage/CompanyList";
import NotificationPage from "./Settings/SettingsType/NotificationPage";
import UserPrivilegePage from "./Settings/SettingsType/UserPrivilegePage";
import OrganisationalSettingsPage from "./Settings/SettingsType/OrganisationalSettings/OrganisationalSettingsPage";
import AssetTypePage from "./Settings/SettingsType/AssetType/AssetTypePage";

function AppRoute() {
  const authProtectedRoutes = [
    { path: "/home", component: <Cardcomp /> },
    { path: "/payroll", component: <Payrollpage /> },
    { path: "/time", component: <Timepage /> },
    { path: "/recruitment", component: <Recruitmentpage /> },
    { path: "/performance", component: <Performancepage /> },
    { path: "/help", component: <Helppage /> },
    { path: "/settings/appearance", component: <Appearance /> },
    { path: "/settings/designation", component: <DesignationPage /> },
    { path: "/settings/company", component: <CompanyList /> },
    { path: "/settings/notification", component: <NotificationPage /> },
    { path: "/settings/userprivileges", component: <UserPrivilegePage /> },
    { path: "/settings/organisationsettings", component: <OrganisationalSettingsPage /> },
    { path: "/settings/documenttypes", component: <DesignationPage /> },
    { path: "/settings/assettypes", component: <AssetTypePage /> },
  ];

  //   const publicRoutes = [{ path: "/", component: <Page /> }];

  const AuthUser = localStorage.getItem("email");

  return (
    <Routes>
      <Route
        path="/"
        element={
          AuthUser ? (
            <Box sx={{ display: "flex" }}>
              <Sidebar />
              <Homepage />
            </Box>
          ) : (
            <Box>
              <Loginpage />
            </Box>
          )
        }
      ></Route>

      {authProtectedRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <Suspense>
              <Box width={"100%"}>
                <main
                  style={{
                    display: "flex",
                    height: "100vh",
                  }}
                >
                  <Sidebar />
                  {route.component}
                </main>
              </Box>
            </Suspense>
          }
         
        />
      ))}
    </Routes>
  );
}

export default AppRoute;
