import type { CodeReview } from "./ReviewCard";
import { Button, Card, Stack } from "@chakra-ui/react";
import ReviewHeader from "./ReviewHeader";
import TotalScore from "./TotalScore";
import ReviewChart from "./Charts/ReviewChart";
import ReviewBar from "./Charts/ReviewBar";

interface Props {
  codeReview: CodeReview;
  onSwitch: () => void;
}

const ReviewCardFront = ({ codeReview, onSwitch }: Props) => {
  const total = (codeReview.security + codeReview.cleanliness + codeReview.maintainability) / 3;
  return (
    <Card.Root height="100%" border="solid" borderRadius={30}>
      <Card.Header>
        <ReviewHeader
          name={codeReview.name}
          programmingLanguage={codeReview.programmingLanguage}
          modificationDate={codeReview.modificationDate}
        />
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
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        onClick={onSwitch}
      >
        Recommendations 💡
      </Button>
    </Card.Root>
  );
};

export default ReviewCardFront;
