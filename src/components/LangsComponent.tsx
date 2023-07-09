import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";

const myLanguages = ["javascript", "react", "typescript", "html", "css"];

const LangsComponent = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <Flex flexDirection={isHigherThan480 ? undefined : "column"}>
        {myLanguages.map((language, index) => (
          <Link to={`/langs/${language}`}>
            <Text
              textAlign="center"
              textTransform="capitalize"
              rounded="2xl"
              margin="8px"
              padding="0.6em"
              bgColor="blue.400"
              key={index}
              _hover={{ bgColor: "blue.600" }}
            >
              {language}
            </Text>
          </Link>
        ))}
      </Flex>
    </>
  );
};

export default LangsComponent;
