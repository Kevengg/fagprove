import DocumentationComp from "src/components/documentationComp/documentationComp";
import { Col } from "frno-react";
import CustomProps from "src/components/customProps/customProps";
import { FC } from "react";

/**
 * Draws the documentation page for the Col component
 */
const ColDoc: FC = () => (
	<>
		<DocumentationComp
			itemName="Col"
			description={{
				before: "The col component easily adds a div divided into set columns.",
			}}
			item={
				<Col
					md={6}
					xs={12}>
					hello
				</Col>
			}
			codeExample={`<Col
    md={6}
    xs={12}>
    hello
</Col>`}
		/>

		<CustomProps
			props={{
				mt: {
					type: "number",
					description: "Margin top",
					default: "7",
				},
				span: {
					type: "number",
					description: "Number of columns to span",
					default: "4",
				},
				xl: {
					type: "number",
					description:
						"Number of columns to span on extra large devices",
				},
				lg: {
					type: "number",
					description: "Number of columns to span on large devices",
				},
				md: {
					type: "number",
					description: "Number of columns to span on medium devices",
					default: "12",
				},
				sm: {
					type: "number",
					description: "Number of columns to span on small devices",
				},
				xs: {
					type: "number",
					description:
						"Number of columns to span on extra small devices",
				},
				className: {
					type: "string",
					description: "Class name for the component",
				},
			}}
		/>
	</>
);
export default ColDoc;
