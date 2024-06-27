/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import { lazy } from "react";
import v01 from "./prevVersions/v0.1/routes";

// import all pages here
const Index = lazy(() => import("./index"));
const Button = lazy(() => import("./button/button"));
const Card = lazy(() => import("./card/card"));
const Col = lazy(() => import("./col/col"));
const Footer = lazy(() => import("./footer/footer"));
const Grid = lazy(() => import("./grid/grid"));
const Header = lazy(() => import("./header/header"));

/**
 * Holds the browser router
 */
const router = createBrowserRouter([
	// wraps all other routes
	{
		path: "",
		Component: App,
		children: [
			{
				path: "",
				Component: Index,
			},
			{
				path: "button",
				Component: Button,
			},
			{
				path: "card",
				Component: Card,
			},
			{
				path: "col",
				Component: Col,
			},
			{
				path: "footer",
				Component: Footer,
			},
			{
				path: "grid",
				Component: Grid,
			},
			{
				path: "header",
				Component: Header,
			},
			// wrap all previous versions
			{
				path: "v",
				children: [
					{
						path: "0.1",
						children: v01,
					},
				],
			},
		],
	},
]);
console.log("router", router);

export default router;
