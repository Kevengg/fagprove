// from modules
import { FC } from "react";

// custom
import { Button } from "frno-react";
import CustomProps from "../../components/customProps/customProps";
import DocumentationComp from "../../components/documentationComp/documentationComp";

/**
 * draws the documentation page for the Button component
 */
const ButtonDoc: FC = () => (
	<>
		<DocumentationComp
			item={
				<Button
					onClick={(e) =>
						(e.target as Element).classList.toggle("test")
					}
					type="primary">
					Test button
				</Button>
			}
			itemName={"Button"}
			codeExample={`<Button
    onClick={(e) => (e.target as Element).classList.toggle("test")}
    type="primary">
    Test button
</Button>`}
			description={{
				before: (
					<>
						You can add buttons to your application by utilizing the
						Button component. The Button component supports icons,
						different background colors, and can be rendered as both
						an a tag and a normal button, making use of the onClick
						trigger if specified.
					</>
				),
			}}
		/>
		<DocumentationComp
			item={
				<Button
					icon="fa-arrow-up-right-from-square"
					href="#"
					target="_blank">
					Lorem ipsum
				</Button>
			}
			itemName={"Icon Button"}
			headerId="icon-button"
			codeExample={`<Button
    icon="fa-arrow-up-right-from-square"
    href="#"
    target="_blank">
    Lorem ipsum
</Button>`}
			description={{
				before: (
					<>
						To add an icon to the button you can use the icon prop.
						Please note that the only icons currently supported are
						font awesome. We might support other icons in the
						future, but for now you will have to use font awesome as
						the icon font. All font awesome icons are using the
						fa-regular font.
					</>
				),
			}}
		/>
		<DocumentationComp
			item={
				<Button
					type="featured"
					onClick={(e) =>
						(e.target as Element).classList.toggle("test")
					}>
					Lorem ipsum
				</Button>
			}
			itemName={"Types of buttons"}
			headerId="types-of-buttons"
			codeExample={`<Button
    type="featured"
    onClick={(e) =>
        (e.target as Element).classList.toggle("test")
    }>
    Lorem ipsum
</Button>`}
			description={{
				before: (
					<>
						You can change the look of your button by passing in a
						type prop. This prop can be default, primary, secondary,
						featured and chip.
					</>
				),
			}}
		/>
		<DocumentationComp
			item={
				<Button
					icon="fa-arrow-up-right-from-square"
					active={true}
					submit={true}
					onClick={(e) =>
						(e.target as Element).classList.toggle("test")
					}>
					Lorem ipsum
				</Button>
			}
			itemName={"Active and submit buttons"}
			headerId="active-and-submit-buttons"
			codeExample={`<Button
    icon="fa-arrow-up-right-from-square"
    active={true}
    submit={true}
    onClick={(e) =>
        (e.target as Element).classList.toggle("test")
    }>
    Lorem ipsum
</Button>`}
			description={{
				before: (
					<>
						We've also added helper props that can be used to either
						set the button to active (add is-active class), and/or
						change the button type to submit. All you need to do is
						pass it into the active and submit props, both of whom
						are boolean. The submit prop will only work if the
						button is generated as a button, meaning that it will be
						ignored if you pass in an href prop.
					</>
				),
			}}
		/>
		<CustomProps
			props={{
				type: {
					type: [
						'"default"',
						'"primary"',
						'"secondary"',
						'"featured"',
						'"chip"',
					],
					default: '"default"',
					description: "Type of the button",
				},
				active: {
					type: "boolean",
					description: "Set true for active button",
				},
				disabled: {
					type: "boolean",
					description: "Set true for disabled button",
				},
				submit: {
					type: "boolean",
					description: "Set true for submit button",
				},
				onClick: {
					type: "( e:React.MouseEvent )=>void",
					description:
						"Pass the function that will be called on click",
				},
				href: {
					type: "string",
					description: "Pass the URL that will be open on click",
				},
				target: {
					type: ["_blank", "_self", "_parent", "_top"],
					description: "Set href target ",
				},
				icon: {
					type: "string",
					description: (
						<>
							Set the icon class, take a look at{" "}
							<a
								href="https://fontawesome.com/search"
								target="_blank"
								rel="noreferrer noopener">
								font-awesome 6
							</a>
						</>
					),
				},
				className: {
					type: "string",
					description: "Pass additional class to the button",
				},
			}}
		/>
	</>
);
export default ButtonDoc;
