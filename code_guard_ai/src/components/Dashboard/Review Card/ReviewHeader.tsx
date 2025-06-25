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
  modificationDate: Date;
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
  outlineWidth: "7px",
  outlineColor: "colorPalette",
  outlineOffset: "7px",
  outlineStyle: "solid",
});
const formatTime = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
const formatDate = (date: Date): string => {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = weekDays[date.getDay()];
  const dateStr = date.toLocaleDateString(); // e.g. 6/25/2025
  return `${day} ${dateStr}`;
};
const ReviewHeader = ({ name, programmingLanguage, modificationDate }: Props) => {
  const iconSource = mapLanguage[programmingLanguage] ?? mapLanguage["other"];
  const formattedDate =
    modificationDate instanceof Date && !isNaN(modificationDate.getTime()) ? `${formatDate(modificationDate)} - ${formatTime(modificationDate)}` : "Unknown date";
  return (
    <HStack>
      <Avatar.Root css={ringCss} size="xl">
        <Icon as={iconSource} boxSize={7} />
      </Avatar.Root>
      <Stack gap={0} padding={4}>
        <Text fontWeight="bold">{name}</Text>
        <Stack gap={0}>
          <Text color="fg.muted" textStyle="sm">
            {programmingLanguage}
          </Text>
          <Text color="fg.muted" textStyle="sm" fontStyle="italic">
            {formattedDate}
          </Text>
        </Stack>
      </Stack>
    </HStack>
  );
};

export default ReviewHeader;
