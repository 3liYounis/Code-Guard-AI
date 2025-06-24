import type { CodeReview } from "./ReviewCard";
import { Card } from "@chakra-ui/react";
import ReviewHeader from "./ReviewHeader";
import RecommendationsList from "./Recommendation/RecommendationsList";

interface Props {
  codeReview: CodeReview;
}
const ReviewCardBack = ({ codeReview }: Props) => {
  return (
    <Card.Root
      height="100%"
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
  );
};

export default ReviewCardBack;
