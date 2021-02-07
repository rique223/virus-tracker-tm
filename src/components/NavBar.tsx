import {
	Box,
	Flex,
	Spacer,
	Text,
	Link,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	OrderedList,
	Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faVirus, faInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faPinterestP } from "@fortawesome/free-brands-svg-icons";

import { Link as ReactRouterLink } from "react-router-dom";
import ItemList from "./ItemList";
import MenuIcon from "./MenuIcon";

import React, { ReactElement } from "react";

const NavBar: React.FC = (): ReactElement => {
	const { isOpen, onOpen, onClose } = useDisclosure();

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

			<Box p="4">
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
							</DrawerBody>

							<DrawerFooter
								flexDir="column"
								display="flex"
								alignItems="flex-end"
							>
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
			</Box>
		</Flex>
	);
};

export default NavBar;
