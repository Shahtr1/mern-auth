import { Flex, Radio, Text, useColorModeValue } from "@chakra-ui/react";

export const XRadio = ({ value, label, hasError }) => {
  const borderColor = hasError
    ? useColorModeValue("red.500", "red.300")
    : useColorModeValue("gray.300", "whiteAlpha.500");

  const borderWidth = hasError ? "2px" : "1px";

  return (
    <Flex
      width="100%"
      borderWidth={borderWidth}
      borderStyle="solid"
      borderColor={borderColor}
      alignItems="center"
      height={{ base: "8", md: "10" }}
      borderRadius="sm"
      pl={{ base: "1", md: "2" }}
      pr={{ base: "3" }}
    >
      <Radio
        value={value}
        flexDirection="row-reverse"
        justifyContent="space-between"
        width="100%"
      >
        <Text fontSize="sm">{label}</Text>
      </Radio>
    </Flex>
  );
};
