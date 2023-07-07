import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark"
}

const theme = extendTheme({config, colors: {
    black: "black"
}})

export default theme