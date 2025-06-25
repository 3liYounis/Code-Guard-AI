import { Stack } from "@chakra-ui/react";
import CardButton from "./CardButton";
const handler = () => { }
const CardButtonList = () => {
    return (
        <Stack gap={0.5}>
            <CardButton type="View" onClicked={handler} />
            <CardButton type="Edit" onClicked={handler} />
            <CardButton type="Delete" onClicked={handler} />
        </Stack>
    )
}
export default CardButtonList;