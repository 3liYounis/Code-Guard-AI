"use client";
import type { User } from "../../services/FirebaseManager";
import { Menu, Portal, Box, Text, Icon, Button } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

interface ProfileIconProps {
  user: User | undefined;
  onSignOut?: () => void;
}

export default function ProfileIcon({ user, onSignOut }: ProfileIconProps) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button aria-label="User menu" variant="ghost" size="sm">
          {<Icon as={FaUser} boxSize={6} />}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="xs" py={0}>
            <Box px={4} py={3}>
              <Text fontWeight="bold">Hello {user?.displayName}!</Text>
              <Text fontSize="sm" color="gray.500">
                {user?.email}
              </Text>
            </Box>
            <Menu.Separator />
            <Button mb={2} onClick={onSignOut}>
              Sign Out
            </Button>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
