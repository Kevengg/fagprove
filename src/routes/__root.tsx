import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import App from "../app";

/**
 * crates the route tree, with the devtools enabled if the environment is development
 */
export const Route = createRootRoute({
	component: () => (
		<>
			<App RouterProvider={<Outlet />} />

			{["development", "dev"].includes(import.meta.env.VITE_ENV) && (
				// add dev tools here
				<TanStackRouterDevtools />
			)}
		</>
	),
});
