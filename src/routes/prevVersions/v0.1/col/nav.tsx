import { FC } from "react";
import MenuItem from "src/components/menuItem";
import PropsPaths from "src/components/PropsPath";
import { NavProps } from "../Nav";

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
