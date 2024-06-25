// from modules
import classNames from "classnames";
import { FC, HTMLAttributes, ReactNode, useState } from "react";
import "./customProps.scss";

/**
 * defines the props for the CustomProps component
 */
type CustomPropsProps = {
	// arbitrary object name
	[key: string]: {
		// type of the prop
		type:
			| CustomPropsProps
			| string
			| number
			| boolean
			| (CustomPropsProps | number | string)[];
		// default value of the prop
		default?: string;
		// description of the prop
		description: ReactNode;
	};
};

/**
 * draws the part of a documentation page that describes the item's custom props
 */
const CustomProps: FC<
	{
		props: CustomPropsProps;
		HTMLAttributes?: string;
	} & HTMLAttributes<HTMLDivElement>
> = ({ props, HTMLAttributes, ...rest }) => {
	return (
		<div className="customPros">
			<h3
				id="props"
				className={"mb-5"}>
				<span>Props</span>
				<i className="fa-regular fa-link"></i>
			</h3>
			<div className="extends">
				<h3 className=" fs-h4 ">Extends:</h3>{" "}
				<span className={classNames({ none: !HTMLAttributes })}>
					{HTMLAttributes || "None"}
				</span>
			</div>
			<h4 className="fs-h4 tableH">Custom Props</h4>
			<table {...rest}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(props).map(([key, value]) => (
						<Item
							key={key}
							name={key}
							value={value}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

const EnumItem: FC<{ value: string | number }> = ({ value }) => {
	return (
		<tr className="tableItem">
			<td>{value}</td>
			<td>{typeof value}</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	);
};

const Item: FC<{ name: string; value: CustomPropsProps["key"] }> = ({
	name,
	value,
}) => {
	const [objectOpen, setObjectOpen] = useState(false);
	return (
		<>
			<tr className="tableItem">
				<td>{name}</td>
				<td
					onClick={() =>
						typeof value.type === "object" &&
						setObjectOpen(!objectOpen)
					}
					className={classNames({
						object: typeof value.type === "object",
					})}>
					{typeof value.type === "object"
						? value.type.length
							? "enum"
							: "object"
						: value.type}
				</td>
				<td
					className={classNames({
						undefined: value.default === undefined,
					})}>
					{value.default || "Undefined"}
				</td>
				<td>{value.description}</td>
				<td>
					{typeof value.type === "object" && (
						<i className="fa-regular fa-chevron-down"></i>
					)}
				</td>
			</tr>
			<tr className={classNames({ open: objectOpen }, "dropDown")}>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{typeof value.type === "object" &&
							Object.entries(value).map(([key, value]) => {
								if (value) {
									if (
										typeof value === "object" &&
										[value as []].length
									) {
										(value as (string | number)[]).map(
											(val, key) => (
												<EnumItem
													value={
														val as string | number
													}
													key={key}
												/>
											),
										);
									}
									return (
										<Item
											key={key}
											name={key}
											value={
												value as unknown as CustomPropsProps["key"]
											}
										/>
									);
								}
							})}
					</tbody>
				</table>
			</tr>
		</>
	);
};

export default CustomProps;
