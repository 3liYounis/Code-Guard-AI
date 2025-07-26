import { Button, HStack, Image, Text } from "@chakra-ui/react"
import Google from "../../assets/Google.svg"
interface Props {
    onClicked: () => void;
}
const GoogleButton = ({ onClicked }: Props) => {
    return (
        <Button onClick={onClicked} alignSelf="center" fontSize="18px">
            <HStack>
                <Image src={Google} boxSize={6} />
                <Text fontFamily="cursive">Continue With Google</Text>
            </HStack>
        </Button>
    )
}

export default GoogleButton;