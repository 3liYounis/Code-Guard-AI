import { List, Stack, Heading } from "@chakra-ui/react";
import Recommendation from "./Recommendation";
import type { Suggestion } from "../Review Card/ReviewCard";
interface Props {
    recommendations: Suggestion[];
}
const RecommendationsList = ({ recommendations }: Props) => {
    return (
        <Stack justifyContent="center" alignItems="center">
            <Heading>Recommendations 💡</Heading>
            <List.Root listStyleType="none">
                <Stack gap={0}>
                    {recommendations.map(rec =>
                        <List.Item key={rec.id}>
                            <Recommendation recommendation={rec} />
                        </List.Item>
                    )}
                </Stack>
            </List.Root>
        </Stack>
    )
}

export default RecommendationsList;