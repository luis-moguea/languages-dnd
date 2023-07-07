import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import cssLogo from "../../assets/css-png.png";
import { useEffect } from "react";

const Css = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#84b4d5";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  return (
    <Card w="250px" mt="10px">
      <Image src={cssLogo} />
      <CardBody>
        <Text textAlign="justify">
          CSS is a language used for styling and formatting web documents. It
          defines how elements on a webpage should look, including colors,
          fonts, spacing, and layout. It allows developers to create visually
          appealing and consistent designs for their websites.
        </Text>
      </CardBody>
    </Card>
  );
};

export default Css;
