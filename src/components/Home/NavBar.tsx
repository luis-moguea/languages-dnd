import { HStack, Heading } from "@chakra-ui/react";
import SwitchButton from "./SwitchButton";

const NavBar = () => {
  return (
    <HStack
      mb="0"
      pb="0"
      width="100%"
      padding="1em"
      justifyContent="space-between"
    >
      <Heading>FavTechs</Heading>
      <SwitchButton />
    </HStack>
  );
};

export default NavBar;
