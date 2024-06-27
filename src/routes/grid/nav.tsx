import { FC } from "react";
import MenuItem from "src/components/menuItem";
import { NavProps } from "../Nav";
import PropsPaths from "src/components/PropsPath";

const GridNav: FC<NavProps> = ({ children }) => (
	<MenuItem name={"Grid"}>
		<PropsPaths path={"/grid"} />
		{children}
	</MenuItem>
);

export default GridNav;
