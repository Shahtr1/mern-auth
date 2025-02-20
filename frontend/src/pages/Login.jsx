import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link as ChakraLink,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../lib/api.js";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectUrl = location.state?.redirectUrl || "/";

  const {
    mutate: signIn,
    isPending,
    isError,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate(redirectUrl, {
        replace: true,
      });
    },
  });

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Container mx="auto" maxW="md" py={12} px={6} textAlign="center">
        <Heading fontSize="4xl" mb={8}>
          Sign into your account
        </Heading>
        <Box rounded="lg" bg="white.700" boxShadow="lg" p={8}>
          {isError && (
            <Box mb={3} color="red.400">
              Invalid email or password
            </Box>
          )}
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && signIn({ email, password })
                }
              />
            </FormControl>

            <ChakraLink
              as={Link}
              to="/password/forgot"
              fontSize="sm"
              textAlign={{ base: "center", sm: "right" }}
            >
              Forgot password?
            </ChakraLink>
            <Button
              my={2}
              isDisabled={!email || password.length < 6}
              isLoading={isPending}
              onClick={() =>
                signIn({
                  email,
                  password,
                })
              }
            >
              Sign in
            </Button>
            <Text align="center" fontSize="sm" color="text.muted">
              Don&apos;t have an account?{" "}
              <ChakraLink as={Link} to="/register">
                Sign up
              </ChakraLink>
            </Text>
          </Stack>
        </Box>
      </Container>
    </Flex>
  );
};

export default Login;
