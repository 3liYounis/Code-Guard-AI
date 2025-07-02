import { useState } from "react";
import { Button, CloseButton, HStack, Portal, Dialog } from "@chakra-ui/react";
import CodeUpload from "./CodeUpload";

interface NewFileDialogProps {
    isOpen: boolean;
    onOpenChange: (details: { open: boolean }) => void;
    onSuccess: () => void;
    onSubmit: (file: File) => void;
}

const NewFileDialog = ({ isOpen, onOpenChange, onSuccess, onSubmit }: NewFileDialogProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const submitNewFile = async () => {
        if (!file) return;
        try {
            setIsLoading(true);
            await onSubmit(file);
            setIsLoading(false);
            setFile(null);
            onSuccess();
        }
        catch {
        }
    };

    return (
        <HStack wrap="wrap" gap="4" justifyContent="center" alignItems="center" width={470}>
            <Dialog.Root open={isOpen} onOpenChange={(details) => onOpenChange(details)} placement="center" motionPreset="slide-in-bottom"
            >
                <Dialog.Trigger>
                </Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Upload Your Source Code</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <CodeUpload onFileSelect={setFile} />
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Dialog.ActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </Dialog.ActionTrigger>
                                <Button onClick={submitNewFile} disabled={!file || isLoading}>
                                    Submit
                                </Button>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </HStack>
    );
};

export default NewFileDialog;