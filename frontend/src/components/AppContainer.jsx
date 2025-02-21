import useAuth from "../hooks/useAuth.js";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import { UserMenu } from "./UserMenu.jsx";

export const AppContainer = () => {
  const { user, isLoading } = useAuth();
  return isLoading ? (
    <Center w="100vw" h="90vh" flexDir="column">
      <Spinner mb={4} />
    </Center>
  ) : user ? (
    <Box p={4} minH="100vh">
      <UserMenu role={user?.role} />
      <Outlet />
    </Box>
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ redirectUrl: window.location.pathname }}
    />
  );
};
