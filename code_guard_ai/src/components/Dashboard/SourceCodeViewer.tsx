import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { CodeReview } from './Review Card/ReviewCard';
import {
    Dialog,
    Box,
    CloseButton
} from '@chakra-ui/react';
import FileHeader from './FileHeader';

interface Props {
    codeReview: CodeReview | null;
    isOpen: boolean;
    onOpenChange: (details: { open: boolean }) => void;
}

const SourceCodeViewer = ({ codeReview, isOpen, onOpenChange }: Props) => {
    if (!codeReview) return null;
    return (
        <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
            <Dialog.Backdrop />
            <Dialog.Positioner mt={10}>
                <Dialog.Content maxW="90%" w="100%" maxH="full" h="86%" width="100%" overflowY="auto">
                    <Dialog.CloseTrigger asChild>
                        <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                    <Dialog.Header>
                        <FileHeader codeReview={codeReview} />
                    </Dialog.Header>
                    <Dialog.Body padding={4}>
                        <Box
                            width="100%"
                            borderRadius="md"
                            borderWidth="1px"
                            overflow="hidden"
                        >
                            <SyntaxHighlighter
                                language={codeReview.programming_language.toLowerCase()}
                                style={oneDark}
                                showLineNumbers
                                wrapLongLines
                                customStyle={{
                                    margin: 0,
                                    padding: '1em',
                                    background: 'transparent',
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-word',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                }}
                            >
                                {codeReview.file_content}
                            </SyntaxHighlighter>
                        </Box>
                    </Dialog.Body>
                    <Dialog.Footer />
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root >
    );
};

export default SourceCodeViewer;
