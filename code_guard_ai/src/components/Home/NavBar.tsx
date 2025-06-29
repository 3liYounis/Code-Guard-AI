import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import ProfileIcon from "../Authentication Cards/ProfileIcon";
import type { User } from "../../services/FirebaseManager";
import SearchBar from "./SearchBar";
import AddCodeReview from "../Dashboard/File Dialog/AddCodeReview";
import Logo from "./Logo";
interface Props {
  user: User | undefined;
  onSignOut?: () => void;
  onNewFileClick?: () => void;
  route: string;
}

const NavBar = ({ user, onSignOut, onNewFileClick, route }: Props) => {
  return (
    <HStack mt={-3} justifyContent="space-between" p={5}>
      <Logo route={route} />
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
