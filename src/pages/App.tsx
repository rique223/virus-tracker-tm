import React, { ReactElement, SetStateAction } from "react";
import {
	Box,
	Container,
	SlideFade,
	useDisclosure,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useState } from "react";

import Searchbar from "../components/Searchbar";
import TextCity from "../components/TextCity";
import TextBox from "../components/TextBox";
import NavBar from "../components/NavBar";
import { get } from "../api/services/covidService";
import DataCard from "../components/DataCard";

const App = (): ReactElement => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [covidData, setCovidData] = useState({} as Models.Result);
	const [showDataCard, setShowDataCard] = useState(false);

	const theme = extendTheme(
		{
			fonts: {
				body: "Roboto, sans-serif",
				heading: "Roboto, sans-serif",
				mono: "Roboto, sans-serif",
			},
		}
	);

	// Function that executes the GET REQUEST to the API.
	// This function is passed as a property to the searchbar component.
	const searchCOVID = async (city: string): Promise<void> => {
		try {
			onClose();

			if (!city) {
				setCovidData({} as Models.Result);
				return;
			}

			const { status, data } = await get(city);

			if (status && data && data.results && status === 200) {
				setCovidData(data.results[0] ? data.results[0] : ({} as Models.Result));
				setShowDataCard(true);
			} else {
				setShowDataCard(false);
			}

			onOpen();
		} catch (error) {
			console.log('Ops, ocorreu um erro: ', error);
		}
	};

	return (
		<ChakraProvider theme={theme}>
			<Container maxW="100%" m={0} p={0} h="100%">
				<Box bg="#5CDB96" w="100%" h={showDataCard ? "auto" : "40%"} p={2} color="White">
					<NavBar
						setCovidData={(covidData: Models.Result) => setCovidData(covidData)}
						setShowDataCard={(showDataCard: SetStateAction<boolean>) => setShowDataCard(showDataCard)}
					/>
					<Searchbar searchCOVID={searchCOVID} />
					{Object.keys(covidData).length === 0 ? null : (
						<SlideFade offsetY="20px" in={isOpen}>
							<TextCity covidData={covidData} />
						</SlideFade>
					)}
				</Box>

				{showDataCard ?
					Object.keys(covidData).length === 0 ?
						null :
						(
							<DataCard covidData={covidData} />
						) : <TextBox />
				}
			</Container>
		</ChakraProvider>
	);
};

export default App;
