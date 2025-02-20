import { mode } from "@chakra-ui/theme-tools";

const selectTheme = {
  baseStyle: {
    fontWeight: "medium",
  },
  variants: {
    outline: (props) => ({
      field: {
        borderColor: mode("gray.300", "gray.600")(props),
        color: "text.primary",
        _placeholder: { color: "text.secondary" },
        _focus: {
          borderColor: "brand.500",
          boxShadow: "0 0 0 1px brand.500",
        },
      },
    }),
    filled: (props) => ({
      field: {
        bg: mode("gray.100", "gray.700")(props),
        color: "text.primary",
        _placeholder: { color: "text.secondary" },
        _focus: {
          bg: "white",
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
