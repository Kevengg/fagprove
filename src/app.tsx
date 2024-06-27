// from modules
import { FC } from "react";
import { Button } from "frno-react";

// custom
import packageJson from "../package.json";
import Nav from "./routes/Nav";
import { Outlet } from "react-router-dom";
import ScrollHash from "./components/scrollToHash";

/**
 * draws the main layout of the app
 */
const App: FC = () => {
	const frnoReactVersion = packageJson.devDependencies["frno-react"];
	return (
		<>
			<ScrollHash />
			<div className="header">
				<a
					href="#main"
					className="skip-link"
					role="navigation">
					Hopp til hovedinnhold
				</a>

				<div className="container flex">
					<a href="/">
						<img
							src="https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo.svg"
							alt="Forbrukerrådet logo"
							className="header-logo"
						/>
						<img
							src="https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo_symbol.svg"
							alt="Forbrukerrådet logo"
							className="header-logo-alt"
						/>
					</a>
					<Button
						className="pill bordered mr-2 ml-2"
						target="_blank"
						href={
							frnoReactVersion.includes("github:")
								? `https://github.com/Forbrukerradet/frno-react/tags`
								: `https://www.npmjs.com/package/frno-react/v/${frnoReactVersion}`
						}
						// rel="noopener noreferrer"
					>
						{frnoReactVersion}
					</Button>
				</div>
			</div>
			<div className="left">
				<Nav />
			</div>
			<main
				id="main"
				className="right">
				<article>
					<Outlet />
				</article>
			</main>
		</>
	);
};

export default App;
