import useSessions from "../hooks/useSessions.js";
import { Container, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import SessionCard from "../components/SessionCard.jsx";

export const Settings = () => {
  const { sessions, isPending, isSuccess, isError } = useSessions();
  return (
    <Container mt={16}>
      <Heading mb={6}>Sessions</Heading>
      {isPending && <Spinner />}
      {isError && <Text color="red.400">Failed to get sessions.</Text>}
      {isSuccess && (
        <VStack spacing={3} align="flex-start">
          {sessions.map((session) => (
            <SessionCard key={session._id} session={session} />
          ))}
        </VStack>
      )}
    </Container>
  );
};
