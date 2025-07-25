import type { CodeReview, LanguageStyle } from "./ReviewCard";
import { Button, Card } from "@chakra-ui/react";
import ReviewHeader from "./ReviewHeader";
import RecommendationsList from "./Recommendation/RecommendationsList";

interface Props {
  codeReview: CodeReview;
  onSwitch: () => void;
  refresh: () => Promise<void>;
  languageStyles: LanguageStyle;
  onDelete: (reviewID: number) => void;
  setShowCode: () => void;
  onClose: () => void;
}
const ReviewCardBack = ({ codeReview, onSwitch, refresh, languageStyles, onDelete, setShowCode, onClose }: Props) => {
  return (
    <Card.Root height="100%" border="5px solid transparent" borderImageSlice={1} borderImageSource={languageStyles.gradient}>
      <Card.Header>
        <ReviewHeader codeReview={codeReview} onDelete={onDelete} refresh={refresh} langaugeStyles={languageStyles} setShowCode={setShowCode} clickable={false} onClose={onClose} />
      </Card.Header>
      <Card.Body alignItems="center">
        <RecommendationsList recommendations={codeReview.recommendations} />
      </Card.Body>
      <Button
        fontWeight={500}
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        onClick={onSwitch}
      // backgroundImage={languageStyles.gradient}
      >
        Score Chart 📊
      </Button>
    </Card.Root>
  );
};

export default ReviewCardBack;
