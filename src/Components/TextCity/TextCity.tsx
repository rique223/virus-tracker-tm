import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from 'react';

import React from 'react';

const TextCity: React.FC = (): ReactElement => {
    let teste : string = "Goiânia, Goiás, Brasil";
    let populacao : string = "1.536.097";
  return (
    <Box 
        d="flex" 
        my="15px" 
        position="relative" 
        maxW="100%" 
        justifyContent="center" 
        flexWrap="wrap" 
        flexDirection="column">
        
        <Text 
            bgClip="text"
            fontSize="2.3rem"
            color="#fff" 
            fontWeight="bold"
            textShadow ="1px 1px 5px gray"
            mx="4%"
            textAlign="center" >
           {teste}
        </Text>

        <Text
            bgClip="text"
            fontSize="1.3rem"
            color="#fff" 
            display=""
            fontWeight="bold"
            textShadow ="1px 1px 5px gray"
            mx="4%"
            textAlign="center" >
            População: {populacao}
        </Text>
    </Box>
  );
}

export default TextCity;