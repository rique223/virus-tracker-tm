import { Tooltip, Link } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const menuIcon = (props: {
	href: string;
	label: string;
	icon: ReactElement;
}) => {
	return (
		<Tooltip label={props.label} aria-label="Um tooltip" placement="auto">
			<Link href={props.href} mt={3} fontWeight="hairline">
				{props.icon}
			</Link>
		</Tooltip>
	);
};

export default menuIcon;
