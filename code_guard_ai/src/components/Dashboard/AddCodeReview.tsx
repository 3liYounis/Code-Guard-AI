import { Button, Heading, Stack } from "@chakra-ui/react";
import Emoji from "../ui/Emoji";
interface Props {
    onClick: () => void;
}
const AddCodeReview = ({ onClick }: Props) => {
    return (
        <Button height={350} width={350} left="10%" borderRadius={40} onClick={onClick}>
            <Stack gap={10} justifyContent="center" alignItems="center">
                <Emoji type="File" />
                <Heading fontFamily="cursive">Review A New File</Heading>
            </Stack>
        </Button>
    );
}

export default AddCodeReview;