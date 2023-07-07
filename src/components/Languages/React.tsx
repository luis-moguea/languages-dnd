import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import reactLogo from "../../assets/react-png.png";
import { useEffect } from "react";

const React = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#28c0d8";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  return (
    <Card w="400px" mt="150px">
      <Image src={reactLogo} bgColor="white" />
      <CardBody>
        <Text textAlign="justify">
          React is a JavaScript library for building user interfaces with
          reusable components, a virtual DOM for efficient updates, and JSX for
          writing HTML-like code within JavaScript. It offers state management,
          routing, and a large ecosystem of libraries and tools.
        </Text>
      </CardBody>
    </Card>
  );
};

export default React;