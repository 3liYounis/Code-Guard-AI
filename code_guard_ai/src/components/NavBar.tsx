import { HStack, Image, Heading } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="50px"></Image>
      <Heading>Code Guard AI</Heading>
      <ColorModeSwitch />
    </HStack >
  );
};

export default NavBar;
