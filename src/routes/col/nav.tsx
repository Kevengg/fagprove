import { FC } from "react";
import MenuItem from "../../components/menuItem";
import PropsPaths from "../../components/PropsPath";

/**
 * Draws the navigation menu for the Col component
 */
const ColRoute: FC = () => {
	return (
		<MenuItem name="Col">
			<PropsPaths path={"/col"} />
		</MenuItem>
	);
};
export default ColRoute;
