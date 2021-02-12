import { HamburgerIcon } from "@chakra-ui/icons";
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { faGithubAlt, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MenuIcon from "./MenuIcon";
import LocalOrderedList from "./LocalOrderedList";

const Menu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<HamburgerIcon onClick={onOpen} cursor="pointer" h="57px" w="50px" />
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent backgroundColor="#EAEFEC">
						<DrawerCloseButton />
						<DrawerHeader
							borderBottomWidth="1px"
							fontWeight="hairline"
							fontSize="30px"
						>
							Menu
						</DrawerHeader>

						<DrawerBody px={0}>
							<LocalOrderedList />
						</DrawerBody>

						<DrawerFooter flexDir="column" display="flex" alignItems="flex-end">
							<MenuIcon
								label="Veja o repo desse projeto no Github!"
								href="https://github.com/rique223/virus-tracker-tm"
								icon={
									<FontAwesomeIcon
										icon={faGithubAlt}
										size="2x"
										color="#302F2F"
									/>
								}
							/>

							<MenuIcon
								label="Veja meus designs no Pinterest."
								href="https://br.pinterest.com/henrique2538/design-ideas-for-apps/"
								icon={
									<FontAwesomeIcon
										icon={faPinterestP}
										size="2x"
										color="#DF0022"
									/>
								}
							/>
						</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default Menu;
