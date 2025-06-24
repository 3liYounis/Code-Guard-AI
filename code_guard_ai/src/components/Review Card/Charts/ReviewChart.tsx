import { BarList, type BarListData, useChart } from "@chakra-ui/charts";
import type { CodeReview } from "../ReviewCard";
interface Props {
  codeReview: CodeReview;
}
export const getColor = (value: number) => {
  if (value >= 85) return "green.600";
  if (value >= 70) return "yellow.600";
  return "red.600";
};
const mapCodeReviewToChart = (codeReview: CodeReview) => {
  const total =
    (codeReview.security +
      codeReview.cleanliness +
      codeReview.maintainability) /
    3;
  return useChart<BarListData>({
    sort: { by: "value", direction: "desc" },
    series: [
      { name: "name", color: getColor(total), label: "Review Scores Chart" },
    ],
    data: [
      { name: "Security", value: codeReview.security },
      { name: "Cleanliness", value: codeReview.cleanliness },
      { name: "Maintainability", value: codeReview.maintainability },
    ],
  });
};
const ReviewChart = ({ codeReview }: Props) => {
  const chart = mapCodeReviewToChart(codeReview);
  return (
    <BarList.Root chart={chart} width={350}>
      <BarList.Content>
        <BarList.Label title="Aspect" flex={1}>
          <BarList.Bar />
        </BarList.Label>
        <BarList.Label title="Score">
          <BarList.Value />
        </BarList.Label>
      </BarList.Content>
    </BarList.Root>
  );
};

export default ReviewChart;
