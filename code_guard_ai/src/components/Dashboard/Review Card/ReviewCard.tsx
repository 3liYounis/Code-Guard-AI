import AnimatedBox from "./AnimatedBox";

export interface Suggestion {
  id: number;
  type: string;
  content: string;
  cite: string;
}

export interface CodeReview {
  id: number;
  name: string;
  File: File;
  programmingLanguage: string;
  security: number;
  cleanliness: number;
  maintainability: number;
  recommendations: Suggestion[];
  modificationDate: Date;
}

interface Props {
  codeReview: CodeReview;
}

const ReviewCard = ({ codeReview }: Props) => {
  return (
    <AnimatedBox codeReview={codeReview} width={470} height={530}></AnimatedBox>
  );
};

export default ReviewCard;
