import { FC } from "react";
import MenuItem from "./menuItem";

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
