import { FC } from "react";
import MenuItem from "src/components/menuItem";
import PropsPaths from "src/components/PropsPath";
import { NavProps } from "../Nav";

const HeaderNav: FC<NavProps> = ({ children }) => (
	<MenuItem name={"Header"}>
		<MenuItem
			name={"Changing texts"}
			href="changing-texts"
		/>
		<PropsPaths path={"/header"} />
		{children}
	</MenuItem>
);

export default HeaderNav;
