import { mode } from "@chakra-ui/theme-tools";

const formLabelTheme = {
  baseStyle: (props) => ({
    fontSize: "sm",
    fontWeight: "medium",
    color: mode("text.primary", "whiteAlpha.900")(props),
    mb: 1,
  }),
  variants: {
    floating: (props) => ({
      fontSize: "xs",
      fontWeight: "bold",
      color: mode("text.secondary", "whiteAlpha.600")(props),
    }),
    subtle: (props) => ({
      fontSize: "sm",
      color: mode("text.secondary", "whiteAlpha.700")(props),
    }),
  },
};

export default formLabelTheme;
