import { HStack, Image, Heading } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <Heading>Code Guard AI</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
