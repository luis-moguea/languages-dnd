import { Card, CardBody, Image, Textarea } from "@chakra-ui/react";
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
    <Card w="250px" h="400px" mt="10px">
      <Image src={jsLogo} />
      <CardBody>
        <Textarea fontSize="12px" height="100%" textAlign="justify">
          JavaScript is a versatile programming language for enhancing webpages
          with interactivity. It enables dynamic content, user interactions, and
          communication with servers, making websites more engaging and
          functional.
        </Textarea>
      </CardBody>
    </Card>
  );
};

export default Js;
