import { useColorModeValue } from "@chakra-ui/react";
import { GoEye, GoEyeClosed } from "react-icons/go";

export const XEyeIcon = ({ show }) => {
  const iconColor = useColorModeValue("gray.600", "gray.400");

  return show ? <GoEyeClosed color={iconColor} /> : <GoEye color={iconColor} />;
};
