import useAuth from "../hooks/useAuth.js";
import { Alert, AlertIcon, Center, Heading, Text } from "@chakra-ui/react";

export const Dashboard = () => {
  const { user } = useAuth();
  const { email, verified, createdAt } = user;
  return (
    <Center my={16} flexDir="column">
      <Heading mb={4}>My Account</Heading>
      {!verified && (
        <Alert status="warning" w="fit-content" borderRadius={12} mb={3}>
          <AlertIcon />
          Please verify your email
        </Alert>
      )}
      <Text color="white" mb={2}>
        Email:{" "}
        <Text as="span" color="gray.300">
          {email}
        </Text>
      </Text>
      <Text color="white">
        Created on{" "}
        <Text as="span" color="gray.300">
          {new Date(createdAt).toLocaleDateString("en-US")}
        </Text>
      </Text>
    </Center>
  );
};
