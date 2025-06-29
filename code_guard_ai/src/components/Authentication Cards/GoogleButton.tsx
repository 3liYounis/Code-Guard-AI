import { Button, HStack, Icon, Text } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";

interface Props {
    onClicked: () => void;
}
const GoogleButton = ({ onClicked }: Props) => {
    return (
        <Button onClick={onClicked} alignSelf="center" fontSize="18px">
            <HStack>
                <Text>Continue With Google</Text>
                <Icon as={FcGoogle} />
            </HStack>
        </Button>
    )
}

export default GoogleButton;