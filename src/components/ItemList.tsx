import React, { ReactElement } from "react";

import { ListItem, Center, Text, Link } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";

const ItemList = (props: {
	name: string;
	icon: ReactElement;
	route: string;
}) => {
	return (
		<ListItem listStyleType="none" _hover={{ backgroundColor: "#cccccc" }}>
			<Center w="100%" h="4rem">
				<Link
					as={ReactRouterLink}
					to={props.route}
					_hover={{
						textDecoration: "none",
					}}
					w="100%"
					h="100%"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Text
						textTransform="uppercase"
						color="#20481E"
						fontSize="20px"
						fontWeight="hairline"
					>
						{props.icon}
						&nbsp;
						{props.name}
					</Text>
				</Link>
			</Center>
		</ListItem>
	);
};

export default ItemList;
