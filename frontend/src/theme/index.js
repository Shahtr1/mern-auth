import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import buttonTheme from "@/theme/buttonTheme.js";
import linkTheme from "@/theme/linkTheme.js";
import inputTheme from "@/theme/inputTheme.js";
import selectTheme from "@/theme/selectTheme.js";
import radioTheme from "@/theme/radioTheme.js";
import checkboxTheme from "@/theme/checkboxTheme.js";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("black", "whiteAlpha.900")(props),
      bg: mode("white", "#101218")(props),
    },
  }),
};

const colors = {
  brand: {
    50: "#e3fdfc",
    100: "#c1f7f4",
    200: "#97ede6",
    300: "#6ae2d9",
    400: "#44d7cc",
    500: "#27A69F",
    600: "#1e857f",
    700: "#166561",
    800: "#0e4443",
    900: "#072423",
  },
  text: {
    primary: "#606770",
    secondary: "#90949C",
  },
};

const components = {
  Link: linkTheme,
  Button: buttonTheme,
  Input: inputTheme,
  Select: selectTheme,
  Radio: radioTheme,
  Checkbox: checkboxTheme,
};

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
});

export default theme;
