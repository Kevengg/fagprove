// from modules
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// react router
import { RouterProvider } from "react-router-dom";

// router
import router from "./routes/routes";

// custom
import "./index.scss";

const root = document.getElementById("root");

// sends an error if no root element is found
if (!root) {
	throw new Error("Root element not found");
}

// Render the app

ReactDOM.createRoot(root).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
