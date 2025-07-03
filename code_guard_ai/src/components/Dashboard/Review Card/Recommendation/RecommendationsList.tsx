import { List, Stack, Heading, HStack } from "@chakra-ui/react";
import Recommendation from "./Recommendation";
import type { Suggestion } from "../ReviewCard";
import Emoji from "../../../ui/Emoji";
interface Props {
    recommendations: Suggestion[];
}
const RecommendationsList = ({ recommendations }: Props) => {
    return (
        <Stack justifyContent="center" alignItems="center" gap={4}>
            <HStack>
                <Heading>Recommendations</Heading>
                <Emoji type="other" />
            </HStack>
            <List.Root listStyleType="none">
                <Stack gap={5}>
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
