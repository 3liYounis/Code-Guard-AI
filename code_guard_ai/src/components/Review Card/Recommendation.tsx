import { Blockquote, Float, Text } from "@chakra-ui/react";
import type { Suggestion } from "./ReviewCard";
import Emoji from "../Emoji";
interface Props {
  recommendation: Suggestion;
}
const Recommendation = ({ recommendation }: Props) => {
  return (
    <Blockquote.Root variant="plain" colorPalette="teal" padding={2}>
      <Float placement="top-start" offsetX={3}>
        <Emoji type={recommendation.type} />
      </Float>
      <Blockquote.Content cite="Code Guard AI" marginTop={4} paddingX={2}>
        <Text>{recommendation.content}</Text>
      </Blockquote.Content>
      <Blockquote.Caption paddingX={2}>
        - {recommendation.cite}
      </Blockquote.Caption>
    </Blockquote.Root>
  );
};

export default Recommendation;
