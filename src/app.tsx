// from modules
import { FC, ReactElement } from "react";
import { Button } from "frno-react";

// custom
import packageJson from "../package.json";
import { ButtonNav } from "./routes/button";
import { CardRoute } from "./routes/card";
import { ColRoute } from "./routes/col";
import Nav from "./components/Nav";

const App: FC<{ RouterProvider: ReactElement }> = ({ RouterProvider }) => {
	const frnoReactVersion = packageJson.devDependencies["frno-react"];
	return (
		<>
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
				<article>{RouterProvider}</article>
			</main>
		</>
	);
};

export default App;
