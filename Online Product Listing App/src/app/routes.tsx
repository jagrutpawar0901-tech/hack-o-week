import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { ProductDetail } from "./components/ProductDetail";
import { AddProduct } from "./components/AddProduct";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "product/:id", Component: ProductDetail },
      { path: "add", Component: AddProduct },
      { path: "*", Component: NotFound },
    ],
  },
]);
