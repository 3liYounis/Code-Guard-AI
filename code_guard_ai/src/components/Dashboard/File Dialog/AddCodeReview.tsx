import { Button, Heading, Stack } from "@chakra-ui/react";
import Emoji from "../../ui/Emoji";
const AddCodeReview = () => {
    return (
        <Stack gap={10} justifyContent="center" alignItems="center" height={350} width={350} borderRadius={40} _light={{ bg: "black", color: "white" }} _dark={{ bg: "white", color: "black" }}>
            <Emoji type="File" />
            <Heading fontFamily="cursive">Review A New File</Heading>
        </Stack>
    );
}

export default AddCodeReview;