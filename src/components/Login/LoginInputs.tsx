import { InputGroup, Input, Button, Text, Box } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { validateName, validatePassword } from "../../utils/validators";
import NavBar from "../Home/NavBar";

interface Props {
  user: (name: string[]) => void;
}

const LoginInputs = ({ user }: Props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const preventReload = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    const nameValidationError = validateName(name);
    const passwordValidationError = validatePassword(password);

    if (nameValidationError) {
      setNameError(nameValidationError.message);
      setPasswordError("");
    } else if (passwordValidationError) {
      setPasswordError(passwordValidationError.message);
      setNameError("");
    } else {
      setNameError("");
      setPasswordError("");
      user([name]);
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <NavBar />
        <form onSubmit={preventReload}>
          <InputGroup
            border="solid"
            borderWidth="1px"
            borderColor="gray.300"
            rounded="2xl"
            padding="2em"
            flexDirection="column"
            mt="50px"
            maxWidth="350px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box mb="10px">
              <Text opacity="0.6" fontSize="9px" fontStyle="oblique">
                User
              </Text>
              <Input
                type="text"
                onChange={(event) => setName(event.target.value)}
              ></Input>
            </Box>
            <Box>
              <Text opacity="0.6" fontSize="9px" fontStyle="oblique">
                Password
              </Text>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></Input>
            </Box>

            <Button rounded="3xl" mt="15px" onClick={handleSubmit}>
              Sign In
            </Button>
          </InputGroup>
        </form>
        <Box>
          {nameError && (
            <Text
              maxW="250px"
              color="red.300"
              textAlign="center"
              fontSize="10px"
              mt="20px"
            >
              {nameError}
            </Text>
          )}
          {passwordError && (
            <Text
              maxW="250px"
              color="red.300"
              textAlign="center"
              fontSize="10px"
              mt="20px"
            >
              {passwordError}
            </Text>
          )}
        </Box>
      </Box>
    </>
  );
};

export default LoginInputs;
