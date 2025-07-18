import {
    HStack,
    Avatar,
    Stack,
    Image,
    Text,
    defineStyle,
    Button,
} from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"
import type { CodeReview, LanguageStyle } from "./Review Card/ReviewCard";
import { formatDate, formatTime } from "./Review Card/ReviewHeader";
import Emoji from "@/components/ui/Emoji";
interface Props {
    codeReview: CodeReview;
    langaugeStyles: LanguageStyle;
    setShowCard: () => void;
}
const ReviewCover = ({ codeReview, langaugeStyles, setShowCard }: Props) => {
    const ringCss = defineStyle({
        outlineWidth: "7px",
        outlineColor: langaugeStyles.color,
        outlineOffset: "7px",
        outlineStyle: "solid",
    });
    const modificationDate = new Date(codeReview.upload_date);
    const formattedDate = modificationDate instanceof Date && !isNaN(modificationDate.getTime()) ? `${formatDate(modificationDate)} - ${formatTime(modificationDate)} ` : "Unknown date";
    return (
        <HStack width={400} justifyContent="center" alignItems="center" gap={10} padding="50px" borderRadius={20} height={10} border="solid">
            <HStack>
                <Avatar.Root css={ringCss} size="xl">
                    <Image src={langaugeStyles.imageSrc} boxSize={7} />
                </Avatar.Root >
                <Stack gap={0.5} padding={4} width="200px" fontWeight="bold" >
                    <Text fontWeight="bold" fontFamily="cursive" whiteSpace="nowrap" fontSize="lg" _light={{ color: "black" }} _dark={{ color: "white" }}>{codeReview.name}</Text>
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
            <Tooltip
                showArrow
                content="Open Full Review"
                contentProps={{ css: { color: "ActiveBorder", background: "gray.400" } }}
                positioning={{ offset: { mainAxis: 2, crossAxis: 2 }, placement: "left-start" }}
                openDelay={500}
                closeDelay={100}
            >
                <Button height={10} width="50px" backgroundColor="ActiveBorder" onClick={setShowCard} mt={5}>
                    <Emoji type={"Report"} />
                </Button>
            </Tooltip>
        </HStack >
    );
};

export default ReviewCover;
