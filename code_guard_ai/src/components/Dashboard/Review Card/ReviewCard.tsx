import AnimatedBox from "./AnimatedBox";
import ProgrammingLanguages from "@/assets/Programming Languages/ProgrammingLanguages";
import question from "../../../assets/Emojies/question.svg"
export interface LanguageStyle {
  imageSrc: string;
  color: string;
  gradient: string;
}
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
  onDelete: (reviewID: number) => void;
}
const LanguageMap: { [key: string]: LanguageStyle } = {
  Python: {
    imageSrc: ProgrammingLanguages.Python,
    color: "#3572A5",
    gradient: "linear-gradient(135deg, #FFD43B 0%, #3572A5 100%)"
  },
  JavaScript: {
    imageSrc: ProgrammingLanguages.JavaScript,
    color: "#F7DF1E",
    // gradient: "linear-gradient(135deg, #F7DF1E 0%,rgb(90, 87, 87) 100%)"
    gradient: "linear-gradient(135deg, rgb(90, 87, 87) 0%,#F7DF1E 100%)"
  },
  TypeScript: {
    imageSrc: ProgrammingLanguages.TypeScript,
    color: "#3178C6",
    gradient: "linear-gradient(135deg, #3178C6 0%, #235A97 100%)"
  },
  Java: {
    imageSrc: ProgrammingLanguages.Java,
    color: "#E76F00",
    gradient: "linear-gradient(135deg, #F29111 0%, #E76F00 100%)"
  },
  "C#": {
    imageSrc: ProgrammingLanguages.CSharp,
    color: "#9B4F96",
    gradient: "linear-gradient(135deg,rgb(149, 63, 170) 0%,#9B4F96 100%)"
  },
  "C++": {
    imageSrc: ProgrammingLanguages.CPlus,
    color: "#00599C",
    gradient: "linear-gradient(135deg, #004482 0%, #00599C 100%)"
  },
  C: {
    imageSrc: ProgrammingLanguages.C,
    color: "#A8B9CC",
    gradient: "linear-gradient(135deg, #659AD2 0%, #A8B9CC 100%)"
  },
  Kotlin: {
    imageSrc: ProgrammingLanguages.Kotlin,
    color: "#A97BFF",
    gradient: "linear-gradient(135deg, #F18E33 0%, #A97BFF 100%)"
  },
  Ruby: {
    imageSrc: ProgrammingLanguages.Ruby,
    color: "#701516",
    gradient: "linear-gradient(135deg, #CC342D 0%, #701516 100%)"
  },
  other: {
    imageSrc: question,
    color: "#A0AEC0",
    gradient: "linear-gradient(135deg, #CBD5E0 0%, #A0AEC0 100%)"
  }
};
const ReviewCard = ({ codeReview, refresh, onDelete }: Props) => {
  const langaugeStyles = (LanguageMap[codeReview.programming_language] ?? LanguageMap["other"])
  return (
    <AnimatedBox codeReview={codeReview} width={470} height={530} refresh={refresh} onDelete={onDelete} languageStyles={langaugeStyles}></AnimatedBox >
  );
};

export default ReviewCard;
