import { Switch, useColorMode } from "@chakra-ui/react";

const SwitchButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      size="md"
      colorScheme="yellow"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    ></Switch>
  );
};

export default SwitchButton;
