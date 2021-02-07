import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

import React from "react";

const TextBox: React.FC = (): ReactElement => {
	return (
		<Box
			maxW="100%"
			d="flex"
			position="relative"
			justifyContent="center"
			flexWrap="wrap"
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
		</Box>
	);
};

export default TextBox;
