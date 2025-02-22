import { mode } from "@chakra-ui/theme-tools";

const textTheme = {
  baseStyle: (props) => ({
    color: mode("text.primary", "whiteAlpha.900")(props),
    fontWeight: "small",
  }),
  variants: {
    heading: (props) => ({
      lineHeight: "short",
      color: mode("text.primary", "whiteAlpha.900")(props),
    }),
    body: (props) => ({
      fontWeight: "small",
      color: mode("text.primary", "whiteAlpha.900")(props),
    }),
    subtle: (props) => ({
      color: mode("text.secondary", "whiteAlpha.600")(props),
      fontSize: "sm",
    }),
  },
  defaultProps: {
    variant: "body",
  },
};

export default textTheme;
