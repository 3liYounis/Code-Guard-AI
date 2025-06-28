import {
  HStack,
  Avatar,
  Stack,
  Image,
  Text,
  defineStyle,
} from "@chakra-ui/react";
import CardButtonList from "./Buttons/CardButtonList";
import type { CodeReview } from "./ReviewCard";
import ProgrammingLanguages from "@/assets/Programming Languages/ProgrammingLanguages";
interface Props {
  codeReview: CodeReview;
  refresh: () => Promise<void>;
}
const LanguageMap: { [key: string]: { imageSrc: string, color: string } } = {
  "Python": { imageSrc: ProgrammingLanguages.Python, color: "yellow" },
  "JavaScript": { imageSrc: ProgrammingLanguages.JavaScript, color: "" },
  "TypeScript": { imageSrc: ProgrammingLanguages.TypeScript, color: "" },
  "Java": { imageSrc: ProgrammingLanguages.Java, color: "" },
  "C#": { imageSrc: ProgrammingLanguages.CSharp, color: "" },
  "C++": { imageSrc: ProgrammingLanguages.CPlus, color: "" },
  "C": { imageSrc: ProgrammingLanguages.C, color: "" },
  "Kotlin": { imageSrc: ProgrammingLanguages.Kotlin, color: "" },
  "Ruby": { imageSrc: ProgrammingLanguages.Ruby, color: "" },
  "other": { imageSrc: "", color: "ActiveBorder" },
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
  const dateStr = date.toLocaleDateString();
  return `${day} ${dateStr}`;
};
const ReviewHeader = ({ codeReview, refresh }: Props) => {
  const imageSrc = LanguageMap[codeReview.programming_language].imageSrc ?? LanguageMap["other"].imageSrc
  const modificationDate = new Date(codeReview.upload_date);
  const formattedDate = modificationDate instanceof Date && !isNaN(modificationDate.getTime()) ? `${formatDate(modificationDate)} - ${formatTime(modificationDate)}` : "Unknown date";
  return (
    <HStack width="100%" justifyContent="space-between">
      <HStack>
        <Avatar.Root css={ringCss} size="xl">
          <Image src={imageSrc} boxSize={6} />
        </Avatar.Root >
        <Stack gap={0.5} padding={4} width="200px" fontWeight="bold" >
          <Text fontWeight="bold" whiteSpace="nowrap" fontSize="lg">{codeReview.name}</Text>
          <Stack gap={0} color="fg.muted">
            <Text textStyle="sm">
              {codeReview.programming_language}
            </Text>
            <Text fontWeight="normal" textStyle="sm" fontStyle="italic">
              {formattedDate}
            </Text>
          </Stack>
        </Stack>
      </HStack >
      <CardButtonList codeReview={codeReview} refresh={refresh} />
    </HStack >
  );
};

export default ReviewHeader;
