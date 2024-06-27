import { FC } from "react";
import MenuItem from "../../../../components/menuItem";
import PropsPaths from "../../../../components/PropsPath";
import { NavProps } from "../../../../components/Nav";

/**
 * Draws the navigation menu for the Card component
 */
const CardRoute: FC<NavProps> = ({ children }) => {
	return (
		<MenuItem name="Card">
			<MenuItem
				name="Card with icon"
				href="/card#card-with-icon"
			/>
			<MenuItem
				name="Small card"
				href="/card#small-card"
			/>
			<PropsPaths path={"/card"} />
			{children}
		</MenuItem>
	);
};
export default CardRoute;
