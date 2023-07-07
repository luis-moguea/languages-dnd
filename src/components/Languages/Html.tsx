import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import htmlLogo from "../../assets/html-png.png";
import { useEffect } from "react";

const Html = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#f3632b";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  return (
    <Card w="400px" mt="50px">
      <Image src={htmlLogo} backgroundSize="cover" />
      <CardBody>
        <Text textAlign="justify">
          HTML is a markup language that defines the structure and content of a
          webpage. It uses tags to create elements like headings, paragraphs,
          images, and links. HTML is the backbone of the web and is responsible
          for organizing and presenting information on websites.
        </Text>
      </CardBody>
    </Card>
  );
};

export default Html;
