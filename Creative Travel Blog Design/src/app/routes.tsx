import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { Stories } from "./pages/Stories";
import { About } from "./pages/About";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "destinations", Component: Destinations },
      { path: "stories", Component: Stories },
      { path: "about", Component: About },
    ],
  },
]);
