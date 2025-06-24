import { List, Stack, Heading, HStack } from "@chakra-ui/react";
import Recommendation from "./Recommendation";
import type { Suggestion } from "../Review Card/ReviewCard";
import Emoji from "../Emoji";
interface Props {
    recommendations: Suggestion[];
}
const RecommendationsList = ({ recommendations }: Props) => {
    return (
        <Stack justifyContent="center" alignItems="center">
            <HStack>
                <Heading>Recommendations</Heading>
                <Emoji type="other" />
            </HStack>
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