import { FC } from "react";
import MenuItem from "../../components/menuItem";
import { NavProps } from "../../components/Nav";
import PropsPaths from "../../components/PropsPath";

const GridNav: FC<NavProps> = ({ children }) => (
	<MenuItem name={"Grid"}>
		<PropsPaths path={"/grid"} />
		{children}
	</MenuItem>
);

export default GridNav;
