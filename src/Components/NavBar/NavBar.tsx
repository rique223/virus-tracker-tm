import { Box, Flex, Spacer, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

import { Link as ReactRouterLink } from "react-router-dom";

import React, { ReactElement } from "react";

const NavBar: React.FC = (): ReactElement => {
  return (
    <Flex>
      <Box p="4">
        <Link
          as={ReactRouterLink}
          to="/"
          _hover={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Text fontSize="32px">
            <FontAwesomeIcon icon={faVirus} size="lg" />
            TheVirusTracker™
          </Text>
        </Link>
      </Box>

      <Spacer />

      <Box p="4">Box 2</Box>
    </Flex>
  );
};

export default NavBar;
