import type { CodeReview } from "./ReviewCard";
import { Button, Card } from "@chakra-ui/react";
import ReviewHeader from "./ReviewHeader";
import RecommendationsList from "./Recommendation/RecommendationsList";

interface Props {
  codeReview: CodeReview;
  onSwitch: () => void;
}
const ReviewCardBack = ({ codeReview, onSwitch }: Props) => {
  return (
    <Card.Root height="100%" border="solid" borderRadius={30}>
      <Card.Header>
        <ReviewHeader
          name={codeReview.name}
          programmingLanguage={codeReview.programmingLanguage}
        />
      </Card.Header>
      <Card.Body justifyContent="center" alignItems="center">
        <RecommendationsList recommendations={codeReview.recommendations} />
      </Card.Body>
      <Button
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        onClick={onSwitch}
      >
        Score Chart 📊
      </Button>
    </Card.Root>
  );
};

export default ReviewCardBack;
