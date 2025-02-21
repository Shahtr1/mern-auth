import { mode } from "@chakra-ui/theme-tools";

const selectTheme = {
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
          boxShadow: mode("0 0 0 1px brand.500", "0 0 0 1px brand.400")(props),
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
        },
      },
    }),
  },
  defaultProps: {
    variant: "outline",
  },
};

export default selectTheme;
