import type { CodeReview } from "./ReviewCard";
import { Button, Card } from "@chakra-ui/react";
import ReviewHeader from "./ReviewHeader";
import RecommendationsList from "./Recommendation/RecommendationsList";

interface Props {
  codeReview: CodeReview;
  onSwitch: () => void;
  refresh: () => Promise<void>;
}
const ReviewCardBack = ({ codeReview, onSwitch, refresh }: Props) => {
  return (
    <Card.Root height="100%" border="solid" borderRadius={30} >
      <Card.Header>
        <ReviewHeader codeReview={codeReview} refresh={refresh} />
      </Card.Header>
      <Card.Body alignItems="center">
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
