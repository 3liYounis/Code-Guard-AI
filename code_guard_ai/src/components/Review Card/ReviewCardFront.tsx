import type { CodeReview } from "./ReviewCard";
import { Box, Card, Stack, Button } from "@chakra-ui/react";
import ReviewHeader from "./ReviewHeader";
import TotalScore from "./TotalScore";
import ReviewChart from "./Charts/ReviewChart";
import ReviewBar from "./Charts/ReviewBar";

interface Props {
  codeReview: CodeReview;
}

const ReviewCardFront = ({ codeReview }: Props) => {
  const total =
    (codeReview.security +
      codeReview.cleanliness +
      codeReview.maintainability) /
    3;
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      backfaceVisibility="hidden"
      borderRadius={40}
      p={4}
    >
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
        <Card.Body>
          <Stack
            gap={16}
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
      </Card.Root>
    </Box>
  );
};

export default ReviewCardFront;
