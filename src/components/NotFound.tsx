import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      navigate("/");
    }, 2000);
  }, []);

  return <Heading mt="300px">Invalid search</Heading>;
};

export default NotFound;
