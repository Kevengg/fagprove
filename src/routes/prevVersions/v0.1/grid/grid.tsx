import { FC } from "react";
import DocumentationComp from "src/components/documentationComp/documentationComp";
import { Col, Grid } from "frno-react_0-1";
import CustomProps from "src/components/customProps/customProps";

const GridDoc: FC = () => (
	<div>
		<DocumentationComp
			description={{
				before: (
					<>
						<p>
							We added a grid component that makes it easy to work
							with the layout of the page. The grid is often used
							within a section.
						</p>
						<p>
							The grid component has a default mt class of mt-7.
							If you want to change this, you can pass this in the
							mt property
						</p>
					</>
				),
				after: (
					<>
						To add columns to the grid you can use the Col
						component. This component will default to col-4
						col-md-12, but you can overwrite this if you want. For
						example, this will generate a grid consisting of 3
						columns on all screen sizes except for md and below,
						which will render it as one column per row.
					</>
				),
			}}
			title="Grid"
			headerType="h1"
			item={
				<Grid mt={5}>
					<Col>...</Col>
					<Col>...</Col>
					<Col>...</Col>
				</Grid>
			}
			codeExample={`<Grid>
    <Col>...</Col>
    <Col>...</Col>
    <Col>...</Col>
</Grid>`}
		/>
		<CustomProps
			props={{
				mt: {
					type: "number",
					description: "Margin top spacing",
					default: "7",
				},
				className: {
					type: "string",
					description: "The class name to apply to the grid",
				},
			}}
		/>
	</div>
);

export default GridDoc;
