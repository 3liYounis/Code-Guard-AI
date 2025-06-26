// src/components/About/About.tsx
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Portfolio from "./Portfolio";
import AliYounis from "../../assets/Ali-Younis.png";
import YazanAbomokh from "../../assets/Yazan-Abomokh.jpg";

const profiles = [
  {
    name: "Yazan Abomokh",
    image: YazanAbomokh,
    links: [
      {
        href: "https://www.linkedin.com/in/yazan-a-390840292/",
        icon: FaLinkedin,
      },
      { href: "https://github.com/Yazanabomokh", icon: FaGithub },
    ],
  },
  {
    name: "Ali Younis",
    image: AliYounis,
    links: [
      { href: "https://www.linkedin.com/in/aliyounis20/", icon: FaLinkedin },
      { href: "https://github.com/3liYounis", icon: FaGithub },
    ],
  },
];

export default function About() {
  return (
    <Stack p={20} height="100%" justify="center" align="center" gap={10}>
      <Heading fontSize="3xl" textAlign="center">
        About Code Guard AI
      </Heading>

      <Text fontSize="lg" maxW="800px" textAlign="center">
        Code Guard AI is an AI-powered code auditing platform designed to help
        developers identify security vulnerabilities, enforce best practices,
        and maintain clean, high-quality codebases. Our intuitive dashboard and
        automated analysis tools provide real-time feedback on pull requests and
        commits, making it easier than ever to ship secure, robust software.
      </Text>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10} w="full" maxW="800px">
        {profiles.map((p) => (
          <Portfolio
            key={p.name}
            name={p.name}
            image={p.image}
            links={p.links}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
