import { mode } from "@chakra-ui/theme-tools";

const inputTheme = {
  baseStyle: {
    fontWeight: "medium",
  },
  variants: {
    outline: (props) => ({
      field: {
        borderColor: mode("gray.300", "whiteAlpha.500")(props),
        bg: mode("white", "gray.800")(props),
        color: mode("text.primary", "whiteAlpha.900")(props),
        _placeholder: {
          color: mode("text.secondary", "whiteAlpha.600")(props),
        },
        _focus: {
          borderColor: "brand.500",
          boxShadow: "none",
        },
      },
    }),
    filled: (props) => ({
      field: {
        bg: mode("gray.100", "gray.700")(props),
        color: mode("text.primary", "whiteAlpha.900")(props),
        _placeholder: {
          color: mode("text.secondary", "whiteAlpha.600")(props),
        },
        _focus: {
          bg: mode("white", "gray.800")(props),
          borderColor: "brand.500",
          boxShadow: "none",
        },
      },
    }),
  },
  defaultProps: {
    variant: "outline",
  },
};

export default inputTheme;
