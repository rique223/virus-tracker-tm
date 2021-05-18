import { Box, Center, Grid, GridItem, Text } from "@chakra-ui/react";

import React from 'react';
import { ReactElement } from "react";

interface Props {
  covidData: Models.Result;
}

const DataCard: React.FC<Props> = ({ covidData }): ReactElement => {
  return (
    <Center
      maxW="100%"
      flexWrap="wrap"
      color="#20481E"
      bg="#EAEFEC"
      w="100%"
      h="59%"
      p={0}
    >
      <Box
        bg="#F8FAF9"
        boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.25), -2px -2px 4px 2px rgba(0, 0, 0, 0.25)"
        borderRadius="10px"
        h="500px"
        w="68.75%"
      >
        <Grid
          h="100%"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={1}
        >
          <GridItem
            rowSpan={2}
            colSpan={6}
            borderBottom="1px solid #BBBBBB"
          >
            <Center
              h="100%"
              w="100%"
              flexDirection="column"
            >
              <Text
                fontWeight="300"
                fontSize="50px"
                lineHeight="59px"
                color="#1E4730"
                marginBottom="25px"
              >
                Casos confirmados
              </Text>

              <Text
                fontWeight="bold"
                fontSize="100px"
                lineHeight="117px"
                color="#459B41"
                marginBottom="25px"
              >
                {covidData.last_available_confirmed.toLocaleString()}
              </Text>

              <Text
                fontWeight="300"
                fontSize="50px"
                lineHeight="59px"
                color="#1E4730"
              >
                EM {covidData.date}
              </Text>
            </Center>
          </GridItem>

          <GridItem
            rowSpan={1}
            colSpan={2}
            borderRight="1px solid #BBBBBB"
          >
            <Center
              h="100%"
              w="100%"
              flexDirection="column"
            >
              <Text
                fontWeight="300"
                fontSize="28px"
                lineHeight="33px"
                color="#1E4730"
                marginBottom="21px"
              >
                Casos por 100mil habitantes
              </Text>

              <Text
                fontWeight="bold"
                fontSize="40px"
                lineHeight="47px"
                color="#459B41"
              >
                {covidData.last_available_confirmed_per_100k_inhabitants}
              </Text>
            </Center>
          </GridItem>

          <GridItem
            rowSpan={1}
            colSpan={2}
            borderRight="1px solid #BBBBBB"
          >
            <Center
              h="100%"
              w="100%"
              flexDirection="column"
            >
              <Text
                fontWeight="300"
                fontSize="28px"
                lineHeight="33px"
                color="#1E4730"
                marginBottom="21px"
              >
                Número de mortes
              </Text>

              <Text
                fontWeight="bold"
                fontSize="40px"
                lineHeight="47px"
                color="#459B41"
              >
                {covidData.last_available_deaths.toLocaleString()}
              </Text>
            </Center>
          </GridItem>

          <GridItem
            rowSpan={1}
            colSpan={2}
          >
            <Center
              h="100%"
              w="100%"
              flexDirection="column"
            >
              <Text
                fontWeight="300"
                fontSize="28px"
                lineHeight="33px"
                color="#1E4730"
                marginBottom="21px"
              >
                Novos casos
              </Text>

              <Text
                fontWeight="bold"
                fontSize="40px"
                lineHeight="47px"
                color="#459B41"
              >
                {covidData.new_confirmed.toLocaleString()}
              </Text>
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </Center>
  );
}

export default DataCard;
