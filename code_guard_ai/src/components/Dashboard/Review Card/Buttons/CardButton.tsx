import { Button } from '@chakra-ui/react';
import { Tooltip } from "@/components/ui/tooltip"
import Emoji from '@/components/ui/Emoji';

interface Props {
    type: string;
    onClicked: () => void;
}
const cssMap: { [key: string]: {} } = {
    "Delete": { "--tooltip-bg": "colors.red.500" },
    "Edit": { "--tooltip-bg": "colors.yellow.500" },
    "View": { "--tooltip-bg": "colors.green.500" }
}
const CardButton = ({ type, onClicked }: Props) => {
    return (
        <Tooltip
            showArrow
            content={type}
            contentProps={{ css: { ...cssMap[type], color: "ActiveBorder" } }}
            positioning={{ offset: { mainAxis: 2, crossAxis: 2 }, placement: "left-end" }}
            openDelay={500}
            closeDelay={100}
        >
            <Button onClick={onClicked} height={5} width="55px">
                <Emoji type={type} />
            </Button>
        </Tooltip>
    )
}
export default CardButton;