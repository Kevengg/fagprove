import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHash: FC = () => {
	const hash = useLocation().hash;

	useEffect(() => {
		if (hash) {
			document
				.querySelector(hash || "")
				?.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []);

	return null;
};

export default ScrollHash;
