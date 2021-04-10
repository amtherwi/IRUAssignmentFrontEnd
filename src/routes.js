import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import Layout from "./layout/Layout";
// Route Views
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Countries from "./views/Countries";
import Items from "./views/Items";

export default [
  {
    path: "/",
    exact: true,
    layout: Layout,
    component: () => <Redirect to="/Dashboard" />
  },
  {
    path: "/Home",
    layout: Layout,
    component: Home
  },
  {
    path: "/Dashboard",
    layout: Layout,
    component: Dashboard
  },
  {
    path: "/Countries",
    layout: Layout,
    component: Countries
  },
  {
    path: "/items",
    layout: Layout,
    component: Items
  }
];
