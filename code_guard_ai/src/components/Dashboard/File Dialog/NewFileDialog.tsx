import { Button, CloseButton, HStack, Portal, Dialog } from "@chakra-ui/react";
import AddCodeReview from "./AddCodeReview";
import CodeUpload from "./CodeUpload";
const NewFileDialog = () => {
    return (
        <HStack wrap="wrap" gap="4" justifyContent="center" alignItems="center" width={470}>
            <Dialog.Root
                placement="center"
                motionPreset="slide-in-bottom"
            >
                <Dialog.Trigger>
                    <AddCodeReview />
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Upload Your Source Code</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <CodeUpload />
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Dialog.ActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </Dialog.ActionTrigger>
                                <Button>Submit</Button>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </HStack >
    );
}

export default NewFileDialog;