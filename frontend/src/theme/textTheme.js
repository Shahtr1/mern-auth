import { mode } from "@chakra-ui/theme-tools";

const textTheme = {
  baseStyle: {
    color: "text.primary",
    fontWeight: "medium",
  },
  variants: {
    heading: {
      fontWeight: "semibold",
      lineHeight: "short",
      color: "text.primary",
    },
    body: {
      fontSize: "md",
      fontWeight: "medium",
      color: "text.primary",
    },
    subtle: {
      color: mode("gray.500", "gray.400"),
      fontSize: "sm",
    },
  },
  defaultProps: {
    variant: "body",
  },
};

export default textTheme;
