import { mode } from "@chakra-ui/theme-tools";

const textTheme = {
  baseStyle: (props) => ({
    color: mode("text.primary", "whiteAlpha.900")(props),
    fontWeight: "medium",
  }),
  variants: {
    heading: (props) => ({
      fontWeight: "semibold",
      lineHeight: "short",
      color: mode("text.primary", "whiteAlpha.900")(props),
    }),
    body: (props) => ({
      fontSize: "md",
      fontWeight: "medium",
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
