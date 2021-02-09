import { Box, Text, Center, Wrap } from "@chakra-ui/react";
import { ReactElement } from "react";

import React from "react";

const CardData: React.FC = (): ReactElement => {
  return (
    <Box
      maxW="1318px"
      width="100%"
      maxH="541px"
      height="100%"
      borderRadius="10px"
      m="10"
      bg="#F8FAF9"
      boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.25), -2px -2px 4px 2px rgba(0, 0, 0, 0.25)"
      d="flex"
      flexDirection="column"
      flexWrap="wrap"
    >
      <Center
        w="100%"
        h="70%"
        d="flex"
        flexDirection="column"
        flexWrap="wrap"
        borderBottom="1px solid #BBBBBB"
      >
        <Text
          fontWeight="300"
          fontSize="3.125rem"
          lineHeight="59px"
          color="#1E4730"
          marginTop="34px"
        >
          {" "}
          Casos confirmados
        </Text>
        <Text
          fontWeight="bold"
          fontSize="6.25rem"
          lineHeight="117px"
          color="#459B41"
          my="34px"
        >
          {" "}
          79.265
        </Text>
        <Text
          fontWeight="300"
          fontSize="3.125rem"
          lineHeight="59px"
          color="#1E4730"
          marginBottom="34px"
        >
          {" "}
          Em 31/12/2020
        </Text>
      </Center>
      <Box
        w="100%"
        h="30%"
        d="flex"
        flexDirection="row"
        color="#459B41"
        flex="auto"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Center
          w="35%"
          m="0"
          pos="relative"
          d="flex"
          flexDirection="column"
          borderRight="1px solid #BBBBBB"
        >
          <Text
            fontStyle="normal"
            fontWeight="300"
            fontSize="1.813rem"
            lineHeight="33px"
            textColor="#1E4730"
          >
            Casos por 100mil habitantes
          </Text>
          <Text>5.160,1559</Text>
        </Center>
        <Center
          w="30%"
          bg="green.200"
          mx="4px"
          pos="relative"
          d="flex"
          flexDirection="column"
        >
          <Text>Número de mortes</Text>
          <Text>2.073</Text>
        </Center>
        <Center
          w="30%"
          bg="tomato"
          m="0"
          pos="relative"
          d="flex"
          flexDirection="column"
        >
          <Text>Novos casos</Text>
          <Text>157</Text>
        </Center>
      </Box>
    </Box>
  );
};

export default CardData;
