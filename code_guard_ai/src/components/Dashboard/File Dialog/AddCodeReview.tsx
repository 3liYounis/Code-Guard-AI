import { HStack, Heading, Button, Icon } from "@chakra-ui/react";
import { BsFileEarmarkCodeFill } from "react-icons/bs";


interface Props {
    onClicked?: () => void;
}
const AddCodeReview = ({ onClicked }: Props) => {
    return (
        <Button onClick={onClicked}>
            <HStack gap={2} justifyContent="center" alignItems="center">
                <Icon as={BsFileEarmarkCodeFill} boxSize={6} />
                <Heading fontFamily="cursive" fontSize={14}>New Review</Heading>
            </HStack>
        </Button>
    );
}

export default AddCodeReview;