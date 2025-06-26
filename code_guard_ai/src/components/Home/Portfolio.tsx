import { Box, Flex, Image, Text, HStack, Link, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface PortfolioProps {
  name: string;
  image: string;
  links: { href: string; icon: IconType }[];
}

export default function Portfolio({ name, image, links }: PortfolioProps) {
  return (
    <Box border='solid' p={4} borderWidth="1px" borderRadius="lg" boxShadow="sm" maxW="400px">
      <Flex align="center">
        <Image
          src={image}
          alt={name}
          boxSize="80px"
          objectFit="cover"
          borderRadius="full"
          mr={4}
        />
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <HStack gap={3} mt={2}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                _hover={{ color: "blue.500" }}
              >
                <Icon as={link.icon} boxSize={5} />
              </Link>
            ))}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
