import {
  HStack,
  Avatar,
  Stack,
  Icon,
  Text,
  defineStyle,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaPython, FaJava } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { DiJsBadge, DiRubyRough } from "react-icons/di";
import { TbBrandCSharp, TbBrandKotlin } from "react-icons/tb";
import { GrStatusUnknown } from "react-icons/gr";
import { IoLogoReact } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";

interface Props {
  name: string;
  programmingLanguage: string;
}
const mapLanguage: { [key: string]: IconType } = {
  "Java": FaJava,
  "C#": TbBrandCSharp,
  "Python": FaPython,
  "JavaScript": DiJsBadge,
  "TypeScript": SiTypescript,
  "Ruby": DiRubyRough,
  "Kotlin": TbBrandKotlin,
  "React": IoLogoReact,
  "Vue.js": FaVuejs,
  "other": GrStatusUnknown
};
const ringCss = defineStyle({
  outlineWidth: "5px",
  outlineColor: "colorPalette",
  outlineOffset: "5px",
  outlineStyle: "solid",
});
const ReviewHeader = ({ name, programmingLanguage }: Props) => {
  const iconSource = mapLanguage[programmingLanguage] ?? mapLanguage["other"];
  return (
    <HStack>
      <Avatar.Root css={ringCss}>
        <Icon as={iconSource} boxSize={6} />
      </Avatar.Root>
      <Stack gap={0} padding={3}>
        <Text fontWeight="medium">{name}</Text>
        <Text color="fg.muted" textStyle="sm">
          {programmingLanguage}
        </Text>
      </Stack>
    </HStack>
  );
};

export default ReviewHeader;
