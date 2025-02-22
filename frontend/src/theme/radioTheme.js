import { mode } from "@chakra-ui/theme-tools";

const radioTheme = {
  baseStyle: (props) => ({
    label: {
      color: mode("text.primary", "whiteAlpha.900")(props),
      flexDirection: "row-reverse",
      fontWeight: "small",
    },
    control: {
      borderColor: mode("gray.400", "whiteAlpha.600")(props),
      bg: mode("white", "gray.800")(props),
      _checked: {
        bg: mode("brand.500", "brand.400")(props),
        borderColor: mode("brand.500", "brand.400")(props),
        color: "white",
        _hover: {
          borderColor: mode("brand.500", "brand.500")(props),
          bg: mode("brand.500", "brand.400")(props),
        },
        _focus: {
          boxShadow: mode("0 0 0 2px brand.500", "0 0 0 2px brand.400")(props),
          bg: mode("brand.500", "brand.400")(props),
        },
      },
      _hover: {
        borderColor: mode("brand.500", "brand.400")(props),
      },
      _focus: {
        boxShadow: mode("0 0 0 2px brand.500", "0 0 0 2px brand.400")(props),
      },
    },
  }),
  sizes: {
    sm: {
      label: { fontSize: "sm", fontWeight: "small" },
    },
    xs: {
      label: { fontSize: "xs" },
    },
  },
  defaultProps: {
    size: "sm",
  },
};

export default radioTheme;
