import { FC, Fragment, ReactElement } from "react";
import ButtonNav from "../routes/button/nav";
import CardNav from "../routes/card/nav";
import ColNav from "../routes/col/nav";
import FooterNav from "../routes/footer/nav";
import GridNav from "../routes/grid/nav";
import HeaderNav from "../routes/header/nav";

export type NavProps = { children?: ReactElement };

/**
 * holds all the navigation items
 */ // eslint-disable-next-line react-refresh/only-export-components
export const navItems: ReactElement[] = [
	<ButtonNav />,
	<CardNav />,
	<ColNav />,
	<GridNav />,
	<HeaderNav />,
	<FooterNav />,
];
/**
 * generates the navigation menu
 */
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
