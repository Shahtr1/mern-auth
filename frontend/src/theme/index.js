import { extendTheme } from "@chakra-ui/react";
import linkTheme from "./linkTheme";
import { mode } from "@chakra-ui/theme-tools";

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

const theme = extendTheme({
  config,
  styles,
  components: {
    Link: linkTheme,
  },
});

export default theme;
