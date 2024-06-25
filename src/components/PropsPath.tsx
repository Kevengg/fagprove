import { FC } from "react";
import MenuItem from "./menuItem";
/**
 * Draws the part of the menu that links to the props section of the component
 */
const PropsPaths: FC<{ path: string }> = ({ path }) => {
	return (
		<MenuItem
			name="Props"
			href={`${path}#props`}>
			<MenuItem
				name="Custom Props"
				href={`${path}#props`}
			/>
		</MenuItem>
	);
};
export default PropsPaths;
