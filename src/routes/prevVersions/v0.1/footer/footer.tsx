import { FC } from "react";
import { Footer } from "frno-react_0-1";
import CustomProps from "src/components/customProps/customProps";
import DocumentationComp from "src/components/documentationComp/documentationComp";

const FooterDoc: FC = () => {
	return (
		<div>
			<DocumentationComp
				item={
					<Footer
						links={[
							[
								{
									url: "#",
									title: "Om Forbrukerrådet",
									classList: "heading",
								},
								{
									url: "#",
									title: "Lorem ipsum",
									classList: "",
								},
								{
									url: "#",
									title: "Dolor sit amet",
									classList: "",
								},
							],
							[
								{
									url: "#",
									title: "Om Forbrukerrådet",
									classList: "heading",
								},
								{
									url: "#",
									title: "Lorem ipsum",
									classList: "",
								},
								{
									url: "#",
									title: "Dolor sit amet",
									classList: "",
								},
							],
							[
								{
									url: "#",
									title: "Om Forbrukerrådet",
									classList: "heading",
								},
								{
									url: "#",
									title: "Lorem ipsum",
									classList: "",
								},
								{
									url: "#",
									title: "Dolor sit amet",
									classList: "",
								},
							],
						]}
						social={[
							{
								url: "#",
								target: "_blank",
								aria: {
									label: "Lorem ipsum",
								},
								icon: "fbr-icon-facebook",
							},
							{
								url: "#",
								target: "_blank",
								aria: {
									label: "Lorem ipsum",
								},
								icon: "fbr-icon-twitter",
							},
							{
								url: "#",
								target: "_blank",
								aria: {
									label: "Lorem ipsum",
								},
								icon: "fbr-icon-instagram",
							},
							{
								url: "#",
								target: "_blank",
								aria: {
									label: "Lorem ipsum",
								},
								icon: "fbr-icon-linkedin",
							},
							{
								url: "#",
								target: "_blank",
								aria: {
									label: "Lorem ipsum",
								},
								icon: "fbr-icon-podcast",
							},
							{
								url: "#",
								target: "_blank",
								aria: {
									label: "Lorem ipsum",
								},
								icon: "fbr-icon-mail",
							},
							{
								url: "#",
								target: "_blank",
								aria: {
									label: "Lorem ipsum",
								},
								icon: "fbr-icon-rss",
							},
						]}
					/>
				}
				codeExample={`<Footer
    links={[
        [
            {
                url: "#",
                title: "Om Forbrukerrådet",
                classList: "heading",
            },
            {
                url: "#",
                title: "Lorem ipsum",
                classList: "",
            },
            {
                url: "#",
                title: "Dolor sit amet",
                classList: "",
            },
        ],
        [
            {
                url: "#",
                title: "Om Forbrukerrådet",
                classList: "heading",
            },
            {
                url: "#",
                title: "Lorem ipsum",
                classList: "",
            },
            {
                url: "#",
                title: "Dolor sit amet",
                classList: "",
            },
        ],
        [
            {
                url: "#",
                title: "Om Forbrukerrådet",
                classList: "heading",
            },
            {
                url: "#",
                title: "Lorem ipsum",
                classList: "",
            },
            {
                url: "#",
                title: "Dolor sit amet",
                classList: "",
            },
        ],
    ]}
    social={[
        {
            url: "#",
            target: "_blank",
            aria: {
                label: "Lorem ipsum",
            },
            icon: "fbr-icon-facebook",
        },
        {
            url: "#",
            target: "_blank",
            aria: {
                label: "Lorem ipsum",
            },
            icon: "fbr-icon-twitter",
        },
        {
            url: "#",
            target: "_blank",
            aria: {
                label: "Lorem ipsum",
            },
            icon: "fbr-icon-instagram",
        },
        {
            url: "#",
            target: "_blank",
            aria: {
                label: "Lorem ipsum",
            },
            icon: "fbr-icon-linkedin",
        },
        {
            url: "#",
            target: "_blank",
            aria: {
                label: "Lorem ipsum",
            },
            icon: "fbr-icon-podcast",
        },
        {
            url: "#",
            target: "_blank",
            aria: {
                label: "Lorem ipsum",
            },
            icon: "fbr-icon-mail",
        },
        {
            url: "#",
            target: "_blank",
            aria: {
                label: "Lorem ipsum",
            },
            icon: "fbr-icon-rss",
        },
    ]}
/>`}
				description={{
					before: (
						<>
							You can add a footer to your pages by using the
							Footer component. This component makes use of the
							links and social props. These props needs to be of
							the type array. You can also overwrite the default
							number of columns which is 3 to a value of between 1
							and 4.
						</>
					),
				}}
				headerType="h1"
				title="Footer"
			/>
			<CustomProps
				props={{
					columns: {
						type: "number",
						description: "Number of columns for layout",
						default: "3",
					},
					links: {
						type: "LinkProps[][]",
						description: "Array of links to display in the footer",
					},
					social: {
						type: "SocialLinkProps[]",
						description:
							"Array of social media icon objects to display in the footer",
					},
					className: {
						type: "string",
						description: "The class name to apply to the footer",
					},
				}}
			/>
		</div>
	);
};

export default FooterDoc;
