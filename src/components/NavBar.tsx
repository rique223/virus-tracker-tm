import { Box, Flex, Spacer, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

import { Link as ReactRouterLink } from "react-router-dom";

import React, { ReactElement, SetStateAction } from "react";

interface Props {
	setCovidData: (covidData: Models.Result) => void
	setShowDataCard: (showDataCard: SetStateAction<boolean>) => void
}

const NavBar: React.FC<Props> = ({ setCovidData, setShowDataCard }): ReactElement => {
	const cleanse = () => {
		setCovidData({} as Models.Result);
		setShowDataCard(false);
	}

	return (
		<Flex>
			<Box
				p="4"
				onClick={cleanse}
			>
				<Link
					as={ReactRouterLink}
					to="/"
					_hover={{ textDecoration: "none" }}
					_focus={{ boxShadow: "none" }}
				>
					<Text fontSize="32px">
						<FontAwesomeIcon icon={faVirus} size="lg" />
						TheVirusTracker™
					</Text>
				</Link>
			</Box>

			<Spacer />

			<Box p="4">
				<Menu />
			</Box>
		</Flex>
	);
};

export default NavBar;
