import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import buttonTheme from "@/theme/buttonTheme.js";
import linkTheme from "@/theme/linkTheme.js";
import inputTheme from "@/theme/inputTheme.js";
import selectTheme from "@/theme/selectTheme.js";
import radioTheme from "@/theme/radioTheme.js";
import checkboxTheme from "@/theme/checkboxTheme.js";
import textTheme from "@/theme/textTheme.js";
import colors from "@/theme/colors.js";
import formLabelTheme from "@/theme/formLabelTheme.js";
import alertTheme from "@/theme/alertTheme.js";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("black", "whiteAlpha.900")(props),
      bg: mode("white", "gray.900")(props),
      fontFamily: "'Nunito Sans', sans-serif",
    },
  }),
};

const components = {
  Alert: alertTheme,
  Link: linkTheme,
  Button: buttonTheme,
  Input: inputTheme,
  Select: selectTheme,
  Radio: radioTheme,
  Checkbox: checkboxTheme,
  Text: textTheme,
  FormLabel: formLabelTheme,
};

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
});

export default theme;
