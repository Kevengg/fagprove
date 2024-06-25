import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the hash in the url
 */
const ScrollHash: FC = () => {
	const hash = useLocation().hash;

	useEffect(() => {
		if (hash) {
			document
				.querySelector(hash || "")
				?.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null;
};

export default ScrollHash;
