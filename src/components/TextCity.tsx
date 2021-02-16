import { Center, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

import React from "react";

interface Props {
	covidData: Models.Result;
}

const TextCity: React.FC<Props> = ({ covidData }): ReactElement => {
	return (
		<Center d="flex" maxW="100%" h="8%" flexDirection="column">
			<Text
				fontSize="5rem"
				color="#fff"
				fontWeight="bold"
				textShadow="1px 1px 5px gray"
			>
				{covidData.city}, {covidData.state}
			</Text>

			<Text
				fontSize="2.5rem"
				color="#fff"
				fontWeight="bold"
				textShadow="1px 1px 5px gray"
			>
				População: {covidData.estimated_population.toLocaleString()}
			</Text>
		</Center>
	);
};

export default TextCity;
