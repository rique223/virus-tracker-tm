import './App.css';
import { Box, Container, Center } from "@chakra-ui/react";
import TextBox from '../TextBox/TextBox';
import NavBar from '../NavBar/NavBar';
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

import React, { FunctionComponent, ReactElement } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import TextCity from '../TextCity/TextCity';

const theme: FunctionComponent = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    mono: "Roboto, sans-serif",
  },
})

const App: React.FC = (): ReactElement => {
  return (
    <ChakraProvider theme={theme}>
        <Container maxW="100%" m={0} p={0} maxH="100%">
          <Box bg="#5CDB96" w="100%" maxH="40%" h="40%" p={2} color="White">
            <NavBar></NavBar>
            <Searchbar />
            <TextCity />
          </Box>
          
          <Box bg="#EAEFEC" w="100%" maxH="60%" h="60%" p={0} color="#20481E" alignItems="center">
            <Center color="#20481E" h="100%">
              <TextBox />
            </Center>
          </Box>
        </Container>
    </ChakraProvider>
  );
}

export default App;
