/* eslint-disable react-refresh/only-export-components */
import { RouteObject } from "react-router-dom";
import { lazy } from "react";

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
const router: RouteObject[] = [
	{
		path: "",
		Component: Index,
	},
	{
		path: "button",
		Component: Button,
	},
	// {
	// 	path: "/v01/card",
	// 	Component: Card,
	// },
	// {
	// 	path: "/v01/col",
	// 	Component: Col,
	// },
	// {
	// 	path: "/v01/footer",
	// 	Component: Footer,
	// },
	// {
	// 	path: "/v01/grid",
	// 	Component: Grid,
	// },
	// {
	// 	path: "/v01/header",
	// 	Component: Header,
	// },
];

export default router;
