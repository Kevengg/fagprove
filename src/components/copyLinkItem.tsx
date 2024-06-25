import classNames from "classnames";
import { FC, HTMLAttributes, useRef } from "react";

type CopyLinkItemProps = {
	path: string;
	tag?: HeaderType;
} & HTMLAttributes<HTMLHeadingElement>;

type HeaderType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const headerTypeMap: Record<HeaderType, string> = {
	h1: "fs-h2",
	h2: "fs-h3",
	h3: "fs-h4",
	h4: "fs-h5",
	h5: "fs-h5",
	h6: "fs-h5",
};

const CopyLinkItem: FC<CopyLinkItemProps> = ({
	path,
	children,
	tag: Tag = "h2",
	onClick,
	className,
	onMouseLeave,
	...rest
}) => {
	const p = path[0] === "/" ? path : `/${path}`;

	// gets the full path
	const href = path.includes("//") ? path : `${window.location.origin}${p}`;
	// creates a uniq reference to the popup
	const popup = useRef<HTMLDivElement>(null);

	// creates the click event handler
	const click: HTMLAttributes<HTMLHeadingElement>["onClick"] = (e) => {
		onClick && onClick(e);
		navigator.clipboard.writeText(href);
		popup.current?.classList.add("show");
	};

	// creates the mouse leave event handler
	const leave: HTMLAttributes<HTMLHeadingElement>["onMouseLeave"] = (e) => {
		onMouseLeave && onMouseLeave(e);
		popup.current?.classList.remove("show");
	};

	return (
		<Tag
			onClick={click}
			// tabIndex={0}
			className={classNames(
				headerTypeMap[Tag],
				className,
				"mb-5",
				"copyLink",
			)}
			{...rest}
			onMouseLeave={leave}>
			<div aria-hidden></div>
			<div
				ref={popup}
				className="popup"
				aria-hidden>
				<div>Copied</div>
				<div className="arrow"></div>
			</div>
			{children}
			<i className="fa-regular  fa-link"></i>
		</Tag>
	);
};

export default CopyLinkItem;
