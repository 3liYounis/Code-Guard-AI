import { CloseButton, Dialog, Flex } from "@chakra-ui/react";
import ReviewCard from "../Review Card/ReviewCard";
import type { CodeReview } from "../Review Card/ReviewCard";

interface Props {
    isOpen: boolean;
    codeReview: CodeReview | null;
    onClose: () => void;
    refresh: () => Promise<void>;
    onDelete: (id: number) => void;
    setShowCode: (review: CodeReview) => void;
}

const ReviewCardDialog = ({ isOpen, onClose, codeReview, refresh, onDelete, setShowCode }: Props) => {
    if (!codeReview) return null;

    return (
        <Dialog.Root open={isOpen} onOpenChange={({ open }) => { if (!open) onClose(); }}>
            <Dialog.Backdrop />
            <Dialog.Positioner mt={10}>
                <Dialog.Content maxW="90%" w="100%" maxH="full" h="86%" width="100%" bg="rgba(0, 0, 0, 0.65)" backdropFilter="blur(7px)">
                    <Dialog.CloseTrigger asChild>
                        <CloseButton size="sm" position="absolute" top="4" right="4" />
                    </Dialog.CloseTrigger>
                    <Dialog.Body p={0}>
                        <Flex
                            width="100%"
                            height="100%"
                            justify="center"
                            align="center"
                        >
                            <ReviewCard
                                codeReview={codeReview}
                                refresh={refresh}
                                onDelete={onDelete}
                                setShowCode={setShowCode}
                            />
                        </Flex>
                    </Dialog.Body>

                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
};

export default ReviewCardDialog;
