import { Center, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

import React from "react";

const TextCity: React.FC = (): ReactElement => {
  let city: string = "Goiânia, Goiás, Brasil";
  let population: number = 1536097;
  return (
    <Center d="flex" my="15px" maxW="100%" flexDirection="column">
      <Text
        fontSize="5rem"
        color="#fff"
        fontWeight="bold"
        textShadow="1px 1px 5px gray"
        mx="4%"
      >
        {city}
      </Text>

      <Text
        fontSize="2.5rem"
        color="#fff"
        fontWeight="bold"
        textShadow="1px 1px 5px gray"
        mx="4%"
      >
        População: {population.toString}
      </Text>
    </Center>
  );
};

export default TextCity;
