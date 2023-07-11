import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import MainLayout from "./pages/layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";

const queryClient = new QueryClient()

const App = () => {
  // useEffect(() => {
  //   themeChange(false);
  // }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

// Change theme Buttons
// <button data-set-theme="dark" data-act-class="bg-red-500">d</button>
// <button data-set-theme="light" data-act-class="bg-red-50">d</button>
