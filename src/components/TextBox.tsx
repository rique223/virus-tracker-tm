import { Center, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

import React from "react";

const TextBox: React.FC = (): ReactElement => {
	return (
		<Center
			maxW="100%"
			flexWrap="wrap"
			color="#20481E"
			bg="#EAEFEC"
			w="100%"
			h="60%"
			p={0}
		>
			<Text
				bgClip="text"
				fontSize="2.03rem"
				color="#20481E"
				fontWeight="bold"
				textAlign="center"
				px="4%"
				lineHeight="35px"
			>
				O TheVirusTracker™ pretende trazer praticidade para a visualização de
				dados relacionados à pandemia de Corona Vírus no Brasil: Digite o nome
				de uma cidade brasileira acima e serão retornadas as principais
				estatísticas relacionadas ao avanço do Sars-CoV-2 neste local.
			</Text>
		</Center>
	);
};

export default TextBox;
