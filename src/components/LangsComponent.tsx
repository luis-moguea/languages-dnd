import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const myLanguages = ["javascript", "react", "typescript", "html", "css"];

const LangsComponent = () => {
  return (
    <>
      <HStack>
        {myLanguages.map((language, index) => (
          <Link to={`/langs/${language}`}>
            <Text
              textTransform="capitalize"
              rounded="2xl"
              margin="8px"
              padding="0.6em"
              bgColor="blue.400"
              key={index}
            >
              {language}
            </Text>
          </Link>
        ))}
      </HStack>
    </>
  );
};

export default LangsComponent;
