import { FC } from "react";
import MenuItem from "../../components/menuItem";
import PropsPaths from "../../components/PropsPath";

const ColRoute: FC = () => {
	return (
		<MenuItem name="Col">
			<PropsPaths path={"/col"} />
		</MenuItem>
	);
};
export default ColRoute;
