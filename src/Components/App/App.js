import './App.css';
import { Box, Container, Center } from "@chakra-ui/react";
import TextBox from '../TextBox/TextBox';

function App() {
  return (
    <Container maxW="xl" h="100%">
      <Box bg="#5CDB96" w="100%" h="33%" p={0} color="White">
          
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
