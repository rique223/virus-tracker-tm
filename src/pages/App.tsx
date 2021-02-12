import React, { ReactElement } from "react";
import { Box, Container, Center } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useState } from "react";
import apiCNPJ from "../api/covidAPI";

import Searchbar from "../components/Searchbar";
import TextCity from "../components/TextCity";
import TextBox from "../components/TextBox";
import NavBar from "../components/NavBar";

const App = (): ReactElement => {
	const [covidData, setCovidData] = useState({} as Models.Result);

	const theme = extendTheme({
		fonts: {
			body: "Roboto, sans-serif",
			heading: "Roboto, sans-serif",
			mono: "Roboto, sans-serif",
		},
	});

	// Function that executes the GET REQUEST to the API.
	// This function is passed as a property to the searchbar component.
	const searchCOVID = async (city: string): Promise<void> => {
		try {
			const {
				data: { results },
			} = await apiCNPJ.get<Models.RootObject>(
				`/dataset/covid19/caso_full/data?city=${city}&is_last=True`
			);

			setCovidData(results ? results[0] : ({} as Models.Result));

			console.log(covidData);
		} catch (err) {
			console.log("Ops, algo deu errado", err);
			throw err;
		}
	};

	return (
		<ChakraProvider theme={theme}>
			<Container maxW="100%" m={0} p={0} h="100%">
				<Box bg="#5CDB96" w="100%" h="50%" p={2} color="White">
					<NavBar />
					<Searchbar searchCOVID={searchCOVID} />
					<TextCity />
				</Box>

				<Box
					bg="#EAEFEC"
					w="100%"
					h="50%"
					p={0}
					color="#20481E"
					alignItems="center"
				>
					<Center color="#20481E" h="100%">
						<TextBox />
					</Center>
				</Box>
			</Container>
		</ChakraProvider>
	);
};

export default App;
