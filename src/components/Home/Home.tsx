import ImagesDnd from "../Dnd/ImagesDnd";
import { Flex, Heading, Text } from "@chakra-ui/react";
import LangsComponent from "../LangsComponent";

const Home = () => {
  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading padding="1em" as="h2" size="lg">
          Draggable Languages & Tools Logos
        </Heading>
        <ImagesDnd />

        <Text fontSize="14px" mt="10px" padding="1em">
          Click the buttons below to learn more about those specific programming
          languages!
        </Text>
        <LangsComponent />
      </Flex>
    </>
  );
};

export default Home;
