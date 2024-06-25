// from modules
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// custom
import "./index.scss";

const root = document.getElementById("root");

// sends an error if no root element is found
if (!root) {
	throw new Error("Root element not found");
}

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
// import App from "./app";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app

ReactDOM.createRoot(root).render(
	<StrictMode>
		{/* <App RouterProvider={<RouterProvider router={router} />} /> */}
		<RouterProvider router={router} />
	</StrictMode>,
);
