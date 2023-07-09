import ImagesDnd from "../Dnd/ImagesDnd";
import { Flex, Heading, Text } from "@chakra-ui/react";
import LangsComponent from "../LangsComponent";
import { useMediaQuery } from "@chakra-ui/react";

const Home = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const styleHeading = isHigherThan480
    ? { padding: "1em", as: "h2" }
    : {
        size: "md",
        fontSize: "24px",
        width: "100%",
        padding: "1.3em",
        paddingTop: "0",
      };

  const textStyle = isHigherThan480
    ? { fontSize: "14px", mt: "10px", padding: "1em" }
    : { fontSize: "16px", padding: "2em" };

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading
          textAlign={isHigherThan480 ? undefined : "center"}
          style={styleHeading}
        >
          Draggable Languages & Tools Logos
        </Heading>
        <ImagesDnd />

        <Text
          textAlign={isHigherThan480 ? undefined : "center"}
          style={textStyle}
        >
          Click the buttons below to learn more about those specific programming
          languages!
        </Text>
        <LangsComponent />
      </Flex>
    </>
  );
};

export default Home;
