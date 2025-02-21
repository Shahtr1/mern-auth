import { mode } from "@chakra-ui/theme-tools";

const checkboxTheme = {
  baseStyle: (props) => ({
    control: {
      borderColor: mode("gray.400", "whiteAlpha.600")(props),
      bg: mode("white", "gray.800")(props),
      _checked: {
        bg: mode("brand.500", "brand.400")(props),
        borderColor: mode("brand.500", "brand.400")(props),
        color: "white",
      },
      _hover: {
        borderColor: mode("brand.600", "brand.300")(props),
      },
      _focus: {
        boxShadow: mode("0 0 0 2px brand.200", "0 0 0 2px brand.700")(props),
      },
    },
    label: {
      fontWeight: "medium",
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};

export default checkboxTheme;
