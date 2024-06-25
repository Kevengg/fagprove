/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { lazy } from "react";

// import all pages here
const Index = lazy(() => import("./index"));
const Button = lazy(() => import("./button/button"));
const Card = lazy(() => import("./card/card"));
const Col = lazy(() => import("./col/col"));

/**
 * Holds the browser router
 */
const router = createBrowserRouter([
	{
		path: "",
		Component: App,
		children: [
			{
				path: "/",
				Component: Index,
				children: [],
			},
			{
				path: "/button",
				Component: Button,
			},
			{
				path: "/card",
				Component: Card,
			},
			{
				path: "/col",
				Component: Col,
			},
		],
	},
]);

export default router;
