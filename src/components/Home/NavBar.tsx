import { HStack, Heading } from "@chakra-ui/react";
import SwitchButton from "./SwitchButton";
import { useMediaQuery } from "@chakra-ui/react";

const NavBar = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <HStack
      ml={isHigherThan480 ? "" : "45px"}
      mb={isHigherThan480 ? "0" : "10px"}
      pb="0"
      width={isHigherThan480 ? "100%" : "80%"}
      padding="1em"
      justifyContent="space-between"
    >
      <Heading>FavTechs</Heading>
      <SwitchButton />
    </HStack>
  );
};

export default NavBar;
