import type { CodeReview } from "./ReviewCard";
import { Box, Card } from "@chakra-ui/react";
import ReviewHeader from "./ReviewHeader";
import RecommendationsList from "./RecommendationsList";

interface Props {
  codeReview: CodeReview;
}
const ReviewCardBack = ({ codeReview }: Props) => {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      backfaceVisibility="hidden"
      transform="rotateY(180deg)"
      rounded="xl"
      boxShadow="xl"
      borderRadius={40}
      p={4}
      overflowY="auto"
    >
      <Card.Root
        height="100%"
        borderColor="white"
        border="solid"
        borderRadius={30}
      >
        <Card.Header>
          <ReviewHeader
            name={codeReview.name}
            programmingLanguage={codeReview.programmingLanguage}
          />
        </Card.Header>
        <Card.Body justifyContent="center" alignItems="center">
          <RecommendationsList recommendations={codeReview.recommendations} />
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default ReviewCardBack;
