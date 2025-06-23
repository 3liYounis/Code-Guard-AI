import { useChart, BarSegment } from "@chakra-ui/charts"
import type { CodeReview } from "../ReviewCard";
import { getColor } from "./ReviewChart";
interface Props {
    codeReview: CodeReview;
}
const mapCodeReviewToBar = (codeReview: CodeReview) => {
    return useChart(
        {
            sort: { by: "value", direction: "desc" },
            series: [{ name: "name", label: "Review Scores Bar" }],
            data: [
                { name: "Security", value: codeReview.security, color: getColor(codeReview.security) },
                { name: "Cleanliness", value: codeReview.cleanliness, color: getColor(codeReview.cleanliness) },
                { name: "Maintainability", value: codeReview.maintainability, color: getColor(codeReview.maintainability) },
            ],
        }
    )
}
const ReviewBar = ({ codeReview }: Props) => {
    const chart = mapCodeReviewToBar(codeReview);
    return (
        <BarSegment.Root chart={chart} barSize="4">
            <BarSegment.Content>
                <BarSegment.Bar gap="0.5" />
            </BarSegment.Content>
            <BarSegment.Legend gap="2" textStyle="xs" showPercent />
        </BarSegment.Root>
    );
};

export default ReviewBar;