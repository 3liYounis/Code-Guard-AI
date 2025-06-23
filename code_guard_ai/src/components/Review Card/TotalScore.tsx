import { Alert, type ConditionalValue, Icon } from "@chakra-ui/react"
import type { IconType } from "react-icons";
import { FaQuestion, FaCheck } from "react-icons/fa";
import { TiWarning } from "react-icons/ti";
import { MdOutlineDangerous } from "react-icons/md";
interface StatusMap {
    icon: IconType;
    color: string;
    description: string;
}
interface Props {
    totalScore: number
}
const getStatus = (value: number): ConditionalValue<"success" | "warning" | "error"> => {
    if (value >= 85) return "success";
    if (value >= 70) return "warning";
    return "error";
};
const statusMap: { [key: string]: StatusMap } = {
    "success": { icon: FaCheck, color: "green.600", description: "Looks like your code meets high standards!" },
    "warning": { icon: TiWarning, color: "yellow.600", description: "Take a look at the missing parts and act upon!" },
    "error": { icon: MdOutlineDangerous, color: "red.600", description: "Looks like your code has some critical issues!" },
    "other": { icon: FaQuestion, color: "white.600", description: "" }
}
const TotalScore = ({ totalScore }: Props) => {
    const status = getStatus(totalScore);
    const description = (statusMap[status?.toString()] ?? statusMap["other"]).description;
    const iconSource = (statusMap[status?.toString()] ?? statusMap["other"]).icon;
    const color = (statusMap[status?.toString()] ?? statusMap["other"]).color;
    return (
        <Alert.Root status={status} width={400} variant="outline" color={color}>
            <Alert.Indicator>
                <Icon as={iconSource} boxSize={5} color={color} />
            </Alert.Indicator>
            <Alert.Content>
                <Alert.Title>
                    Overall Score: {totalScore.toFixed(2)}
                </Alert.Title>
                <Alert.Description>
                    {description}
                </Alert.Description>
            </Alert.Content>
        </Alert.Root>
    )
}

export default TotalScore;