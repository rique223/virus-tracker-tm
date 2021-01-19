import './TextBox.css';
import { Box, Text } from "@chakra-ui/react";

function TextBox() {
  return (
    <Box padding="4" maxW="100%">
        <Text 
            bgClip="text"
            fontSize="38px"
            color="#20481E" 
            fontWeight="bold"
            textAlign="center"
            px="4%"
            lineHeight="45px"
            >
            O TheVirusTracker™ pretende trazer praticidade para a visualização de 
            dados relacionados à pandemia de Corona Vírus no Brasil: 
            Digite o nome de uma cidade brasileira acima e serão retornadas as principais 
            estatísticas relacionadas ao avanço do Sars-CoV-2 neste local.
        </Text>
    </Box>
  );
}

export default TextBox;