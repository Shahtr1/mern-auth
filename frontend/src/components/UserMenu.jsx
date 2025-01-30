import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../lib/api.js";
import queryClient from "../config/queryClient.js";

export const UserMenu = (props) => {
  const { role } = props;
  const navigate = useNavigate();

  const { mutate: signOut } = useMutation({
    mutationFn: logout,
    onSettled: () => {
      queryClient.clear();
      navigate("/login", { replace: true });
    },
  });
  return (
    <Menu isLazy placement="right-start">
      <MenuButton position="absolute" left="1.5rem" bottom="1.5rem">
        <Avatar src="#" />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate("/")}>Profile</MenuItem>
        {role === "admin" && (
          <MenuItem onClick={() => navigate("/settings")}>Settings</MenuItem>
        )}
        <MenuItem onClick={signOut}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
