// from modules
import classNames from "classnames";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";

/**
 * The props for the menu item
 */
export type MenuItemProps = {
	name: string;
	href?: string;
	children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 *	One item in the menu
 *
 *  items can be nested
 */
const MenuItem: FC<MenuItemProps> = ({
	name,
	href,
	className,
	children,
	role = "menuitem",
	...rest
}) => {
	const location = useLocation();
	const path = `${location.pathname}${location.hash}`;
	return (
		<div
			className={classNames("menuItem", className, {
				active: path === (href || `/${name.toLocaleLowerCase()}`),
			})}>
			<div className="arrow">
				<div></div>
				<a
					tabIndex={0}
					href={href ? href : `/${name.toLocaleLowerCase()}`}
					{...rest}
					role={role}>
					{name}
				</a>
			</div>
			<div
				className="content"
				role="menu">
				<div className="bar"></div>
				{children && <div>{children}</div>}
			</div>
		</div>
	);
};

export default MenuItem;
