import './App.css';
import { Box, Container, Center, Flex, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import TextBox from '../TextBox/TextBox';

function App() {
  return (
    <Container maxW="100%" h="100%">
      <Box bg="#5CDB96" w="100%" h="33%" p={4} color="White">
        <Flex>
          <Box p="4">
            <span><FontAwesomeIcon icon={faVirus} size="lg"/>TheVirusTracker™</span>
          </Box>
          <Spacer />
          <Box p="4" >
            Box 2
          </Box>
        </Flex>
      </Box>
      <Box bg="#EAEFEC" w="100%" h="66%" p={0} color="#20481E" alignItems="center">
        <Center color="#20481E" h="100%">
          <TextBox/>
        </Center>
      </Box>
    </Container>
  );
}

export default App;
