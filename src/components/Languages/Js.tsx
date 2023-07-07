import { Card, CardBody, Text, Image } from "@chakra-ui/react";
import jsLogo from "../../assets/js.png.png";
import { useEffect } from "react";

const Js = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#fad204";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  return (
    <Card w="400px" mt="50px">
      <Image src={jsLogo} />
      <CardBody>
        <Text textAlign="justify">
          JavaScript is a versatile programming language for enhancing webpages
          with interactivity. It enables dynamic content, user interactions, and
          communication with servers, making websites more engaging and
          functional.
        </Text>
      </CardBody>
    </Card>
  );
};

export default Js;
