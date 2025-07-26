import {
  HStack,
  Avatar,
  Stack,
  Image,
  Text,
  defineStyle,
  Button
} from "@chakra-ui/react";
import CardButtonList from "./Buttons/CardButtonList";
import type { CodeReview, LanguageStyle } from "./ReviewCard";
interface Props {
  codeReview: CodeReview;
  langaugeStyles: LanguageStyle;
  refresh: () => Promise<void>;
  onDelete: (reviewID: number) => void;
  setShowCode: () => void;
  clickable: boolean;
  onClose: () => void;

}
export const formatTime = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
export const formatDate = (date: Date): string => {
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = weekDays[date.getDay()];
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${day} ${dd}/${mm}/${yyyy}`;
};
const ReviewHeader = ({ codeReview, refresh, langaugeStyles, onDelete, setShowCode, clickable, onClose }: Props) => {
  const ringCss = defineStyle({
    outlineWidth: "7px",
    outlineColor: langaugeStyles.color,
    outlineOffset: "7px",
    outlineStyle: "solid",
  });
  const modificationDate = new Date(codeReview.upload_date);
  const formattedDate = modificationDate instanceof Date && !isNaN(modificationDate.getTime()) ? `${formatDate(modificationDate)} - ${formatTime(modificationDate)} ` : "Unknown date";
  return (
    <HStack width="100%" justifyContent="space-between">
      <HStack>
        <Avatar.Root css={ringCss} size="xl">
          <Image src={langaugeStyles.imageSrc} boxSize={7} />
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
      {clickable && <Button>Open As Card</Button>}
      {!clickable && <CardButtonList codeReview={codeReview} onDelete={onDelete} refresh={refresh} setShowCode={setShowCode} onClose={onClose} />}
    </HStack >
  );
};

export default ReviewHeader;
