import { Card, CardBody, Text, Image } from "@chakra-ui/react";
import tsLogo from "../../assets/types-img.png";
import { useEffect } from "react";

const Ts = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#c6ddf1";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  return (
    <Card w="250px" mt="10px">
      <Image src={tsLogo} backgroundSize="cover" />
      <CardBody>
        <Text textAlign="justify">
          TypeScript is a statically typed superset of JavaScript that adds
          optional type annotations to enable static type checking during
          development. It helps catch errors early, improves code
          maintainability, and provides enhanced tooling support. TypeScript is
          compatible with JavaScript and compiles down to plain JavaScript for
          browser compatibility.
        </Text>
      </CardBody>
    </Card>
  );
};

export default Ts;
