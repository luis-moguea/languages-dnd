import { Card, CardBody, Image, Text, Textarea } from "@chakra-ui/react";
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
    <Card w="250px" mt="50px">
      <Image src={reactLogo} bgColor="white" />
      <CardBody>
        <Textarea fontSize="12px" height="100%" textAlign="justify">
          React is a JavaScript library for building user interfaces with
          reusable components, a virtual DOM for efficient updates, and JSX for
          writing HTML-like code within JavaScript. It offers state management,
          routing, and a large ecosystem of libraries and tools.
        </Textarea>
      </CardBody>
    </Card>
  );
};

export default React;
