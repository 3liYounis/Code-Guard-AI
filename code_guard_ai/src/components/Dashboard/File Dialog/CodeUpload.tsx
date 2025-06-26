import { useEffect } from "react";
import { Text, FileUpload, useFileUploadContext, Icon, Box, HStack, } from "@chakra-ui/react";
import { LuX, LuUpload } from "react-icons/lu";
import { BsFileEarmarkCode } from "react-icons/bs";
const supportedFileExtensions = [".py", ".c", ".java", ".cs", ".js", ".ts", ".jsx", ".vue", ".kt", ".rb"];
interface Props {
    onFileSelect: (file: File | null) => void;
}
const FileUploadList = ({ onFileSelect }: Props) => {
    const fileUpload = useFileUploadContext();
    const files = fileUpload.acceptedFiles;
    useEffect(() => {
        if (files.length > 0)
            onFileSelect(files[0]);
        else
            onFileSelect(null);
    }, [files, onFileSelect]);
    if (files.length === 0) return null;
    return (
        <FileUpload.ItemGroup justifyContent="center" alignItems="center">
            {files.map((file) => (
                <FileUpload.Item
                    gap={8}
                    width="fit-content"
                    file={file}
                    key={file.name}
                    justifyContent="space-between"
                    borderColor="ActiveBorder"
                >
                    <HStack gap={3}>
                        <Icon as={BsFileEarmarkCode} boxSize="6" />
                        <Text fontFamily="cursive" fontSize={16}>
                            {file.name}
                        </Text>
                    </HStack>
                    <FileUpload.ItemDeleteTrigger boxSize="7">
                        <Icon as={LuX} boxSize={5} color="red.500" />
                    </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
            ))}
        </FileUpload.ItemGroup>
    );
};

const CodeUpload = ({ onFileSelect }: Props) => {
    return (
        <FileUpload.Root accept={supportedFileExtensions.join(",")} maxW="xl" alignItems="stretch" maxFiles={1}
        >
            <FileUpload.HiddenInput />
            <FileUpload.Dropzone borderColor="ActiveBorder">
                <Icon size="md">
                    <LuUpload />
                </Icon>
                <FileUpload.DropzoneContent>
                    <Box>Drag And Drop Files Here.</Box>
                    <Box>Click To Browse Files.</Box>
                    <Box color="fg.muted" wordSpacing={2}>
                        <HStack padding={10}>
                            {supportedFileExtensions.map((extension) => (
                                <Text key={extension}>{extension}</Text>
                            ))}
                        </HStack>
                    </Box>
                </FileUpload.DropzoneContent>
            </FileUpload.Dropzone>
            <FileUploadList onFileSelect={onFileSelect} />
        </FileUpload.Root>
    );
};
export default CodeUpload;