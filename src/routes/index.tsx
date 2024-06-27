import CopyLinkItem from "src/components/copyLinkItem";
import packageJson from "../../package.json";
import { FC } from "react";
import { Link } from "react-router-dom";
/**
 * Draws the landing page
 */
const Index: FC = () => {
	return (
		<article>
			<div className="into">
				<h2>React</h2>
				<p>
					Our React package is developed to help developers transition
					to using this library in their React applications. These
					components can be imported and used in place of regular
					HTML.
				</p>
				<p>
					Please note that the React package is in active development,
					and some components may therefore be missing from this
					package. We will try to ensure that this package is as up to
					date as it can be, and will work to add new changes to the
					React package when necessary. All components below support
					the className prop, so if you want to change the behavior or
					add other classes from the library you can do so. The
					className prop will always add the class to the outermost
					div if the component renders multiple elements.
				</p>
			</div>
			<div>
				<h3>Installation</h3>
				<p>
					To install the React package you will need to use npm, and
					you will need access to the repository from your terminal.
					Please note that this might change in the future, as we want
					to look into the possibility to have this hosted on a
					private registry.
				</p>
				<pre className="example codeExample language-markup">
					npm i -D {`${packageJson.devDependencies["frno-react"]}`}
				</pre>
				<p>You find the source files for the frno-react project:</p>
				<pre className="example codeExample language-markup">
					node_modules/frno-react
				</pre>
			</div>
			<div>
				<CopyLinkItem path={"/"}>Andre versjoner</CopyLinkItem>
				<Link to="/v/0.1">V 0.1</Link>
			</div>
		</article>
	);
};

export default Index;
