import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const XDate = ({ errorMessage, onDateChange, gap = 1, label }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const placeholderColor = useColorModeValue(
    "text.secondary",
    "text.secondary",
  );
  const optionColor = useColorModeValue("text.primary", "whiteAlpha.900");

  const sx = {
    option: {
      color: optionColor,
    },
    "option[value='']": {
      color: placeholderColor,
    },
  };

  useEffect(() => {
    if (day && month && year) {
      const dateString = `${year}-${month}-${day}`;
      const dateTimestamp = new Date(dateString).getTime();
      onDateChange(dateTimestamp);
    } else onDateChange(null);
  }, [day, month, year, onDateChange]);

  return (
    <FormControl id="dob" isInvalid={!!errorMessage}>
      {label && (
        <FormLabel fontSize={{ base: "xs", md: "sm" }}>{label}</FormLabel>
      )}
      <Flex gap={gap}>
        <Select
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          size={{ base: "sm", md: "md" }}
          sx={{ ...sx, color: day === "" ? placeholderColor : optionColor }}
        >
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          size={{ base: "sm", md: "md" }}
          sx={{ ...sx, color: month === "" ? placeholderColor : optionColor }}
        >
          {months.map((m, index) => (
            <option key={index} value={m}>
              {m}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          size={{ base: "sm", md: "md" }}
          sx={{ ...sx, color: year === "" ? placeholderColor : optionColor }}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </Select>
      </Flex>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};
