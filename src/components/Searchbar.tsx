import React, { ReactElement, useState } from "react";
import {
	Button,
	Center,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({
	searchCOVID,
}: {
	searchCOVID: (city: string) => Promise<void>;
}): ReactElement => {
	const [searchValue, setSearchValue] = useState("");
	const [inputHeight, setInputHeight] = useState("60%");

	// Handler that updates the searchValue state with the value typed in the input
	const handleSearchValue = (event: React.ChangeEvent): void => {
		if (!event) {
			return;
		}

		const target = event.target as HTMLInputElement;

		setSearchValue(target.value);
	};

	// Function that executes the API request everytime the button is clicked at
	const search = (event: React.MouseEvent): void => {
		if (!event || !searchValue) {
			setInputHeight("60%");
			searchCOVID(searchValue);
		} else {
			event.preventDefault();
			searchCOVID(searchValue);
			setInputHeight("35%");
		}
	};

	// Function that executes the API request everytime enter is pressed inside of the input
	const searchEnter = (event: React.KeyboardEvent): void => {
		if (!event || !searchValue) {
			setInputHeight("60%");
			searchCOVID(searchValue);
		} else {
			if (event.key === "Enter") {
				event.preventDefault();
				searchCOVID(searchValue);
				setInputHeight("35%");
			}
		}
	};

	return (
		<Center h={inputHeight}>
			<InputGroup w="68%" size="99px">
				<Input
					placeholder="Pesquise uma cidade do Brasil..."
					fontSize="32px"
					size="lg"
					onChange={handleSearchValue}
					onKeyPress={searchEnter}
					height="99px"
					variant="outline"
					textColor="#066666"
					backgroundColor="#F8FAF9"
					border="1px"
					borderStyle="solid"
					borderColor="#000"
					borderRadius="13px"
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
							borderRightRadius="10px"
							_hover={{
								background: "rgba(69, 155, 65, 0.80)",
							}}
						>
							<FontAwesomeIcon icon={faSearch} size="3x" color="#fff" />
						</Button>
					}
				/>
			</InputGroup>
		</Center>
	);
};

export default Searchbar;
