import { Stack, HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const ReviewCardCoverSkeleton = () => {
    return (
        <Stack width={400} border="solid" borderColor="fg.subtle" borderRadius={20}>
            <HStack gap={10}>
                <HStack padding={4}>
                    <SkeletonCircle size={16} />
                    <Stack>
                        <SkeletonText noOfLines={1} width={40} />
                        <SkeletonText noOfLines={1} width={20} />
                        <SkeletonText noOfLines={1} width={48} />
                    </Stack>
                </HStack>
                <Stack>
                    <SkeletonText noOfLines={1} width={10} height={10} />
                </Stack>
            </HStack>
        </Stack >
    );
};

export default ReviewCardCoverSkeleton;
