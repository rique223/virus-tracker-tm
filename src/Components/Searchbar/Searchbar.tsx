import React, { ReactElement } from 'react';
import { Button, Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar: React.FC = (): ReactElement => {
  const search = (event: React.MouseEvent) => {
    console.log("DEU CERTO!");
  }

  const searchEnter = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      console.log("Deu Cert com Enter!");
    }
  }

  return (
    <Center h="55%">
      <InputGroup w="68%" size="99px">
        <Input 
          placeholder="Pesquise uma cidade do Brasil..." 
          fontSize="32px"
          size="lg" 
          onKeyPress={searchEnter}
          height="99px"
          variant="outline" 
          textColor="#066666" 
          backgroundColor="#F8FAF9" 
          border="1px"
          borderStyle="solid"
          borderColor="#000"
          boxShadow="0px 2px 4px 2px rgba(0, 0, 0, 0.25)"
        />
        
        <InputRightElement 
          m="0"
          children={
            <Button 
              onClick={search}
              backgroundColor="#459B41" 
              variant="solid"
              size="lg"
              height="99px"
              w="100px"
              borderLeftRadius="0"
              borderRightRadius="10"
              _hover={{
                background: "rgba(69, 155, 65, 0.80)"
              }}
            >
              <FontAwesomeIcon icon={faSearch} size="3x" color="#fff"/>
            </Button>
          } 
        />
      </InputGroup>
    </Center>
  )
}

export default Searchbar;
