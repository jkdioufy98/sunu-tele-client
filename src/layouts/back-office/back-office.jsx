import React from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
RouterProvider;

const BackOffice = () => {
  return (
    <div>
    <h1>BACK-OFFICE</h1>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default BackOffice;
