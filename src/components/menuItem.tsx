// from modules
import { useLocation } from "@tanstack/react-router";
import classNames from "classnames";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";

export type MenuItemProps = {
	name: string;
	href?: string;
	children?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const MenuItem: FC<MenuItemProps> = ({
	name,
	href,
	className,
	children,
	role = "menuitem",
	...rest
}) => {
	return (
		<div
			className={classNames("menuItem", className, {
				active:
					useLocation().href ===
					(href || `/${name.toLocaleLowerCase()}`),
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
