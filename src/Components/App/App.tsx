import "./App.css";
import { Box, Container, Center } from "@chakra-ui/react";
import TextBox from "../textBox/TextBox";
import NavBar from "../navBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import React, { FunctionComponent, ReactElement, useState } from "react";
import Searchbar from "../searchBar/Searchbar";
import apiCNPJ from "../../api/covidAPI";
import { NOMEM } from "dns";

const App: React.FC = (): ReactElement => {
  const [covidData, setCovidData] = useState({} as Models.CovidData);

  const theme: FunctionComponent = extendTheme({
    fonts: {
      body: "Roboto, sans-serif",
      heading: "Roboto, sans-serif",
      mono: "Roboto, sans-serif",
    },
  });

  // Function that executes the GET REQUEST to the API.
  // This function is passed as a property to the searchbar component.
  const searchCOVID = async (city: string) => {
    try {
      const {
        data: { results },
      } = await apiCNPJ.get(
        `/dataset/covid19/caso_full/data?city=${city}&is_last=True`
      );

      setCovidData(results[0]);

      console.log(covidData);
    } catch (err) {
      console.log("Ops, algo deu errado", err);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="100%" m={0} p={0} h="100%">
        <Box bg="#5CDB96" w="100%" h="40%" p={2} color="White">
          <NavBar></NavBar>
          <Searchbar searchCOVID={searchCOVID} />
        </Box>

        <Box
          bg="#EAEFEC"
          w="100%"
          h="60%"
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
