import { FC } from "react";
import MenuItem from "../../components/menuItem";
import PropsPaths from "../../components/PropsPath";
import { NavProps } from "../../components/Nav";

/**
 * Draws the navigation menu for the Col component
 */
const ColRoute: FC<NavProps> = ({ children }) => {
	return (
		<MenuItem name="Col">
			<PropsPaths path={"/col"} />
			{children}
		</MenuItem>
	);
};
export default ColRoute;
