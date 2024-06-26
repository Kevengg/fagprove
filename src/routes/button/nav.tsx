import { FC } from "react";
import PropsPaths from "../../components/PropsPath";
import MenuItem from "../../components/menuItem";
import { NavProps } from "../../components/Nav";

/**
 * Draws the navigation menu for the Button component
 */
const ButtonNav: FC<NavProps> = ({ children }) => (
	<MenuItem name="Button">
		<MenuItem
			name="Icon Button"
			href="/button#icon-button"
		/>
		<MenuItem
			name="Types of buttons"
			href="/button#types-of-buttons"
		/>
		<MenuItem
			name="Active and submit buttons"
			href="/button#active-and-submit-buttons"
		/>
		<PropsPaths path="/button" />
		{children}
	</MenuItem>
);
export default ButtonNav;
