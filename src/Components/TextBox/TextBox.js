import './TextBox.css';
import { Box, Container } from "@chakra-ui/react";

function TextBox() {
  return (
    <Container maxW="xl" centerContent>
    <Box padding="4" bg="red.100" maxW="3xl">
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team.
    </Box>
    </Container>
  );
}

export default TextBox;