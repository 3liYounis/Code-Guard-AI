import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      {" "}
      <Image src={logo} boxSize="50px"></Image>
      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
