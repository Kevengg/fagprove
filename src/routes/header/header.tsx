import { FC } from "react";
import DocumentationComp from "src/components/documentationComp/documentationComp";
import { Button, Header } from "frno-react";
import CustomProps from "src/components/customProps/customProps";

const HeaderDoc: FC = () => (
	<div>
		<DocumentationComp
			title="Header"
			headerType="h1"
			description={{
				before: (
					<>
						The Header component is used to list the logo, and a
						menu, as well as a possible search icon. The small logo
						is generally an icon that is used on mobile screens to
						ensure the header has enough space for it.
					</>
				),
				after: (
					<>
						You can pass in menu elements as buttons, and use
						onClick or href to link them to specific pages.
					</>
				),
			}}
			item={
				<Header
					logo={
						"https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo.svg"
					}
					logoSmall={
						"https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo_symbol.svg"
					}
					logoAlt="Alternative text for logo">
					<Button
						onClick={(e) =>
							(e.target as Element).classList.toggle("test")
						}
						type="primary">
						Test button
					</Button>
				</Header>
			}
			codeExample={`<Header
    logo={
        "https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo.svg"
    }
    logoSmall={
        "https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo_symbol.svg"
    }
    logoAlt="Alternative text for logo">
    <Button
		onClick={(e) =>
			(e.target as Element).classList.toggle("test")
		}
		type="primary">
		Test button
	</Button>
</Header>`}
		/>
		<DocumentationComp
			title="Changing texts"
			description={{
				before: (
					<>
						If you want to overwrite the values in the search or
						menu elements you can use the searchTerm and
						expandableMenuTerm props.
					</>
				),
			}}
			item={
				<Header
					logo={
						"https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo.svg"
					}
					logoSmall={
						"https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo_symbol.svg"
					}
					logoAlt="Alternative text for logo"
					searchTerm="Text in search button"
					expandableMenuTerm="Text in expandable menu button">
					...
				</Header>
			}
			codeExample={`<Header
	logo={
		"https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo.svg"
	}
	logoSmall={
		"https://www.forbrukerradet.no/wp-content/themes/frweb22/dist/forbrukerradet_logo_symbol.svg"
	}
	logoAlt="Alternative text for logo"
	searchTerm="Text in search button"
	expandableMenuTerm="Text in expandable menu button">
	...
</Header>`}
		/>

		<CustomProps
			props={{
				logo: {
					type: "string (href)",
					description: "Logo element or component",
				},
				logoSmall: {
					type: "string (href)",
					description: "Small version of the logo",
				},
				logoAlt: {
					type: "string",
					description: "Alt text for the logo",
					default: `"Forbrukerrådet logo"`,
				},
				homeLink: {
					type: "string (url)",
					description: "URL for the home link",
					default: `"./"`,
				},
				showSearch: {
					type: "boolean",
					description: "Toggle for displaying the search component",
					default: "true",
				},
				searchAction: {
					type: "string (url)",
					description: "URL for the search action",
					default: `"https://www.forbrukerradet.no"`,
				},
				searchTerm: {
					type: "string",
					description: "Text for the search input placeholder",
					default: `"Søk"`,
				},
				showExpandableMenu: {
					type: "boolean",
					description: "Toggle for displaying the expandable menu",
					default: "true",
				},
				expandableMenuTerm: {
					type: "string",
					description: "Text for the expandable menu button",
					default: `"Meny"`,
				},
				expandableMenuColumns: {
					type: "array",
					description:
						"An array of objects representing menu columns",
				},
				className: {
					type: "string",
					description: "Class name for the header",
				},
			}}
		/>
	</div>
);

export default HeaderDoc;
