import { mode } from "@chakra-ui/theme-tools";

const buttonTheme = {
  baseStyle: {
    fontWeight: "500",
    borderRadius: "sm",
  },
  variants: {
    solid: (props) => ({
      bg: mode("brand.500", "brand.400")(props),
      color: "white",
      _hover: {
        bg: mode("brand.600", "brand.300")(props),
      },
      _active: {
        bg: mode("brand.700", "brand.200")(props),
      },
    }),
    outline: (props) => ({
      borderColor: mode("brand.500", "whiteAlpha.700")(props),
      color: mode("brand.500", "whiteAlpha.900")(props),
      _hover: {
        bg: mode("gray.100", "whiteAlpha.300")(props),
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.400")(props),
      },
    }),
    secondary: (props) => ({
      bg: mode("secondary.400", "secondary.500")(props),
      color: "white",
      _hover: {
        bg: mode("secondary.500", "secondary.600")(props),
      },
      _active: {
        bg: mode("secondary.600", "secondary.700")(props),
      },
    }),
  },
  defaultProps: {
    colorScheme: "brand",
  },
};

export default buttonTheme;
