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
  file_content: string;
  programming_language: string;
  security: number;
  cleanliness: number;
  maintainability: number;
  recommendations: Suggestion[];
  upload_date: number;
}

interface Props {
  codeReview: CodeReview;
  refresh: () => Promise<void>;
}

const ReviewCard = ({ codeReview, refresh }: Props) => {
  return (
    <AnimatedBox codeReview={codeReview} width={470} height={530} refresh={refresh}></AnimatedBox >
  );
};

export default ReviewCard;
