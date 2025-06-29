import type { CodeReview, LanguageStyle } from "./ReviewCard";
import { Button, Card, Stack } from "@chakra-ui/react";
import ReviewHeader from "./ReviewHeader";
import TotalScore from "./TotalScore";
import ReviewChart from "./Charts/ReviewChart";
import ReviewBar from "./Charts/ReviewBar";
import SourceCodeViewer from "../SourceCodeViewer";

interface Props {
  codeReview: CodeReview;
  onSwitch: () => void;
  refresh: () => Promise<void>;
  languageStyles: LanguageStyle;
  onDelete: (reviewID: number) => void;
  setShowCode: () => void;
}

const ReviewCardFront = ({ codeReview, onSwitch, refresh, languageStyles, onDelete, setShowCode }: Props) => {
  const total = (codeReview.security + codeReview.cleanliness + codeReview.maintainability) / 3;
  return (
    <Card.Root height="100%" border="5px solid transparent" borderImageSlice={1} borderImageSource={languageStyles.gradient}>
      <Card.Header>
        <ReviewHeader codeReview={codeReview} onDelete={onDelete} refresh={refresh} langaugeStyles={languageStyles} setShowCode={setShowCode} />
      </Card.Header>
      <Card.Body>
        <Stack
          gap={5}
          alignItems="center"
          justifyContent="center"
          paddingTop={2}
          width="100%"
        >
          <TotalScore totalScore={total} />
          <ReviewChart codeReview={codeReview} />
          <ReviewBar codeReview={codeReview} />
        </Stack>
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
        Recommendations 💡
      </Button>
    </Card.Root>
  );
};

export default ReviewCardFront;
