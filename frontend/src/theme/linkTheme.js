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
  }),
  defaultProps: {
    variant: "default",
  },
};

export default linkTheme;
