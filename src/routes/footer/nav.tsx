import { FC } from "react";
import MenuItem from "../../components/menuItem";
import PropsPaths from "../../components/PropsPath";
import { NavProps } from "../Nav";

const FooterNav: FC<NavProps> = ({ children }) => (
	<MenuItem name="Footer">
		<PropsPaths path="/footer" />
		{children}
	</MenuItem>
);

export default FooterNav;
