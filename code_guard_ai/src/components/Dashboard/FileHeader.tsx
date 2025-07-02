import { HStack, Avatar, Stack, Image, Text, defineStyle } from "@chakra-ui/react";
import { LanguageMap, type CodeReview, type LanguageStyle } from "../Dashboard/Review Card/ReviewCard";
import { formatDate, formatTime } from "./Review Card/ReviewHeader";
interface Props {
    codeReview: CodeReview;
}
const FileHeader = ({ codeReview }: Props) => {
    const languageStyles = LanguageMap[codeReview.programming_language]
    const ringCss = defineStyle({
        outlineWidth: "7px",
        outlineColor: languageStyles.color,
        outlineOffset: "7px",
        outlineStyle: "solid",
    });
    const modificationDate = codeReview.upload_date.toDate();
    const formattedDate = modificationDate instanceof Date && !isNaN(modificationDate.getTime()) ? `${formatDate(modificationDate)} - ${formatTime(modificationDate)}` : "Unknown date";
    return (
        <HStack width="100%" justifyContent="space-between">
            <HStack>
                <Avatar.Root css={ringCss} size="xl">
                    <Image src={languageStyles.imageSrc} boxSize={7} />
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
        </HStack >
    );
};

export default FileHeader;
