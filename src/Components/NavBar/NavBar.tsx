import './NavBar.css';
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

import React, { FunctionComponent, ReactElement } from 'react';


const NavBar: React.FC = (): ReactElement => {
  return (
    <Flex>
      <Box p="4">
        <Text fontSize="32px"><FontAwesomeIcon icon={faVirus} size="lg"/>TheVirusTracker™</Text>
      </Box>
      <Spacer />
      <Box p="4" >
        Box 2
      </Box>
    </Flex>
  );
}

export default NavBar;
