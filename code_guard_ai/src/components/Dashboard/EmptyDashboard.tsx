import { ButtonGroup, EmptyState, Icon, VStack } from "@chakra-ui/react"
import { FaRegStickyNote } from "react-icons/fa";
import AddCodeReview from "./File Dialog/AddCodeReview";
interface Props {
    onNewFileClick: () => void;
}
const EmptyDashboard = ({ onNewFileClick }: Props) => {
    return (
        <EmptyState.Root paddingTop={20}>
            <EmptyState.Content>
                <EmptyState.Indicator asChild>
                    <Icon as={FaRegStickyNote} boxSize={40} />
                </EmptyState.Indicator>
                <VStack textAlign="center">
                    <EmptyState.Title>Get A Concrete Feedback!</EmptyState.Title>
                    <EmptyState.Description>
                        Upload your first source code file to get started 😁
                    </EmptyState.Description>
                </VStack>
                <ButtonGroup>
                    <AddCodeReview onClicked={onNewFileClick} />
                </ButtonGroup>
            </EmptyState.Content>
        </EmptyState.Root>
    );
}

export default EmptyDashboard;