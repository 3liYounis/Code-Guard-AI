import { Button } from '@chakra-ui/react';
import Emoji from '@/components/ui/Emoji';
interface Props {
    type: string;
    onClicked: () => void;
}
const CardButton = ({ type, onClicked }: Props) => {
    return (
        <Button onClick={onClicked} height={5}>
            <Emoji type={type} />
        </Button>
    )
}

export default CardButton