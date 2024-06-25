import { FC } from "react";
import MenuItem from "../../components/menuItem";
import PropsPaths from "../../components/PropsPath";

/**
 * Draws the navigation menu for the Card component
 */
const CardRoute: FC = () => {
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
		</MenuItem>
	);
};
export default CardRoute;
