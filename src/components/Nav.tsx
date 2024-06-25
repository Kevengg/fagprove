import { FC, Fragment, ReactElement } from "react";
import ButtonNav from "../routes/button/nav";
import CardNav from "../routes/card/nav";
import ColNav from "../routes/col/nav";

// eslint-disable-next-line react-refresh/only-export-components
export const navItems: ReactElement[] = [
	<ButtonNav />,
	<CardNav />,
	<ColNav />,
];

const Nav: FC = () => {
	return (
		<nav>
			<div
				className="menuItem"
				role="menuitem">
				<a href="/">
					<h1 className="fs-h2">FRNO-React</h1>
				</a>
				<div
					className="content"
					role="menu">
					<div>
						{navItems.map((item, index) => (
							<Fragment key={index}>{item}</Fragment>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
