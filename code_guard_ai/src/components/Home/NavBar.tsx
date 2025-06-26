import { HStack, Image, Heading } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import ProfileIcon from "../Authentication Cards/ProfileIcon";
import type { User } from "../../../services/FirebaseManager";
import SearchBar from "./SearchBar";

interface Props {
  user: User | undefined;
  onSignOut: () => void;
}

const NavBar = ({ user, onSignOut }: Props) => {
  return (
    <HStack mt={-3} justifyContent="space-between" p={5}>
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Heading fontSize="3xl">Code Guard AI</Heading>
      </HStack>
      {user && <SearchBar onSearch={(file) => { }}></SearchBar>}
      <HStack>
        {user && <ProfileIcon user={user} onSignOut={onSignOut}></ProfileIcon>}
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
