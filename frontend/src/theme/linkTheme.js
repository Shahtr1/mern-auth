import { mode } from "@chakra-ui/theme-tools";

const linkTheme = {
  baseStyle: (props) => ({
    color: mode("brand.500", "brand.300")(props),
    fontWeight: "600",
    textDecoration: "none",
    _hover: {
      textDecoration: "underline",
      color: mode("brand.600", "brand.400")(props),
    },
    _focus: {
      outline: "none",
      boxShadow: mode("0 0 0 2px brand.200", "0 0 0 2px brand.500")(props),
    },
    _active: {
      color: mode("brand.700", "brand.500")(props),
    },
  }),
  defaultProps: {
    variant: "default",
  },
};

export default linkTheme;
