import AnimatedBox from "./AnimatedBox";
import ReviewCardFront from "./ReviewCardFront";
import ReviewCardBack from "./ReviewCardBack";
import { code } from "framer-motion/client";

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
    <AnimatedBox codeReview={codeReview} width={450} height={530}></AnimatedBox>
  );
};

export default ReviewCard;
