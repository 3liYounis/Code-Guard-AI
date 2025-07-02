import {
  Box,
  Separator,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Portfolio from "./Portfolio";
import AliYounis from "../../assets/Portraits/Ali-Younis.png";
import YazanAbomokh from "../../assets/Portraits/Yazan-Abomokh.jpg";

const profiles = [
  {
    name: "Ali Younis",
    image: AliYounis,
    links: [
      {
        href: "https://www.linkedin.com/in/aliyounis20/",
        icon: FaLinkedin,
        hoverColor: "blue.500",
      },
      {
        href: "https://github.com/3liYounis",
        icon: FaGithub,
        hoverColor: "gray.400",
      },
    ],
  },
  {
    name: "Yazan Abomokh",
    image: YazanAbomokh,
    links: [
      {
        href: "https://www.linkedin.com/in/yazan-a-390840292/",
        icon: FaLinkedin,
        hoverColor: "blue.500",
      },
      {
        href: "https://github.com/Yazanabomokh",
        icon: FaGithub,
        hoverColor: "gray.400",
      },
    ],
  }
];

export default function About() {

  return (
    <Stack h="100%" justify="center" align="center" gap={8} textAlign="center">
      {/* <Box w="full" maxW="2xl"> */}
      {/* <Heading
          alignSelf="flex-start"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontFamily="cursive"
          textAlign="left"
        >
          About
        </Heading> */}

      {/* <Separator
          mt={2}
          w="100px"
          borderColor="gray.300"
          borderWidth="2px"
          borderRadius="full"
        /> */}
      {/* </Box> */}

      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        bgGradient="linear(to-r, teal.300, cyan.400)"
        fontFamily="cursive"
      >
        General Overview
      </Heading>

      <Separator
        w="500px"
        borderColor="gray.200"
        borderWidth="4px"
        borderRadius="full"
      />

      <Text
        fontSize={{ base: "md", md: "lg" }}
        maxW="700px"
        mx="auto"
        fontFamily="cursive"
      >
        Code Guard AI is an AI-powered code auditing platform that helps
        developers identify security vulnerabilities, enforce best practices,
        and maintain clean, high-quality codebases.
      </Text>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10} w="full" maxW="700px">
        {profiles.map((p) => (
          <Portfolio key={p.name} {...p} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
