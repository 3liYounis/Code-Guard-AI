"use client";
import type { User } from "../../services/FirebaseManager";
import { Menu, Portal, Box, Text, Icon, Button, Flex, HStack } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";


interface ProfileIconProps {
  user: User | undefined;
  onSignOut?: () => void;
}

export default function ProfileIcon({ user, onSignOut }: ProfileIconProps) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button aria-label="User menu" variant="ghost" p={0} minW="auto" borderRadius="full" height="auto">
          {<Icon as={MdAccountCircle} boxSize={12} color="ActiveBorder" />}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="xs" py={0}>
            <Box px={4} py={2} mt={1}>
              <Text fontWeight="bold">Hello {user?.displayName}!</Text>
              <Text fontSize="sm" color="gray.500">
                {user?.email}
              </Text>
            </Box>
            <Menu.Separator />
            <Flex justify="center">
              <Button onClick={onSignOut} mb={1} width="80%">
                <HStack>
                  <Icon as={BiLogOut} boxSize={6} />
                  <Text fontFamily="cursive">Log Out</Text>
                </HStack>
              </Button>
            </Flex>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
