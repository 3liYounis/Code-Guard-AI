import AnimatedBox from "./AnimatedBox";
import ReviewCardFront from "./ReviewCardFront";
import ReviewCardBack from "./ReviewCardBack";

export interface Suggestion {
  id: number;
  type: string;
  content: string;
  cite: string;
}

export interface CodeReview {
  id: number;
  name: string;
  programmingLanguage: string;
  security: number;
  cleanliness: number;
  maintainability: number;
  recommendations: Suggestion[];
}

interface Props {
  codeReview: CodeReview;
}

const ReviewCard = ({ codeReview }: Props) => {
  return (
    <AnimatedBox width={450} height={530} frontText="Recommendations 💡" backText="Score Chart 📊">
      <ReviewCardFront codeReview={codeReview} />
      <ReviewCardBack codeReview={codeReview} />
    </AnimatedBox >
  );
};

export default ReviewCard;
