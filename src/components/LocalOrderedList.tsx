import { Divider, OrderedList } from "@chakra-ui/react";
import { faHome, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ItemList from "./ItemList";

const LocalOrderedList = () => {
	return (
		<OrderedList mx={0} w="100%">
			<ItemList
				name="Home"
				icon={<FontAwesomeIcon icon={faHome} />}
				route="/"
			/>

			<Divider borderColor="rgba(0, 0, 0, .25)" />

			<ItemList
				name="Sobre"
				icon={<FontAwesomeIcon icon={faInfo} />}
				route="/sobre"
			/>

			<Divider borderColor="rgba(0, 0, 0, .25)" />
		</OrderedList>
	);
};

export default LocalOrderedList;
