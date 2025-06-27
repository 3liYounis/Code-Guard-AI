import { Stack, HStack, Image, Heading } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import ProfileIcon from "../Authentication Cards/ProfileIcon";
import type { User } from "../../services/FirebaseManager";
import SearchBar from "./SearchBar";
import AddCodeReview from "../Dashboard/File Dialog/AddCodeReview";
interface Props {
  user: User | undefined;
  onSignOut?: () => void;
  onNewFileClick?: () => void;
  route: string;
}

const NavBar = ({ user, onSignOut, onNewFileClick, route }: Props) => {
  return (
    <HStack mt={-3} justifyContent="space-between" p={5}>
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Stack gap={0}>
          <Heading fontSize="2xl" fontFamily="cursive">
            Code Guard AI
          </Heading>
          <Heading fontSize="xl" color="fg.muted" fontFamily="cursive">
            {route}
          </Heading>
        </Stack>
      </HStack>
      <HStack>
        {user && <SearchBar onSearch={() => { }}></SearchBar>}
      </HStack>
      <HStack>
        {user && <AddCodeReview onClicked={onNewFileClick} />}
        <ColorModeSwitch />
        {user && <ProfileIcon user={user} onSignOut={onSignOut}></ProfileIcon>}
      </HStack>
    </HStack>
  );
};

export default NavBar;
