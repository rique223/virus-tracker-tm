import './TextBox.css';
import { Box, Text, Flex} from "@chakra-ui/react";

function TextBox() {
  return (
      <Flex>
        <Box padding="4" maxW="3xl" alignItems="center">
            <Text 
                bgClip="text"
                fontSize="6xl"
                color="#20481E"             
                fontWeight="bold"
                width="60%" 
                justifyContent="center"
                flexWrap="wrap"
                margin="20%"
                textAlign="center">
                O TheVirusTracker™ pretende trazer praticidade para a visualização de 
                dados relacionados à pandemia de Corona Vírus no Brasil: 
                Digite o nome de uma cidade brasileira acima e serão retornadas as principais 
                estatísticas relacionadas ao avanço do Sars-CoV-2 neste local.
                </Text>
        </Box>
      </Flex>
  );
}

export default TextBox;