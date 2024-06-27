// from modules
import { FC, HTMLAttributes, ReactElement, useState } from "react";

// frNo-react
import { Button } from "frno-react";

// custom
import "./documentationComp.scss";
import CopyLinkItem from "../copyLinkItem";
import { useLocation } from "react-router-dom";

/**
 * Interface used for props in the DocumentationComp component
 */
interface DocumentationCompProps extends HTMLAttributes<HTMLDivElement> {
	// the item to be displayed
	item: ReactElement;
	// the name of the item
	itemName?: string;
	// the id of the header, used for navigating to the item, insted of the itemName
	headerId?: string;
	// the item in text form
	codeExample: string;
	// descriptions
	description?: {
		// description before the item is displayed
		before?: string | ReactElement;
		// description after the item is displayed
		after?: string | ReactElement;
	};
	// the type of header to be used
	headerType?: HeaderType;
}

type HeaderType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Builds a documentation component for an item based on
 *
 * item - the item to be displayed
 *
 * itemName - the name of the item
 *
 * textExample - the item in text form
 *
 * description - descriptions
 *
 * headerType - the type of header to be used
 */
const DocumentationComp: FC<DocumentationCompProps> = ({
	item,
	itemName,
	codeExample,
	description,
	headerType = "h2",
	headerId,
	title,
}) => {
	// destructure the description object
	const { before, after } = description || {};

	// state to keep track of the whether the text example is open or not
	const [textExampleOpen, setTextExampleOpen] = useState<boolean>(true);
	const location = useLocation().pathname;
	return (
		<div className="docComp">
			{(itemName || title) && (
				<CopyLinkItem
					tag={headerType}
					id={headerId || (itemName || title)?.toLocaleLowerCase()}
					path={`${location}#${headerId || (itemName || title)?.toLocaleLowerCase()}`}>
					{itemName || title}
				</CopyLinkItem>
			)}
			{before && <div className="description before">{before}</div>}
			<div className="exampleSwitch">
				<Button
					onClick={() => {
						setTextExampleOpen(true);
					}}
					active={textExampleOpen}
					type="primary">
					Code
				</Button>
				<Button
					onClick={() => {
						setTextExampleOpen(false);
					}}
					active={!textExampleOpen}
					type="primary">
					Preview
				</Button>
			</div>
			<div className="exampleHolder">
				{(textExampleOpen && (
					<pre className="example codeExample language-markup">
						{codeExample}
					</pre>
				)) || <div className="example itemExample">{item}</div>}
			</div>
			{after && <div className="description after">{after}</div>}
		</div>
	);
};

export default DocumentationComp;
