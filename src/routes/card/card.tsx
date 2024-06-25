import DocumentationComp from "../../components/documentationComp/documentationComp";
import { Card } from "frno-react";
import CustomProps from "../../components/customProps/customProps";
import { FC } from "react";

const CardDoc: FC = () => {
	return (
		<>
			<DocumentationComp
				item={
					<Card
						title="Title of card"
						text="Description of card."
						bg="navy-100"
						href="#"
					/>
				}
				itemName="Card"
				codeExample={`<Card
	title="Title of card"
	text="Description of card."
	bg="navy-10"
	href="#"
/>`}
				description={{
					before: (
						<>
							The Card component can be used to generate cards
							with and without links. You have to specify a title
							prop, but you can also add other props to change how
							the card looks. The default card will use cyan-20 as
							the background color. If you want to change this,
							you can pass in a bg prop with the value of the
							background you wan to use (see
							<a target="https://components.forbrukerradet.no/foundation.html#colors">
								colors
							</a>
							).
						</>
					),
				}}
			/>

			<DocumentationComp
				itemName="Card with icon"
				headerId="card-with-icon"
				item={
					<Card
						title="Title of card"
						text="Description of card."
						icon="fa-house"
						onClick={(e) => {
							(e.target as Element).classList.toggle("test");
						}}
					/>
				}
				codeExample={`<Card
	title="Title of card"
	text="Description of card."
	icon="fa-house"
	onClick={() => {(e.target as Element).classList.toggle("test")}}
/>`}
				description={{
					before: (
						<>
							You can also add an icon to the card. Please note
							that the only icons currently supported are font
							awesome. We might support other icons in the future,
							but for now you will have to use font awesome as the
							icon font. All font awesome icons are using the
							fa-regular font.
						</>
					),
				}}
			/>
			<DocumentationComp
				itemName="Small card"
				headerId="small-card"
				item={
					<Card
						title="Title of card"
						text="Description of card."
						small={true}
						onClick={(e) => {
							(e.target as Element).classList.toggle("test");
						}}
					/>
				}
				codeExample={`<Card
	title="Title of card"
	text="Description of card."
	small={true}
	onClick={(e) => {
		(e.target as Element).classList.toggle("test");
	}}
/>`}
				description={{
					before: (
						<>
							You can also add an icon to the card. Please note
							that the only icons currently supported are font
							awesome. We might support other icons in the future,
							but for now you will have to use font awesome as the
							icon font. All font awesome icons are using the
							fa-regular font.
						</>
					),
				}}
			/>

			<CustomProps
				props={{
					title: {
						type: "string",
						description: "Title of the card.",
					},
					titleSize: {
						type: ["fs-h4", "fs-h3", "fs-h2", "fs-body"],
						default: "fs-h3",
						description: "Size of the title.",
					},
					tag: {
						type: ["h1", "h2", "h3", "h4", "h5", "h6"],
						default: "h2",
						description: "HTML tag for the title.",
					},
					text: {
						type: "string",
						description: "Description of the card.",
					},
					submit: {
						type: "boolean",
						description: "If the card is a submit button.",
					},
					onClick: {
						type: "( ) => void",
						description: "Function to run on click.",
					},
					bg: {
						type: [
							"brand-primary",
							"brand-secondary",
							"white",
							"black-100",
							"black-80",
							"black-60",
							"black-40",
							"black-20",
							"black-10",
							"navy-100",
							"navy-80",
							"navy-60",
							"navy-40",
							"navy-20",
							"navy-10",
							"teal-100",
							"teal-80",
							"teal-60",
							"teal-40",
							"teal-20",
							"teal-10",
							"cyan-100",
							"cyan-80",
							"cyan-60",
							"cyan-40",
							"cyan-20",
							"cyan-10",
							"yellow-100",
							"yellow-80",
							"yellow-60",
							"yellow-40",
							"yellow-20",
							"yellow-10",
							"orange-100",
							"orange-80",
							"orange-60",
							"orange-40",
							"orange-20",
							"orange-10",
							"green-100",
							"green-80",
							"green-60",
							"green-40",
							"green-20",
							"green-10",
							"danger",
							"warning",
							"success",
						],
						default: "cyan-20",
						description: "Background color of the card.",
					},
					href: {
						type: "string",
						description: "Link for the card.",
					},
					target: {
						type: "string",
						description: "Target for the link.",
					},
					icon: {
						type: "string",
						description: "Icon for the card.",
					},
					small: {
						type: "boolean",
						description: "If the card is small.",
						default: "false",
					},
					className: {
						type: "string",
						description: "Class name for the card.",
					},
					closeable: {
						type: {
							onClose: {
								type: "( ) => void",
								description: "Function to run on close.",
							},
							ariaLabelText: {
								type: "string",
								description: "Aria label text.",
							},
						},
						description: "Closeable card configuration.",
					},
				}}
			/>
		</>
	);
};

export default CardDoc;
